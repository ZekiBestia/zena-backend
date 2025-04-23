require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');
const ReminderSession3Email = require('./emails/ReminderSession3.cjs');
const { render } = require('@react-email/render');

// Configuración
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const resend = new Resend(RESEND_API_KEY);
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function isTodayApril2CDMX() {
  const nowCDMX = new Date().toLocaleString("en-US", { timeZone: "America/Mexico_City" });
  const today = new Date(nowCDMX);
  return today.getFullYear() === 2025 && today.getMonth() === 3 && today.getDate() === 2;
}

async function fetchLeads() {
  const { data, error } = await supabase.from('leads').select('email, name');

  if (error) throw error;
  return data || [];
}

async function sendReminder(templateComponent, subjectText) {
  const leads = await fetchLeads();

  if (!leads.length) {
    console.warn("⚠️ No hay leads para enviar correos.");
    return;
  }

  for (const lead of leads) {
    const html = await render(templateComponent({ name: lead.name }));
    try {
      await resend.emails.send({
        from: 'ZENA@zenacentrodecompetencia.com',
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

  console.log("✔ Todos los correos han sido enviados.");
}

// 🔁 Ejecutar solo si es 2 de abril (CDMX)
(async () => {
  if (isTodayApril2CDMX()) {
    console.log("📅 Hoy es 2 de abril. Enviando recordatorio de la sesión 3.");
    await sendReminder(ReminderSession3Email, '¡Hoy es la sesión 3 del Seminario Plan de Carrera Profesional!');
  } else {
    console.log("⏹ Hoy NO es 2 de abril. No se envía nada.");
  }
})();
