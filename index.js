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
  console.error("⚠️ ERROR: Faltan variables de entorno en el archivo .env");
  process.exit(1);
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const RESEND_API_KEY = process.env.RESEND_API_KEY;

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: '❌ Todos los campos son requeridos.' });
  }

  try {
    // Verificar si el correo ya está registrado
    const { data: existingUser, error: searchError } = await supabase
      .from('leads')
      .select('email')
      .eq('email', email)
      .single();

    if (searchError && searchError.code !== 'PGRST116') {
      return res.status(500).json({ error: 'Error al verificar el correo.' });
    }

    if (existingUser) {
      return res.status(400).json({ error: '⚠️ El correo ya está registrado.' });
    }

    // ✅ Obtener el último destinatario insertado para alternar
    const { data: lastLead } = await supabase
      .from('leads')
      .select('ultimo_destinatario')
      .order('id', { ascending: false })
      .limit(1)
      .single();

    const last = lastLead?.ultimo_destinatario;
    const nuevoTurno = last === 'ana' ? 'zeki' : 'ana';

    const linkWhatsapp = nuevoTurno === 'ana'
      ? 'https://wa.link/ts8jkl' // Ana
      : 'https://wa.link/kl4qxg'; // Zeki

    // ✅ Insertar el lead con el turno asignado
    const { data: inserted, error: insertError } = await supabase
      .from('leads')
      .insert([{ name, email, phone, ultimo_destinatario: nuevoTurno }]);

    if (insertError) {
      return res.status(500).json({ error: 'Error al guardar en Supabase.' });
    }

    // Generar el HTML del correo
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
        subject: '¡Tu registro al Seminario “Plan de Carrera Profesional” ha sido confirmado!',
        html: emailHtml,
      })
    });

    const resendData = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: 'Error al enviar correo.', details: resendData });
    }

    res.status(200).json({
      message: '✅ Registro exitoso y correo enviado.',
      linkWhatsapp
    });

  } catch (error) {
    console.error('❌ Error inesperado:', error);
    res.status(500).json({ error: 'Error inesperado en el servidor.', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});
