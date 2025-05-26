const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ReminderOfertaPlanCarrera = ({ name }) => {
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
                    React.createElement(Heading, { style: { fontSize: '24px', color: '#dc3545' } }, "Inscríbete hoy al Plan de Carrera Profesional por solo $997 pesos"),
                    React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, `Hola ${name},`)
                ),

                // Cuerpo del correo
                React.createElement(
                    Section,
                    null,
                    React.createElement(Text, null, "Durante este seminario te mostramos el camino para proyectarte profesionalmente con mayor claridad, estrategia y confianza. Hoy tienes la oportunidad de continuar ese avance con una decisión que puede transformar tu carrera."),
                    React.createElement(Text, { style: { marginTop: '10px' } }, "Imagina tu situación en los próximos tres meses:"),
                    React.createElement(Text, null, "✔️ Con un perfil profesional sólido, estrategias claras para postularte y un plan diseñado para posicionarte en el mercado laboral con resultados."),
                    React.createElement(Text, { style: { marginTop: '10px' } }, "Este no es un curso más. Es el único programa en América Latina diseñado para que logres:"),
                    React.createElement(Text, null, "✔️ Acceder a mejores puestos."),
                    React.createElement(Text, null, "✔️ Aumentar tus ingresos."),
                    React.createElement(Text, null, "✔️ Relocalizarte profesionalmente en sectores de mayor proyección."),
                    React.createElement(Text, { style: { marginTop: '20px', fontWeight: 'bold' } }, "¿Qué incluye tu inscripción por solo $997 pesos?"),
                    React.createElement(Text, null, "🔹 Diagnóstico personalizado con inteligencia artificial (Pyxoom)."),
                    React.createElement(Text, null, "🔹 Acceso inmediato a la plataforma icemexico.online."),
                    React.createElement(Text, null, "🔹 Capacitación práctica en 14 habilidades clave."),
                    React.createElement(Text, null, "🔹 Cinco módulos estructurados y seis talleres aplicables."),
                    React.createElement(Text, null, "🔹 Acompañamiento experto durante tu avance."),
                    React.createElement(Text, null, "🔹 Una metodología validada por instituciones reconocidas a nivel internacional."),
                    React.createElement(Text, { style: { marginTop: '10px', fontWeight: 'bold' } }, "Precio regular: $1,994 pesos"),
                    React.createElement(Text, { style: { color: '#dc3545', fontWeight: 'bold' } }, "Precio especial por tiempo limitado: $997 pesos")
                ),

                // Botón de inscripción
                React.createElement(
                    Section,
                    { style: { textAlign: 'center', marginTop: '20px' } },
                    React.createElement(Button, {
                        href: "https://pay.hotmart.com/H98815467A?checkoutMode=10&sck=ACC0543-OC063-22",
                        style: {
                            padding: '10px 30px',
                            backgroundColor: '#28a745',
                            color: '#ffffff',
                            borderRadius: '5px',
                            fontSize: '16px',
                            textDecoration: 'none'
                        }
                    }, "✅ Inscríbete ahora y accede al programa")
                ),

                // Constancia
                React.createElement(
                    Section,
                    { style: { marginTop: '20px' } },
                    React.createElement(Text, null, "📜 Para solicitar tu constancia de participación del seminario, puedes responder a este correo o escribirnos por WhatsApp con tu nombre completo."),
                    React.createElement(Text, { style: { marginTop: '10px', fontWeight: 'bold' } }, "Estamos listos para acompañarte en el siguiente paso de tu desarrollo profesional.")
                ),

                // Firma y redes
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

module.exports = ReminderOfertaPlanCarrera;
