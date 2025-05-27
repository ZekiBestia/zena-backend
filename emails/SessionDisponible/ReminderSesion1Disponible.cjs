const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ReminderSesion1Disponible = ({ name }) => {
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
          React.createElement(Heading, { style: { fontSize: '24px', color: '#dc3545' } }, "¡Ya puedes ver la grabación de la sesión 1 y acceder a Pyxoom!"),
          React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, `Hola ${name},`)
        ),

        // Cuerpo principal
        React.createElement(
          Section,
          null,
          React.createElement(Text, null, "Hoy iniciamos oficialmente el Seminario *Plan de Carrera Profesional*, una colaboración entre **Open English** e **ICEMéxico**."),
          React.createElement(Text, { style: { marginTop: "10px" } }, "Durante la *Sesión 1*, exploramos cómo estructurar un plan de carrera a partir del diagnóstico preciso de tus competencias. Analizamos el caso práctico de Juan, quien logró duplicar su salario al aplicar una estrategia profesional bien diseñada."),
          React.createElement(Text, { style: { marginTop: "10px" } }, "Además, liberamos el acceso a **Pyxoom**, nuestro simulador de diagnóstico profesional con inteligencia artificial. Con él podrás conocer tu nivel actual, identificar tus áreas de mejora y planear tu ruta de crecimiento."),
          React.createElement(Text, null, "Para acceder a la prueba Pyxoom, solo da clic en el siguiente enlace:"),
          React.createElement(Link, {
            href: "https://icemexico.pyxoomsaas.com/Interactive/Home/AddPersonalInformation/60e1dc27-e61d-470b-941a-1932277359f0",
            style: { color: "#0956B5", fontWeight: "bold", display: "block", marginTop: "10px" }
          }, "📈 Accede a Pyxoom (mandos medios)"),

          React.createElement(Link, {
            href: "https://icemexico.pyxoomsaas.com/Interactive/Home/AddPersonalInformation/dd6ca210-4092-4051-bc87-c22f19145815",
            style: { color: "#0956B5", display: "block", marginBottom: "15px" }
          }, "📊 Accede a Pyxoom (mandos directivos)"),

          React.createElement(Text, { style: { fontWeight: "bold", marginTop: "20px" } }, "Si no pudiste asistir en vivo o quieres volver a ver el contenido, aquí puedes acceder a la grabación completa:")
        ),

        // Botón de video
        React.createElement(
          Section,
          { style: { textAlign: "center", marginTop: "10px" } },
          React.createElement(
            Button,
            {
              href: "https://sesiones.zenacentrodecompetencia.com/",
              style: {
                backgroundColor: "#0956B5",
                color: "#ffffff",
                padding: "10px 30px",
                borderRadius: "5px",
                textDecoration: "none",
                fontSize: "16px"
              }
            },
            "🎥 Ver grabación de la Sesión 1"
          )
        ),

        // Cierre
        React.createElement(
          Section,
          { style: { marginTop: "30px" } },
          React.createElement(Text, null, "📅 Próxima sesión: Mañana, 7:00 p.m. (hora centro)"),
          React.createElement(Text, { style: { marginTop: "10px" } }, "En la *Sesión 2*, aprenderás a diseñar e implementar un proyecto de mejora que fortalezca tu perfil y te abra puertas a nuevas oportunidades laborales.")
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

module.exports = ReminderSesion1Disponible;
