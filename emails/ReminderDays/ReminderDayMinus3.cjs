const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ReminderDayMinus3 = ({ name }) => {
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
                    React.createElement(Heading, { style: { fontSize: '24px', color: '#dc3545' } }, "¡Faltan solo 3 días para el Seminario 'Plan de Carrera Profesional'!"),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, `Hola ${name},`)
                ),

                // Contenido principal
                React.createElement(
                    Section,
                    null,
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "Estamos a solo 3 días de iniciar el Seminario 'Plan de Carrera Profesional', una oportunidad única para potenciar tu crecimiento profesional con el respaldo de Microsoft y Open English."),
                    React.createElement(Text, { style: { marginTop: '10px', fontSize: '16px', lineHeight: '1.5' } }, "📌 Lo que aprenderás en este seminario:"),
                    React.createElement(Text, null, "✅ Cómo estructurar un Plan de Carrera Profesional para acceder a mejores sueldos y posiciones de liderazgo."),
                    React.createElement(Text, null, "✅ Cómo las certificaciones internacionales y herramientas digitales pueden abrirte puertas en empresas globales."),
                    React.createElement(Text, null, "✅ Por qué las empresas valoran cada vez más el dominio del inglés profesional y cómo mejorar tus oportunidades laborales."),
                    React.createElement(Text, null, "✅ Cómo usar la tecnología y la inteligencia artificial para evaluar y mejorar tus competencias."),
                    React.createElement(Text, { style: { marginTop: '10px' } }, "🔹 Este seminario, en colaboración con Microsoft y Open English, te brindará las herramientas que necesitas para avanzar en tu carrera.")
                ),

                // Detalles del evento
                React.createElement(
                    Section,
                    { style: { marginTop: '20px' } },
                    React.createElement(Heading, { style: { fontSize: '20px', color: '#333' } }, "📅 Detalles del Evento"),
                    React.createElement(Text, null, "📍 Fecha: 26 de Mayo del 2025"),
                    React.createElement(Text, null, "🕒 Hora: 7:00 pm (Hora CDMX)"),
                    React.createElement(Text, null, "💻 Plataforma: ZOOM"),
                    React.createElement(
                        Button,
                        {
                            href: "https://us06web.zoom.us/meeting/register/LmqIdW67TLWN-WyMfZKm9w#/registration",
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
                    { style: { marginTop: '20px' } },
                    React.createElement(Heading, { style: { fontSize: '20px', color: '#333' } }, "🔹 Prepárate para sacar el máximo provecho:"),
                    React.createElement(Text, null, "✔ Revisa tu correo para confirmar que tienes toda la información."),
                    React.createElement(Text, null, "✔ Prepara tus preguntas y objetivos para una experiencia más efectiva."),
                    React.createElement(Text, null, "✔ Verifica tu conexión a internet y acceso a ZOOM con anticipación.")
                ),

                // Asistencia
                React.createElement(
                    Section,
                    { style: { marginTop: '20px' } },
                    React.createElement(Text, null, "📲 ¿Tienes dudas? Escríbenos por WhatsApp o correo electrónico."),
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
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, "Nos vemos en 3 días en ZOOM. ¡No dejes pasar la oportunidad de llevar tu carrera al siguiente nivel!"),
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

module.exports = ReminderDayMinus3;
