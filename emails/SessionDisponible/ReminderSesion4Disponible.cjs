const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ReminderSesion4Disponible = ({ name }) => {
  return React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(
      Body,
      {
        style: {
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          color: "#333"
        }
      },
      React.createElement(
        Container,
        {
          style: {
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
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

        // Título
        React.createElement(
          Section,
          { style: { textAlign: "center", marginBottom: "20px" } },
          React.createElement(Heading, { style: { fontSize: "24px", color: "#dc3545" } }, "¡Ya está disponible la grabación de la sesión 4!"),
          React.createElement(Text, null, `Hola ${name},`)
        ),

        // Contenido principal
        React.createElement(
          Section,
          null,
          React.createElement(Text, null, "En esta sesión trabajamos un taller estratégico en vivo, donde guiamos a los participantes en el diseño de su propio plan de carrera utilizando herramientas de inteligencia artificial."),
          React.createElement(Text, { style: { marginTop: "10px" } }, "Más allá de la metodología, el ejercicio reveló algo importante:"),
          React.createElement(Text, { style: { fontStyle: "italic" } }, "La mayoría de los profesionistas no están estancados por falta de talento, sino por falta de estructura, acompañamiento y una estrategia clara de crecimiento.")
        ),

        // Botón para ver la grabación
        React.createElement(
          Section,
          { style: { textAlign: "center", marginTop: "20px" } },
          React.createElement(Text, { style: { fontWeight: "bold" } }, "📌 Si no pudiste asistir o deseas repasar el contenido, ya puedes acceder a la grabación completa:"),
          React.createElement(
            Button,
            {
              href: "https://registro.zenacentrodecompetencia.com/sesion-4/",
              style: {
                marginTop: "10px",
                padding: "10px 30px",
                backgroundColor: "#0956B5",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "5px",
                fontSize: "16px"
              }
            },
            "🎥 Ver grabación de la sesión 4"
          )
        ),

        // Presentación de planes
        React.createElement(
          Section,
          { style: { marginTop: "30px" } },
          React.createElement(Text, { style: { fontWeight: "bold" } }, "Al cierre de la sesión, presentamos dos rutas formativas diseñadas para responder directamente a los principales desafíos detectados:")
        ),

        // Plan Profesional +
        React.createElement(
          Section,
          { style: { marginTop: "20px" } },
          React.createElement(Heading, { style: { fontSize: "20px", color: "#28a745" } }, "✅ Plan de Carrera Profesional+"),
          React.createElement(Text, null, "Una ruta práctica y estructurada para fortalecer tu perfil profesional con respaldo académico."),
          React.createElement(Img, {
            src: "https://kubsycsxqsuoevqckjkm.supabase.co/storage/v1/object/public/PCP//PlanProfesional1.png",
            alt: "Plan Profesional+",
            style: { width: "100%", margin: "10px 0", borderRadius: "8px" }
          }),
          React.createElement(
            Button,
            {
              href: "https://pay.hotmart.com/B98815377D?checkoutMode=10&sck=ACC0543-OC063-22&src=LGR&bid=1748225297116",
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
            "👉 Acceder al Plan Profesional+"
          )
        ),

        // Plan Profesional ++
        React.createElement(
          Section,
          { style: { marginTop: "30px" } },
          React.createElement(Heading, { style: { fontSize: "20px", color: "#007bff" } }, "✅ Plan de Carrera Profesional++"),
          React.createElement(Text, null, "Incluye todo lo anterior, con un enfoque adicional en la validación internacional de competencias técnicas."),
          React.createElement(Img, {
            src: "https://kubsycsxqsuoevqckjkm.supabase.co/storage/v1/object/public/PCP//PlanProfesional2.png",
            alt: "Plan Profesional++",
            style: { width: "100%", margin: "10px 0", borderRadius: "8px" }
          }),
          React.createElement(
            Button,
            {
              href: "https://pay.hotmart.com/C98815299Y?checkoutMode=10&sck=ACC0543-OC063-22&src=LGR&bid=1748225378486",
              style: {
                marginTop: "10px",
                padding: "10px 30px",
                backgroundColor: "#007bff",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "5px",
                fontSize: "16px"
              }
            },
            "👉 Acceder al Plan Profesional++"
          )
        ),

        // Atención personalizada
        React.createElement(
          Section,
          { style: { marginTop: "30px", textAlign: "center" } },
          React.createElement(Text, null, "📲 ¿Requieres atención personalizada o prefieres realizar tu inscripción por WhatsApp?"),
          React.createElement(
            Button,
            {
              href: "https://wa.link/k0g5kn",
              style: {
                marginTop: "10px",
                padding: "10px 30px",
                backgroundColor: "#25D366",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "5px",
                fontSize: "16px"
              }
            },
            "👉 Escríbenos aquí"
          )
        ),

        // Firma y redes sociales
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

module.exports = ReminderSesion4Disponible;
