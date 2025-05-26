const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ReminderSesion2Disponible = ({ name }) => {
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
          React.createElement(Heading, { style: { fontSize: '24px', color: '#dc3545' } }, "¡Disponible la Sesión 2 del Seminario Plan de Carrera Profesional!"),
          React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, `Hola ${name},`)
        ),

        // Cuerpo principal
        React.createElement(
          Section,
          null,
          React.createElement(Text, null, "Si no pudiste asistir en vivo o deseas repasar los temas, ya puedes acceder a la grabación de la sesión:"),
          React.createElement(
            Button,
            {
              href: "https://registro.zenacentrodecompetencia.com/sesion-2/",
              style: {
                backgroundColor: "#0956B5",
                color: "#ffffff",
                padding: "10px 30px",
                borderRadius: "5px",
                textDecoration: "none",
                fontSize: "16px",
                marginTop: "10px"
              }
            },
            "🎥 Ver grabación de la Sesión 2"
          ),
          React.createElement(Text, { style: { marginTop: "20px", lineHeight: "1.6" } },
            "En esta sesión aprendimos a identificar, diseñar y ejecutar un proyecto de mejora dentro de tu entorno laboral. Esta estrategia fortalece tu perfil profesional y te prepara para ascensos, nuevos retos o una transición laboral efectiva."
          ),

          React.createElement(Heading, { style: { fontSize: "18px", marginTop: "25px" } }, "📊 Herramientas diagnósticas activas"),
          React.createElement(Text, null, "Aún estás a tiempo de completar las dos evaluaciones clave del programa. Tienes hasta mañana para realizarlas:")
        ),

        // Evaluaciones
        React.createElement(
          Section,
          null,
          React.createElement(Text, { style: { marginTop: '10px' } }, "🔹 Prueba de nivel de inglés con Open English"),
          React.createElement(Text, null, "Evalúa tu dominio del inglés profesional, una competencia cada vez más valorada en el mercado laboral."),
          React.createElement(Link, {
            href: "https://www.openenglish.com/para-empresas/prueba-de-nivel/?purchaserId=0013r00002toiUP",
            style: { color: "#0956B5", fontWeight: "bold", display: "block", marginTop: "5px", marginBottom: "15px" }
          }, "👉 Realiza la prueba aquí"),

          React.createElement(Text, { style: { marginTop: '10px' } }, "🔹 Prueba de diagnóstico profesional (Pyxoom)"),
          React.createElement(Text, null, "Esta evaluación te permitirá identificar tus fortalezas y áreas de mejora según tu perfil profesional. Elige el enlace que corresponda a tu nivel:"),

          React.createElement(Link, {
            href: "https://icemexico.pyxoomsaas.com/Interactive/Home/AddPersonalInformation/60e1dc27-e61d-470b-941a-1932277359f0",
            style: { color: "#0956B5", display: "block", marginTop: "5px" }
          }, "📈 Mandos medios"),

          React.createElement(Link, {
            href: "https://icemexico.pyxoomsaas.com/Interactive/Home/AddPersonalInformation/dd6ca210-4092-4051-bc87-c22f19145815",
            style: { color: "#0956B5", display: "block", marginBottom: "15px" }
          }, "📊 Mandos directivos"),

          React.createElement(Text, { style: { fontStyle: "italic" } }, "⏳ Recuerda: ambas pruebas estarán disponibles hasta mañana.")
        ),

        // Cierre
        React.createElement(
          Section,
          { style: { marginTop: "20px" } },
          React.createElement(Text, null, "📅 Nos vemos mañana en la Sesión 3, miércoles 2 de abril a las 7:00 p.m. (hora del centro de México)."),
          React.createElement(Text, { style: { marginTop: "10px" } }, "¡Seguimos avanzando en tu plan de carrera profesional!")
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

module.exports = ReminderSesion2Disponible;

