const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ReminderSesion5Disponible = ({ name }) => {
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
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }
        },

        // Banner
        React.createElement(
          Section,
          { style: { textAlign: "center", marginBottom: "20px" } },
          React.createElement(Img, {
            src: "https://kubsycsxqsuoevqckjkm.supabase.co/storage/v1/object/public/PCP//BannerZena.png",
            alt: "Banner del Seminario",
            style: { maxWidth: "100%", borderRadius: "10px" },
            width: "600",
            height: "auto"
          })
        ),

        // Encabezado
        React.createElement(
          Section,
          { style: { textAlign: "center", marginBottom: "20px" } },
          React.createElement(Heading, { style: { fontSize: "24px", color: "#dc3545" } }, "Última sesión disponible + Oferta final del Plan de Carrera Profesional"),
          React.createElement(Text, null, `Estimado/a ${name},`)
        ),

        // Cuerpo principal
        React.createElement(
          Section,
          null,
          React.createElement(Text, null, "Hoy concluimos oficialmente el Seminario de *Plan de Carrera Profesional* y queremos felicitarte por haber llegado hasta el final. Ha sido un gusto acompañarte en este proceso de transformación personal y profesional."),
          React.createElement(Text, { style: { marginTop: "15px" } }, "Te informamos que la **grabación de la Sesión 5 ya está disponible**, y con ello damos cierre al ciclo formativo gratuito que preparamos especialmente para ti.")
        ),

        // Botón para acceder a la grabación
        React.createElement(
          Section,
          { style: { textAlign: "center", marginTop: "20px" } },
          React.createElement(
            Button,
            {
              href: "https://registro.zenacentrodecompetencia.com/sesion-5/",
              style: {
                padding: "10px 30px",
                backgroundColor: "#0956B5",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "5px",
                fontSize: "16px"
              }
            },
            "🎥 Da clic para acceder a la sesión 5"
          )
        ),

        // Oferta final Plan Introductorio
        React.createElement(
          Section,
          { style: { marginTop: "30px" } },
          React.createElement(Heading, { style: { fontSize: "20px", color: "#28a745" } }, "🎯 Plan de Carrera Profesional – Versión Introductoria"),
          React.createElement(Text, null, "Una versión diseñada para quienes desean comenzar a estructurar su carrera profesional de forma estratégica, con acceso inmediato tras su inscripción."),
          React.createElement(Text, { style: { marginTop: "10px", fontWeight: "bold" } }, "💥 Precio especial por tiempo limitado: $997 pesos (antes $1,994)"),
          React.createElement(
            Button,
            {
              href: "https://pay.hotmart.com/H98815467A?checkoutMode=10&sck=ACC0543-OC063-22&src=LGR",
              style: {
                marginTop: "10px",
                padding: "10px 30px",
                backgroundColor: "#28a745",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "5px",
                fontSize: "16px"
              }
            },
            "👉 Inscribirme al Plan Introductorio"
          )
        ),

        // Constancia
        React.createElement(
          Section,
          { style: { marginTop: "30px" } },
          React.createElement(Text, null, "📄 Importante: Si completaste las cinco sesiones del seminario gratuito, puedes solicitar tu constancia de participación escribiendo a este mismo correo o vía WhatsApp con tu nombre completo.")
        ),

        // Agradecimiento
        React.createElement(
          Section,
          { style: { marginTop: "20px" } },
          React.createElement(Text, null, "Gracias por formar parte de esta comunidad. Estamos listos para seguir apoyándote en tu camino profesional.")
        ),

        // Firma y redes
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
              { href: "https://www.facebook.com/CentroDeCompetenciasZena", style: { margin: '0 5px' } },
              React.createElement(Img, {
                src: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
                alt: "Facebook",
                width: "24",
                height: "24"
              })
            ),
            React.createElement(
              Link,
              { href: "https://t.me/+TOkq1Pvv8YUzZmEx", style: { margin: '0 5px' } },
              React.createElement(Img, {
                src: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
                alt: "Telegram",
                width: "24",
                height: "24"
              })
            ),
            React.createElement(
              Link,
              { href: "https://wa.link/k0g5kn", style: { margin: '0 5px' } },
              React.createElement(Img, {
                src: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
                alt: "WhatsApp",
                width: "24",
                height: "24"
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

module.exports = ReminderSesion5Disponible;
