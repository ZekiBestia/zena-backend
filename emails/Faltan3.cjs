const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ConfirmationEmail = ({ name }) => {
    return React.createElement(
        Html,
        null,
        React.createElement(Head, null),
        React.createElement(
            Body,
            { style: { fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', padding: '20px', color: '#333' } },
            React.createElement(
                Container,
                { style: { maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' } },

                // Banner en la parte superior
                React.createElement(
                    Section,
                    { style: { textAlign: 'center', marginBottom: '20px' } },
                    React.createElement(Img, {
                        src: "https://kubsycsxqsuoevqckjkm.supabase.co/storage/v1/object/public/PCP//BannerZena.png",
                        alt: "Banner del Seminario",
                        style: { maxWidth: '100%', borderRadius: '10px' },
                        width: "600",
                        height: "auto"
                    })
                ),

                // Encabezado
                React.createElement(
                    Section,
                    { style: { textAlign: 'center', marginBottom: '20px' } },
                    React.createElement(Heading, { style: { fontSize: '24px', color: '#dc3545' } }, "¡Tu registro al Seminario “Plan de Carrera Profesional” ha sido confirmado!"),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, `Hola ${name},`)
                ),

                // Bienvenida
                React.createElement(
                    Section,
                    null,
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "Tu acceso al "),
                    React.createElement(
                        Text,
                        { style: { fontWeight: 'bold', fontSize: '16px', lineHeight: '1.5' } },
                        "Seminario Plan de Carrera Profesional"
                    ),
                    React.createElement(
                        Text,
                        { style: { fontSize: '16px', lineHeight: '1.5' } },
                        " ha sido confirmado. Nos emociona acompañarte en este proceso que fortalecerá tus habilidades estratégicas y abrirá nuevas oportunidades en el mercado laboral."
                    )
                ),

                // Detalles del seminario
                React.createElement(
                    Section,
                    { style: { marginBottom: '20px' } },
                    React.createElement(Heading, { style: { fontSize: '15px', color: '#333', marginBottom: '10px' } }, "En este seminario, en colaboración con Microsoft y Open English, aprenderás:"),
                    React.createElement(
                        Text,
                        { style: { fontSize: '16px', lineHeight: '1.5' } },
                        "✅ Cómo estructurar un ",
                        React.createElement(
                            Text,
                            { style: { fontWeight: 'bold', display: 'inline' } },
                            "Plan de Carrera Profesional"
                        ),
                        " para acceder a mejores sueldos y posiciones de liderazgo."
                    ),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "✅ Cómo las certificaciones internacionales pueden abrirte puertas en empresas globales."),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "✅ La importancia del inglés profesional para destacar en un entorno competitivo."),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "✅ Cómo aprovechar la inteligencia artificial y la tecnología para evaluar y potenciar tu perfil.")
                ),

                // Detalles del evento
                React.createElement(
                    Section,
                    { style: { marginBottom: '20px' } },
                    React.createElement(Heading, { style: { fontSize: '20px', color: '#333', marginBottom: '10px' } }, "📅 Detalles del Evento"),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "📍 Fecha: 21 de abril del 2025"),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "🕒 Hora: 7:00 pm"),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "💻 Plataforma: ZOOM"),
                    React.createElement(
                        Button,
                        {
                            href: "[Enlace de ZOOM]",
                            style: {
                                display: 'inline-block',
                                marginTop: '10px',
                                padding: '10px 30px',
                                backgroundColor: '#0956B5',
                                color: '#ffffff',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontSize: '16px',
                                width: 'auto',
                                margin: '10px auto',
                                textAlign: 'center'
                            }
                        },
                        "👉 Da clic para acceder a la sesión de ZOOM"
                    )
                ),

                // Próximos pasos
                React.createElement(
                    Section,
                    { style: { marginBottom: '20px' } },
                    React.createElement(Heading, { style: { fontSize: '20px', color: '#333', marginBottom: '10px' } }, "🔹 Próximos pasos para aprovechar al máximo:"),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "✔ Revisa tu correo para recibir detalles y recordatorios."),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "✔ Prepara tus preguntas y objetivos para optimizar tu aprendizaje."),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "✔ Verifica tu conexión a internet y acceso a ZOOM con anticipación.")
                ),

                // Asistencia
                React.createElement(
                    Section,
                    { style: { marginBottom: '20px' } },
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "📲 ¿Necesitas asistencia? Contáctanos:"),
                    React.createElement(
                        Link,
                        {
                            href: "[Enlace de WhatsApp]",
                            style: {
                                display: 'inline-block',
                                marginTop: '10px',
                                padding: '10px 30px',
                                backgroundColor: '#25D366',
                                color: '#ffffff',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontSize: '16px',
                                width: 'auto',
                                margin: '10px auto',
                                textAlign: 'center'
                            }
                        },
                        "👉 Da clic para enviarnos un WhatsApp"
                    )
                ),

                // Despedida con firma y redes sociales
                React.createElement(
                    Section,
                    { style: { textAlign: 'center', marginBottom: '20px' } },
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, `Nos vemos en la primera sesión el 21 de abril del 2025 por ZOOM. ¡Tu crecimiento profesional comienza ahora!`),
                    React.createElement(Hr, { style: { borderColor: '#ddd', margin: '20px 0' } }),

                    // Logo de Zena centrado y más grande
                    React.createElement(Img, {
                        src: "https://kubsycsxqsuoevqckjkm.supabase.co/storage/v1/object/public/PCP//Firma.png",
                        alt: "Firma de Zena",
                        style: {
                            maxWidth: '100%', // Ocupa todo el ancho disponible
                            width: '400px',   // Tamaño más grande
                            height: 'auto',   // Mantiene la proporción
                            margin: '20px auto', // Espaciado superior e inferior
                            display: 'block'  // Centrado
                        }
                    }),
                    // Firma profesional
                    React.createElement(Text, { style: { fontSize: '14px', color: '#777', margin: '5px 0' } }, "Atentamente,"),
                    React.createElement(Text, { style: { fontSize: '14px', color: '#777', margin: '5px 0' } }, "Ana Cristina Cara García"),
                    React.createElement(Text, { style: { fontSize: '14px', color: '#777', margin: '5px 0' } }, "Atención a cliente"),
                    React.createElement(Text, { style: { fontSize: '14px', color: '#777', margin: '5px 0' } }, "Centro de competencias ZENA"),

                    // Iconos de redes sociales
                    React.createElement(
                        Section,
                        { style: { textAlign: 'center', marginTop: '20px' } },
                        React.createElement(
                            Link,
                            { href: "https://facebook.com", style: { margin: '0 5px', textDecoration: 'none' } },
                            React.createElement(Img, {
                                src: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
                                alt: "Facebook",
                                width: "24",
                                height: "24",
                                style: { display: 'inline-block' }
                            })
                        ),
                        React.createElement(
                            Link,
                            { href: "https://twitter.com", style: { margin: '0 5px', textDecoration: 'none' } },
                            React.createElement(Img, {
                                src: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
                                alt: "Twitter",
                                width: "24",
                                height: "24",
                                style: { display: 'inline-block' }
                            })
                        ),
                        React.createElement(
                            Link,
                            { href: "https://instagram.com", style: { margin: '0 5px', textDecoration: 'none' } },
                            React.createElement(Img, {
                                src: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
                                alt: "Instagram",
                                width: "24",
                                height: "24",
                                style: { display: 'inline-block' }
                            })
                        )
                    ),

                    // Aviso de confidencialidad
                    React.createElement(
                        Text,
                        { style: { fontSize: '12px', color: '#777', marginTop: '20px', lineHeight: '1.5' } },
                        "AVISO DE CONFIDENCIALIDAD:",
                        React.createElement('br'),
                        "Este correo electrónico, incluyendo en su caso, los archivos adjuntos al mismo, pueden contener información de carácter confidencial y/o privilegiada, y se envían a la atención única y exclusivamente de la persona y/o entidad a quien va dirigido. La copia, revisión, uso, revelación y/o distribución de dicha información confidencial sin la autorización por escrito está prohibida. Si usted no es el destinatario a quien se dirige el presente correo, favor de contactar al remitente respondiendo al presente correo y eliminar incluyendo sus archivos, así como cualquier copia del mismo."
                    )
                )
            )
        )
    );
};

module.exports = ConfirmationEmail;