require('dotenv').config(); // Carga las variables de entorno
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const fetch = require('node-fetch');
const cors = require('cors');
const React = require("react"); // Importa React para evitar errores
const { render } = require("@react-email/render"); // Importa render
const ConfirmationEmail = require("./emails/ConfirmationEmail.cjs"); // Importa la plantilla de correo

const app = express();
const PORT = process.env.PORT || 3000;

// Verificación de variables de entorno
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY || !process.env.RESEND_API_KEY) {
    console.error("⚠️ ERROR: Faltan variables de entorno en el archivo .env");
    process.exit(1);
}

// Configura Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const RESEND_API_KEY = process.env.RESEND_API_KEY;

app.use(cors());
app.use(express.json());

// Ruta para manejar el formulario de registro
app.post('/register', async (req, res) => {
    console.log("📩 Datos recibidos:", req.body); // Imprime los datos recibidos en la consola

    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ error: '❌ Todos los campos son requeridos.' });
    }

    try {
        // Verificar si el correo ya está registrado en Supabase
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

        // Generar el HTML del correo correctamente
        const emailHtml = await render(ConfirmationEmail({ name })); // Usa "await"
        console.log("HTML generado:", emailHtml); // Verifica el HTML generado

        // Enviar correo con Resend
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`
            },
            body: JSON.stringify({
                from: 'ZENA@zenacentrodecompetencia.com', // Asegúrate de que esté verificado en Resend
                to: email,
                subject: '¡Tu registro al Seminario “Plan de Carrera Profesional” ha sido confirmado!',
                html: emailHtml, // Asegúrate de que esto sea una cadena de texto
            })
        });

        const resendData = await response.json();

        if (!response.ok) {
            console.error("⚠️ Error en Resend:", resendData);
            return res.status(500).json({ error: 'Error al enviar el correo de confirmación.', details: resendData });
        }

        res.status(200).json({ message: '✅ Registro exitoso y correo enviado.', lead, resendData });

    } catch (error) {
        console.error('❌ Error inesperado en /register:', error);
        res.status(500).json({ error: 'Error inesperado en el servidor.', details: error.message });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});