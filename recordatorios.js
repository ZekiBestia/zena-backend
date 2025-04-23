require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');
const ReminderSesion2Disponible = require('./emails/ReminderSesion2Disponible.cjs');
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

  if (error) {
    console.error('❌ Error al obtener leads desde Supabase:', error);
    throw error;
  }

  if (!data || data.length === 0) {
    console.warn('⚠️ No se encontraron leads en la base de datos.');
  } else {
    console.log(`📋 Leads encontrados: ${data.length}`);
  }

  return data;
}

async function sendReminder(templateComponent, subjectText) {
  const leads = await fetchLeads();

  if (!leads || leads.length === 0) {
    console.warn("⚠️ No hay leads para enviar correos.");
    return;
  }

  for (const lead of leads) {
    console.log(`📨 Preparando correo para: ${lead.email}`);

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
      console.error(`❌ Error al enviar a ${lead.email}:`, error.message);
    }

    await delay(500);
  }

  console.log(`✔ Todos los correos han sido procesados: ${subjectText}`);
}

// ✅ Ejecutar inmediatamente al iniciar
(async () => {
  console.log('📩 Enviando correo: ¡Disponible la Sesión 2 del Seminario!');
  await sendReminder(ReminderSesion2Disponible, '¡Disponible la Sesión 2 del Seminario Plan de Carrera Profesional!');
})();
