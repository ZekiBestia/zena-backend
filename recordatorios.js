require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');
const falta1 = require('./emails/ReminderToday/ReminderOneHour.cjs');
const { render } = require('@react-email/render');
const cron = require('node-cron');

// Configuración
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const resend = new Resend(RESEND_API_KEY);
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

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

// ENVÍO EXACTO: 7:00 p.m. CDMX del 26 de mayo
cron.schedule(
  '01 18 27 5 *',
  async () => {
    console.log('⏰ Ejecutando recordatorio de "Ya estamos en vivo"...');
    await sendReminder(
      falta1,
      'Falta 1 hora para la Sesion 2'
    );
  },
  { timezone: 'America/Mexico_City' }
);

module.exports = { sendReminder };
