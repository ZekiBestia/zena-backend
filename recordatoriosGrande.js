require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');
const Reminder3DaysEmail = require('./emails/ReminderDayMinus3.cjs');
const Reminder2DaysEmail = require('./emails/ReminderDayMinus2.cjs');
const Reminder1DayEmail = require('./emails/ReminderDayMinus1.cjs');
const ReminderTodayEmail = require('./emails/ReminderToday.cjs');
const ReminderLiveEmail = require('./emails/ReminderLiveNow.cjs');
const { render } = require('@react-email/render');
const cron = require('node-cron');

// Configuración
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Fecha del evento (sólo fecha, sin hora para evitar desfase)
const EVENT_DATE = new Date(
  new Date('2025-04-21T19:00:00').toLocaleString('en-US', {
    timeZone: 'America/Mexico_City',
  })
);

async function fetchLeads() {
  const { data, error } = await supabase.from('leads').select('email, name');
  if (error) throw error;
  return data;
}

function getDiffInDaysFromToday() {
  const todayCDMX = new Date().toLocaleString("en-US", { timeZone: "America/Mexico_City" });
  const now = new Date(todayCDMX);

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const event = new Date(2025, 3, 21); // abril = mes 3

  const diffTime = event.getTime() - today.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  console.log(`🕒 Fecha actual CDMX: ${today}`);
  console.log(`📅 Evento: ${event}`);
  console.log(`📌 Días restantes: ${diffDays}`);

  return diffDays;
}

function getHourCDMX() {
  const now = new Date();
  const cdmxTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Mexico_City' }));
  return cdmxTime.getHours();
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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

async function checkAndSendReminders() {
  const daysLeft = getDiffInDaysFromToday();
  const hour = getHourCDMX();

  switch (daysLeft) {
    case 3:
      await sendReminder(Reminder3DaysEmail, '¡Faltan 3 días para el Seminario!');
      break;
    case 2:
      await sendReminder(Reminder2DaysEmail, '¡Faltan 2 días para el Seminario!');
      break;
    case 1:
      await sendReminder(Reminder1DayEmail, '¡Mañana es el gran día!');
      break;
    case 0:
      if (hour < 19) {
        await sendReminder(ReminderTodayEmail, '¡Hoy es el Seminario "Plan de Carrera Profesional"!');
      }
      if (hour === 19) {
        await sendReminder(ReminderLiveEmail, '🔴 ¡Estamos en vivo! Únete al Seminario "Plan de Carrera Profesional"');
      }
      break;
    default:
      console.log('ℹ️ No se debe enviar correo hoy.');
  }
}

// CRON: Ejecutar cada hora durante el día del evento
cron.schedule('0 * * * *', async () => {
  console.log('⏰ Ejecutando verificación de recordatorios (cada hora)');
  await checkAndSendReminders();
}, { timezone: 'America/Mexico_City' });

// También ejecutable manualmente
if (require.main === module) {
  checkAndSendReminders();
}

module.exports = { checkAndSendReminders };
