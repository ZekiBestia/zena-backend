require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');
const ReminderLiveEmail = require('./emails/ReminderLiveNow.cjs');
const { render } = require('@react-email/render');
const cron = require('node-cron');

// Configuración
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Función para obtener hora exacta CDMX
function getHourCDMX() {
  const now = new Date();
  const cdmxTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Mexico_City' }));
  return cdmxTime.getHours();
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchLeads() {
  const { data, error } = await supabase.from('leads').select('email, name');
  if (error) throw error;
  return data;
}

async function sendReminder(templateComponent, subjectText) {
  const leads = await fetchLeads();
  for (const lead of leads) {
    const html = await render(templateComponent({ name: lead.name }));
    try {
      await resend.emails.send({
        from: 'ZENA@zenacentrodecompetencia.com',
        to: lead.email,
        subject: subjectText,
        html,
      });
      console.log(`✅ Enviado a ${lead.email}`);
    } catch (error) {
      console.error(`❌ Error con ${lead.email}:`, error.message);
    }
    await delay(500);
  }
  console.log(`✔ Envío finalizado: ${subjectText}`);
}

async function sendLiveReminderIfApplicable() {
  const now = new Date().toLocaleString('en-US', { timeZone: 'America/Mexico_City' });
  const date = new Date(now);
  const hour = date.getHours();
  const minutes = date.getMinutes();

  console.log(`📅 Fecha actual en CDMX: ${date}`);

  if (hour === 19 && minutes <= 10) {
    await sendReminder(ReminderLiveEmail, '🔴 ¡Estamos en vivo! Únete al Seminario "Plan de Carrera Profesional"');
  } else {
    console.log('ℹ️ No se debe enviar el recordatorio en este momento.');
  }
}



// Ejecutar exactamente a las 7:00 p.m. del 24 de abril
cron.schedule('5 19 24 4 *', async () => {
  console.log('⏰ Ejecutando recordatorio EN VIVO a las 7:00 p.m. (24 abril)');
  await sendLiveReminderIfApplicable();
}, { timezone: 'America/Mexico_City' });


module.exports = { sendLiveReminderIfApplicable };
