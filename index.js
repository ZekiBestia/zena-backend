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
    console.log("📩 Datos recibidos:", req.body);

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
            console.error("⚠️ Error en Supabase (búsqueda):", searchError);
            return res.status(500).json({ error: 'Error al verificar el correo en la base de datos.' });
        }

        if (existingUser) {
            return res.status(400).json({ error: '⚠️ El correo electrónico ya está registrado.' });
        }

        // Guardar los datos en Supabase
        const { data: lead, error: supabaseError } = await supabase
            .from('leads')
            .insert([{ name, email, phone }]);

        if (supabaseError) {
            console.error("⚠️ Error en Supabase (inserción):", supabaseError);
            return res.status(500).json({ error: 'Error al guardar los datos en la base de datos.' });
        }

        // Obtener el último destinatario de WhatsApp
        const { data: controlData, error: controlError } = await supabase
            .from('whatsapp_control')
            .select('ultimo_destinatario')
            .eq('id', 1)
            .single();

        if (controlError) {
            console.error("⚠️ Error al consultar whatsapp_control:", controlError);
            return res.status(500).json({ error: 'Error al verificar el destinatario de WhatsApp.' });
        }

        const ultimo = controlData?.ultimo_destinatario;
        const nuevoTurno = ultimo === 'ana' ? 'zeki' : 'ana';

        // ✅ El link que se devuelve al frontend corresponde al nuevo turno
        const linkWhatsapp = nuevoTurno === 'ana'
            ? 'https://wa.link/ts8jkl' // Ana
            : 'https://wa.link/kl4qxg'; // Zeki

        // Actualiza la base de datos con el nuevo turno
        const { error: updateError } = await supabase
            .from('whatsapp_control')
            .update({ ultimo_destinatario: nuevoTurno })
            .eq('id', 1);

        if (updateError) {
            console.error("⚠️ Error al actualizar whatsapp_control:", updateError);
        }


        // Generar el HTML del correo
        const emailHtml = await render(ConfirmationEmail({ name }));
        console.log("HTML generado:", emailHtml);

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
            console.error("⚠️ Error en Resend:", resendData);
            return res.status(500).json({ error: 'Error al enviar el correo de confirmación.', details: resendData });
        }

        res.status(200).json({
            message: '✅ Registro exitoso y correo enviado.',
            lead,
            resendData,
            linkWhatsapp // 👈 lo que usarás en el frontend
        });

    } catch (error) {
        console.error('❌ Error inesperado en /register:', error);
        res.status(500).json({ error: 'Error inesperado en el servidor.', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
