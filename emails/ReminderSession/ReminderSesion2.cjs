const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ReminderSesion2 = ({ name }) => {
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
                    React.createElement(Heading, { style: { fontSize: '24px', color: '#dc3545' } }, "¡Hoy es la sesión 2 del Seminario Plan de Carrera Profesional!"),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, `Hola ${name},`)
                ),

                // Cuerpo principal
                React.createElement(
                    Section,
                    null,
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } },
                        "Hoy continuamos con la ",
                        React.createElement("b", null, "Sesión 2 del Seminario Plan de Carrera Profesional"),
                        ", una iniciativa desarrollada en alianza con Open English e ICEMéxico."
                    ),
                    React.createElement(Text, { style: { marginTop: '10px' } }, "¿Qué abordaremos hoy?"),
                    React.createElement(Text, null, "Te mostraremos cómo identificar, diseñar y ejecutar un proyecto de mejora dentro de tu entorno laboral, una estrategia efectiva para fortalecer tu perfil profesional y posicionarte para nuevos retos, ascensos o cambios de empleo."),
                    React.createElement(Text, null, "Además, a partir de hoy tendrás acceso al examen de ubicación de inglés, una herramienta diagnóstica que te permitirá conocer tu nivel actual y establecer un plan de mejora en una de las competencias más valoradas por el mercado global.")
                ),

                // Enlaces de acceso
                React.createElement(
                    Section,
                    { style: { marginTop: '20px' } },
                    React.createElement(
                        Button,
                        {
                            href: "https://us06web.zoom.us/meeting/register/JOXo1ZF6TSCUqM6Xdkj5mQ", // Actualiza con tu sala real
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
                        "👉 Da clic para ingresar a la sala principal"
                    ),
                    React.createElement(
                        Button,
                        {
                            href: "https://us06web.zoom.us/meeting/register/josihPlRQP6WFbEqHvQ6vQ", // Actualiza con tu sala alterna
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
                        "👉 Da clic para ingresar a la sala alterna"
                    )
                ),

                // Firma, redes y política
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

                    // Aviso legal
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

module.exports = ReminderSesion2;
