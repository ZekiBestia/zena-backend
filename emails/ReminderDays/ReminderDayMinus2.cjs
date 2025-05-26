const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ReminderDayMinus2 = ({ name }) => {
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
                    React.createElement(Heading, { style: { fontSize: '24px', color: '#dc3545' } }, "⚠️Si no mejoras, alguien más tomará tu lugar… ¿Vas a dejar que eso pase?"),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, `Hola ${name},`)
                ),

                // Contenido principal
                React.createElement(
                    Section,
                    null,
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "A solo 2 días del Seminario 'Plan de Carrera Profesional', queremos hablarte de un obstáculo que frena a muchos profesionales: el miedo al cambio."),
                    React.createElement(Text, { style: { marginTop: '10px' } }, "Es normal preguntarse:"),
                    React.createElement(Text, null, "❌ ¿Y si no tengo lo necesario para crecer profesionalmente?"),
                    React.createElement(Text, null, "❌ ¿Y si el mercado es demasiado competitivo para mí?"),
                    React.createElement(Text, null, "❌ ¿Y si no soy lo suficientemente bueno en inglés o tecnología?"),
                    React.createElement(Text, { style: { marginTop: '10px' } }, "La verdad es que el miedo es lo único que te separa de mejores oportunidades laborales, un mejor salario y el reconocimiento que mereces."),
                    React.createElement(Text, { style: { marginTop: '10px' } }, "En este seminario, en colaboración con Microsoft y Open English, aprenderás a romper esas barreras con herramientas concretas:"),
                    React.createElement(Text, null, "✅ Evaluaciones con IA para identificar tus fortalezas y áreas de mejora."),
                    React.createElement(Text, null, "✅ Desarrollo de habilidades clave para acceder a puestos gerenciales y directivos."),
                    React.createElement(Text, null, "✅ Formación en inglés profesional para destacar en el mercado global."),
                    React.createElement(Text, null, "✅ Estrategias probadas para estructurar un plan de carrera sólido y efectivo."),
                    React.createElement(Text, { style: { marginTop: '10px' } }, "Las empresas no buscan solo experiencia, buscan profesionales que sepan adaptarse y evolucionar. Y este seminario te ayudará a hacerlo.")
                ),

                // Detalles del evento
                React.createElement(
                    Section,
                    { style: { marginTop: '20px' } },
                    React.createElement(Heading, { style: { fontSize: '20px', color: '#333' } }, "📅 Detalles del Evento"),
                    React.createElement(Text, null, "📍 Fecha: 21 de abril del 2025"),
                    React.createElement(Text, null, "🕒 Hora: 7:00 pm"),
                    React.createElement(Text, null, "💻 Plataforma: ZOOM"),
                    React.createElement(
                        Button,
                        {
                            href: "https://us06web.zoom.us/meeting/register/JOXo1ZF6TSCUqM6Xdkj5mQ",
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

                // Recordatorio y contacto
                React.createElement(
                    Section,
                    { style: { marginTop: '20px' } },
                    React.createElement(Text, null, "📢 No dejes que el miedo te detenga. El cambio profesional comienza con la decisión de prepararte mejor."),
                    React.createElement(Text, null, "Si tienes dudas o necesitas ayuda, escríbenos por WhatsApp o correo electrónico. Estamos aquí para ayudarte."),
                    React.createElement(
                        Link,
                        {
                            href: "https://wa.link/o5i8ti",
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

                // Firma ZENA
                React.createElement(
                    Section,
                    { style: { textAlign: 'center', marginBottom: '20px', marginTop: '30px' } },
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "Nos vemos en 2 días en ZOOM. Este es tu momento para crecer."),
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

module.exports = ReminderDayMinus2;
