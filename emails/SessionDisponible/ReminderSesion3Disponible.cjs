const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ReminderSesion3Disponible = ({ name }) => {
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
          React.createElement(Heading, { style: { fontSize: '24px', color: '#dc3545' } }, "¡Ya está disponible la grabación de la Sesión 3!"),
          React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, `Hola ${name},`)
        ),

        // Contenido principal
        React.createElement(
          Section,
          null,
          React.createElement(Text, null, "Hoy abordamos un tema fundamental para tu crecimiento profesional:"),
          React.createElement(Text, { style: { marginTop: "10px" } }, "💼 Técnicas de negociación laboral, aplicables tanto en entrevistas como al momento de solicitar un ascenso o mejora salarial."),
          React.createElement(Heading, { style: { fontSize: "18px", marginTop: "20px" } }, "¿Qué aprenderás en esta sesión?"),
          React.createElement(Text, null, "✔ Cómo negociar condiciones laborales con argumentos sólidos"),
          React.createElement(Text, null, "✔ Estrategias para posicionarte mejor dentro de tu organización"),
          React.createElement(Text, null, "✔ Casos reales y simulaciones de entrevistas"),
          React.createElement(Text, null, "✔ Errores comunes al pedir un aumento o aplicar a un nuevo puesto"),
          React.createElement(Text, { style: { marginTop: "20px" } }, "Si no pudiste asistir en vivo o deseas repasar los temas, ya puedes acceder a la grabación de la sesión:")
        ),

        // Botón de grabación
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
            "🎥 Ver grabación de la Sesión 3"
          )
        ),

        // Promoción Plan de Carrera Profesional+
        React.createElement(
          Section,
          { style: { marginTop: "30px" } },
          React.createElement(Heading, { style: { fontSize: "20px", color: "#333" } }, "🎓 Plan de Carrera Profesional +"),
          React.createElement(Text, { style: { marginTop: "10px" } }, "Un programa integral diseñado para transformar tu perfil profesional y prepararte para acceder a puestos de mayor nivel y mejores ingresos."),
          React.createElement(Text, null, "Incluye:"),
          React.createElement(Text, null, "🔹 Capacitación en 14 habilidades profesionales clave divididas en 5 módulos y 6 talleres."),
          React.createElement(Text, null, "🔹 Emisión de constancias de capacitación por cada módulo."),
          React.createElement(Text, null, "🔹 Formación en diseño e impartición de cursos (capital humano)."),
          React.createElement(Text, null, "🔹 Coaching sabatino para reforzar habilidades profesionales."),
          React.createElement(Text, null, "🔹 200 horas de capacitación en Excel (básico a avanzado)."),
          React.createElement(Text, null, "🔹 Simulador de práctica + certificación oficial Microsoft Excel (MOS)."),
          React.createElement(Text, null, "🔹 Suscripción anual a Open English Business (acceso 24/7)."),
          React.createElement(Text, { style: { fontWeight: "bold", marginTop: "10px" } }, "💰 Precio especial por lanzamiento: $9,997 pesos"),
          React.createElement(Text, { style: { marginTop: "10px" } }, "¿Estás listo para unirte? Regístrate directamente aquí:"),
          React.createElement(
            Button,
            {
              href: "https://pay.hotmart.com/R98815072C?checkoutMode=10&sck=ACC0543-OC063-22&src=LGR",
              style: {
                backgroundColor: "#28a745",
                color: "#ffffff",
                padding: "10px 30px",
                borderRadius: "5px",
                textDecoration: "none",
                fontSize: "16px",
                marginTop: "10px"
              }
            },
            "✅ Registrarme ahora"
          ),
          React.createElement(Text, { style: { marginTop: "15px", fontStyle: "italic" } }, "Si tienes dudas o deseas validar si este programa es para ti, envíame un mensaje directo y con gusto te ayudo.")
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

module.exports = ReminderSesion3Disponible;
