const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ReminderSesion5 = ({ name }) => {
    return React.createElement(
        Html,
        null,
        React.createElement(Head, null),
        React.createElement(
            Body,
            {
                style: {
                    fontFamily: 'Arial, sans-serif',
                    backgroundColor: '#f9f9f9',
                    padding: '20px',
                    color: '#333'
                }
            },
            React.createElement(
                Container,
                {
                    style: {
                        maxWidth: '600px',
                        margin: '0 auto',
                        backgroundColor: '#ffffff',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                    }
                },

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
                    React.createElement(Heading, {
                        style: { fontSize: '24px', color: '#dc3545' }
                    }, "¡Hoy es nuestra sesión final del Seminario Plan de Carrera Profesional!"),
                    React.createElement(Text, {
                        style: { fontSize: '16px', lineHeight: '1.5' }
                    }, `Hola ${name},`)
                ),

                // Cuerpo del mensaje
                React.createElement(
                    Section,
                    null,
                    React.createElement(Text, null, "La sesión de esta noche está diseñada para ayudarte a fortalecer tu visibilidad profesional y construir un perfil que realmente destaque en entornos laborales competitivos."),
                    React.createElement(Text, null, "Abordaremos temas clave como:"),
                    React.createElement(Text, null, "✔️ Cómo posicionarte estratégicamente en el mercado laboral"),
                    React.createElement(Text, null, "✔️ Qué perfiles están siendo más buscados y por qué"),
                    React.createElement(Text, null, "✔️ Cómo potenciar tu presencia profesional en redes y plataformas especializadas"),
                    React.createElement(Text, null, "✔️ Las habilidades que hoy exigen las empresas para acceder a mejores oportunidades (y cómo desarrollarlas)"),
                    React.createElement(Text, { style: { marginTop: '15px' } }, "📅 Nos vemos hoy, viernes 4 de abril, a las 7:00 p.m. (hora centro de México)")
                ),

                // Enlaces de Zoom
                React.createElement(
                    Section,
                    { style: { marginTop: '20px' } },
                    React.createElement(Heading, { style: { fontSize: '18px', marginBottom: '10px' } }, "🔗 Conéctate ahora:"),
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
                        "✅ Da clic para ingresar a la sala principal"
                    ),
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
                                textAlign: 'center',
                                marginTop: '10px'
                            }
                        },
                        "🔁 Sala alterna (en caso de saturación)"
                    )
                ),

                // Cierre
                React.createElement(
                    Section,
                    { style: { textAlign: 'center', marginTop: '30px' } },
                    React.createElement(Text, { style: { fontSize: '16px', marginBottom: '10px' } },
                        "Esta sesión cierra el ciclo del seminario y te dará una visión clara de los siguientes pasos en tu desarrollo profesional."),
                    React.createElement(Text, { style: { fontSize: '16px', fontWeight: 'bold' } },
                        "¡Te esperamos!")
                ),

                // Firma
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

                // Redes sociales
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

                // Aviso de privacidad
                React.createElement(
                    Text,
                    {
                        style: {
                            fontSize: '12px',
                            color: '#777',
                            marginTop: '20px',
                            lineHeight: '1.5'
                        }
                    },
                    "AVISO DE CONFIDENCIALIDAD:",
                    React.createElement('br'),
                    "Este correo electrónico, incluyendo en su caso, los archivos adjuntos al mismo, pueden contener información de carácter confidencial y/o privilegiada, y se envían a la atención única y exclusivamente de la persona y/o entidad a quien va dirigido. La copia, revisión, uso, revelación y/o distribución de dicha información confidencial sin la autorización por escrito está prohibida. Si usted no es el destinatario a quien se dirige el presente correo, favor de contactar al remitente respondiendo al presente correo y eliminar incluyendo sus archivos, así como cualquier copia del mismo."
                )
            )
        )
    );
};

module.exports = ReminderSesion5;
