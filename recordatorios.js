// Backend para automatizar los 5 correos recordatorios
require('dotenv').config(); // Esto carga el archivo .env
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

  // Crea fechas fijas solo con año, mes, día (sin hora)
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const event = new Date(2025, 3, 21); // abril es mes 3 (0-indexed)

  const diffTime = event.getTime() - today.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  console.log(`🕒 Fecha actual en CDMX (sólo fecha): ${today}`);
  console.log(`📅 Fecha del evento (sólo fecha): ${event}`);
  console.log(`📌 Días restantes al evento: ${diffDays}`);

  return diffDays;
}





function getDiffInMinutesFromNow() {
  const now = new Date();
  return Math.floor((EVENT_DATE - now) / 1000 / 60);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendReminder(templateComponent, subjectText) {
  const leads = await fetchLeads();


  for (const lead of leads) {
    const html = await render(templateComponent({ name: lead.name }));
    //console.log(`✅ HTML generado para ${lead.email}:\n`, html);

    try {
      await resend.emails.send({
        from:'ZENA@zenacentrodecompetencia.com',
        to: lead.email,
        subject: subjectText,
        html,
      });

      console.log(`✅ Correo enviado a ${lead.email}`);
    } catch (error) {
      console.error(`❌ Error al enviar a ${lead.email}:`, error.message);
    }

    await delay(500);
  }

  console.log(`✔ Correos enviados: ${subjectText}`);
}

async function checkAndSendReminders() {
  const daysLeft = getDiffInDaysFromToday();
  const minutesToEvent = getDiffInMinutesFromNow();

  switch (daysLeft) {
    case 3:
      await sendReminder(Reminder3DaysEmail, '¡Faltan solo 3 días para el Seminario "Plan de Carrera Profesional"!');
      break;
    case 2:
      await sendReminder(Reminder2DaysEmail, '¡Faltan solo 2 días para el Seminario "Plan de Carrera Profesional"!');
      break;
    case 1:
      await sendReminder(Reminder1DayEmail, '¡Mañana es el gran día! Seminario "Plan de Carrera Profesional"');
      break;
    case 0:
      const now = new Date();
      const cdmxTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Mexico_City' }));
      const hour = cdmxTime.getHours();
      if (hour === 9) {
        await sendReminder(ReminderTodayEmail, '¡Hoy es el Seminario "Plan de Carrera Profesional"!');
      } else if (cdmxTime.getHours() === 19) {
        await sendReminder(ReminderLiveEmail, '🔴 ¡Estamos en vivo! Únete al Seminario "Plan de Carrera Profesional"');
      }
      break;
    default:
      console.log('No se debe enviar correo hoy.');
  }
}

// Programa para que corra todos los días a las 9:00 a.m. y también a las 7:00 p.m. el 21 de abril
cron.schedule('30 11 * * *', async () => {
  console.log('⏰ Ejecutando verificación de correo a las 9:00 a.m.');
  await checkAndSendReminders();
}, { timezone: 'America/Mexico_City' });

cron.schedule('0 19 21 4 *', async () => {
  console.log('⏰ Ejecutando recordatorio EN VIVO a las 7:00 p.m.');
  await checkAndSendReminders();
}, { timezone: 'America/Mexico_City' });

module.exports = { checkAndSendReminders };
