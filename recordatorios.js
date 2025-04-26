require('dotenv').config();
const { Resend } = require('resend');
const ReminderSesion2 = require('./emails/ReminderOfertaPlanCarrera.cjs');
const { render } = require('@react-email/render');
const cron = require('node-cron');

// Configuración
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

// Delay para evitar bloqueo (aunque innecesario con solo 1)
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Envío directo a una sola persona
async function sendReminderToSinglePerson() {
  const recipient = {
    name: 'Verónica Rodriguez',
    email: 'vrsmp1975@gmail.com',
  };

  console.log(`📩 Preparando envío individual a ${recipient.email}...`);

  try {
    const html = await render(ReminderSesion2({ name: recipient.name }));

    const response = await resend.emails.send({
      from: 'ZENA@zenacentrodecompetencia.com', // Este debe estar verificado en Resend
      to: recipient.email,
      subject: '¡Hoy es la sesión 2 del Seminario Plan de Carrera Profesional!',
      html,
    });

    console.log(`✅ Correo enviado exitosamente a ${recipient.email}`);
    console.log("📨 Respuesta de Resend:", response);
  } catch (error) {
    console.error(`❌ Error al enviar correo a ${recipient.email}:`, error.message);
  }

  await delay(300);
}

// Ejecutar exactamente una vez el 23 de abril a las 7:09 p.m. CDMX
cron.schedule('0 20 25 4 *', async () => {
  console.log('⏰ Ejecutando envío individual a las 7:09 p.m. (23 abril)');
  await sendReminderToSinglePerson();
}, { timezone: 'America/Mexico_City' });

module.exports = { sendReminderToSinglePerson };
