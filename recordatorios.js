require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');
const Reminder25Minutes = require('./emails/ReminderToday/Reminder25Minutes.cjs');
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
    await delay(500); // Para evitar límites de envío
  }
  console.log(`✔ Envío finalizado: ${subjectText}`);
}

// ENVÍO ÚNICO: 25 minutos antes (26 de mayo, 18:50 CDMX)
cron.schedule(
  '50 18 26 5 *',
  async () => {
    console.log('⏰ Ejecutando envío de Reminder 25 minutos antes del seminario...');
    await sendReminder(
      Reminder25Minutes,
      '📣 Faltan 10 minutos para iniciar el seminario'
    );
  },
  { timezone: 'America/Mexico_City' }
);

// Si quieres exportar la función manual
module.exports = { sendReminder };
