require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const fetch = require('node-fetch');
const cors = require('cors');
const React = require("react");
const { render } = require("@react-email/render");
const ConfirmationEmail = require("./emails/ConfirmationEmail.cjs");

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY || !process.env.RESEND_API_KEY) {
  console.error("⚠️ ERROR: Faltan variables de entorno en .env");
  process.exit(1);
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const RESEND_API_KEY = process.env.RESEND_API_KEY;

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
  const { name, email, phone } = req.body;
  console.log("📩 Datos recibidos:", req.body);

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Todos los campos son requeridos.' });
  }

  try {
    // Validar si el correo ya existe
    const { data: existingUser, error: findError } = await supabase
      .from('leads')
      .select('email')
      .eq('email', email)
      .maybeSingle();

    if (findError) {
      console.error("🔴 Error al buscar correo:", findError);
      return res.status(500).json({ error: 'Error al validar el correo.' });
    }

    if (existingUser) {
      return res.status(400).json({ error: 'Este correo ya fue registrado.' });
    }

    // Obtener último registro válido con campo 'ultimo_destinatario'
    const { data: lastLead, error: lastError } = await supabase
      .from('leads')
      .select('ultimo_destinatario')
      .not('ultimo_destinatario', 'is', null)
      .order('id', { ascending: false })
      .limit(1)
      .maybeSingle();

    const last = lastLead?.ultimo_destinatario || 'ana';
    const nuevoTurno = last === 'ana' ? 'zeki' : 'ana';

    const linkWhatsapp = nuevoTurno === 'zeki'
      ? 'https://wa.link/ts8jkl'
      : 'https://wa.link/kl4qxg';

    // Guardar nuevo lead con el turno correcto
    const { error: insertError } = await supabase
      .from('leads')
      .insert([{ name, email, phone, ultimo_destinatario: nuevoTurno }]);

    if (insertError) {
      console.error("🔴 Error al insertar lead:", insertError);
      return res.status(500).json({ error: 'No se pudo registrar el lead.' });
    }

    // Enviar correo
    const emailHtml = await render(ConfirmationEmail({ name }));
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'ZENA@zenacentrodecompetencia.com',
        to: email,
        subject: '✅ Confirmación de registro al seminario',
        html: emailHtml
      })
    });

    const resendData = await response.json();

    if (!response.ok) {
      console.error("🔴 Error al enviar correo:", resendData);
      return res.status(500).json({ error: 'Fallo al enviar confirmación por correo.' });
    }

    // Respuesta al frontend
    res.status(200).json({
      message: '✅ Registro exitoso.',
      linkWhatsapp
    });

  } catch (error) {
    console.error("❌ Error inesperado:", error);
    res.status(500).json({ error: 'Error en el servidor.', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});
