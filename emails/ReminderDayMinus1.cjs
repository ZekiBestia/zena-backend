const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ReminderDayMinus1 = ({ name }) => {
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

                // Banner
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
                    React.createElement(Heading, { style: { fontSize: '24px', color: '#dc3545' } }, "¡Mañana es la primera sesión del Plan de Carrera Profesional!"),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, `Hola ${name},`)
                ),

                // Cuerpo principal
                React.createElement(
                    Section,
                    null,
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "Te damos la bienvenida a uno de los programas de crecimiento profesional más completos de Latinoamérica, diseñado para ayudarte a avanzar hacia puestos mejor remunerados, desarrollar habilidades estratégicas y posicionarte como un líder en tu industria."),
                    React.createElement(Text, null, "🔹 ¿Cuándo? Mañana a las 7:00 p.m. (hora centro)"),
                    React.createElement(Text, null, "🔹 ¿Dónde? En este grupo, vía sesión en vivo"),
                    React.createElement(Text, null, "🔹 Duración del programa: 5 sesiones gratuitas de alto valor"),
                    React.createElement(Text, { style: { marginTop: '10px' } }, "¿Qué veremos en las sesiones?"),
                    React.createElement(Text, null, "Análisis del caso práctico de Juan: Desarrollo de un plan de carrera para duplicar ingresos de 20,000 a 40,000 pesos, mediante la identificación de competencias actuales y requeridas para su crecimiento profesional y la aplicación a oportunidades laborales superiores."),
                    React.createElement(Text, null, "Aprende cómo identificar, diseñar y ejecutar un proyecto de mejora dentro de tu empresa que impacte y posicione tu perfil para un ascenso o un cambio de empleo."),
                    React.createElement(Text, null, "Descubre las mejores técnicas de negociación laboral, tanto para entrevistas de nuevo ingreso como para solicitar un aumento de sueldo con argumentos sólidos."),
                    React.createElement(Text, null, "Taller en vivo de diseño de planes de carrera con inteligencia artificial."),
                    React.createElement(Text, null, "Estrategias de promoción laboral, bolsas de trabajo y redes sociales."),
                    React.createElement(Text, { style: { marginTop: '10px' } }, "Este es el primer paso para salir del estancamiento profesional y empezar a generar resultados reales.")
                ),

                // Enlaces de acceso
                React.createElement(
                    Section,
                    { style: { marginTop: '20px' } },
                    React.createElement(
                        Button,
                        {
                            href: "https://us06web.zoom.us/meeting/register/JOXo1ZF6TSCUqM6Xdkj5mQ",
                            style: {
                                display: 'inline-block',
                                padding: '10px 30px',
                                backgroundColor: '#0956B5',
                                color: '#ffffff',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontSize: '16px',
                                textAlign: 'center'
                            }
                        },
                        "👉 Da clic para acceder a la sesión de ZOOM"
                    ),
                    React.createElement(Text, { style: { marginTop: '10px' } }, "⚠️ Sala alterna (en caso de que la principal esté llena):"),
                    React.createElement(
                        Button,
                        {
                            href: "https://us06web.zoom.us/meeting/register/josihPlRQP6WFbEqHvQ6vQ",
                            style: {
                                display: 'inline-block',
                                padding: '10px 30px',
                                backgroundColor: '#6c757d',
                                color: '#ffffff',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontSize: '16px',
                                textAlign: 'center'
                            }
                        },
                        "👉 Da clic para acceder a la sesión en la sala alterna"
                    )
                ),

                // Preparación
                React.createElement(
                    Section,
                    { style: { marginTop: '20px' } },
                    React.createElement(Text, null, "Prepárate con lo necesario:"),
                    React.createElement(Text, null, "✔ Conexión estable a internet"),
                    React.createElement(Text, null, "✔ Audífonos o un espacio sin interrupciones"),
                    React.createElement(Text, null, "✔ Tu cuaderno de apuntes o libreta de ideas"),
                    React.createElement(Text, null, "✔ Actitud abierta para aprender, evaluar y avanzar"),
                    React.createElement(Text, { style: { marginTop: '10px' } }, "📘 Importante: Durante la Sesión 1 se compartirá el Manual de Plan de Carrera Profesional, un recurso exclusivo que te servirá como guía paso a paso para aplicar todo lo aprendido y trazar tu ruta hacia un mejor puesto laboral. Solo quienes asistan en vivo podrán acceder a este material. ¡Mañana comenzamos fuerte. No te lo pierdas!")
                ),

                // Firma
                React.createElement(
                    Section,
                    { style: { textAlign: 'center', marginTop: '30px' } },
                    React.createElement(Hr, { style: { borderColor: '#ddd', margin: '20px 0' } }),
                    React.createElement(Img, {
                        src: "https://kubsycsxqsuoevqckjkm.supabase.co/storage/v1/object/public/PCP//Firma.png",
                        alt: "Firma de Zena",
                        style: {
                            maxWidth: '100%',
                            width: '400px',
                            height: 'auto',
                            margin: '20px auto',
                            display: 'block'
                        }
                    }),
                    React.createElement(
                        Section,
                        { style: { textAlign: 'center', marginTop: '20px' } },
                        React.createElement(
                            Link,
                            { href: "https://www.facebook.com/CentroDeCompetenciasZena", style: { margin: '0 5px', textDecoration: 'none' } },
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
                            { href: "https://t.me/+TOkq1Pvv8YUzZmEx", style: { margin: '0 5px', textDecoration: 'none' } },
                            React.createElement(Img, {
                                src: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
                                alt: "Telegram",
                                width: "24",
                                height: "24",
                                style: { display: 'inline-block' }
                            })
                        ),
                        React.createElement(
                            Link,
                            { href: "https://wa.link/k0g5kn", style: { margin: '0 5px', textDecoration: 'none' } },
                            React.createElement(Img, {
                                src: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
                                alt: "Whatsapp",
                                width: "24",
                                height: "24",
                                style: { display: 'inline-block' }
                            })
                        )
                    ),
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

module.exports = ReminderDayMinus1;
