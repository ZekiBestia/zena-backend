const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ReminderOfertaPlanCarreraHighTicket = ({ name }) => {
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
          React.createElement(Heading, { style: { fontSize: '24px', color: '#dc3545' } }, "¡Ya puedes acceder al Plan de Carrera Profesional+ por $9,997 pesos!"),
          React.createElement(Text, { style: { fontSize: '16px', lineHeight: '1.5' } }, `Hola ${name},`)
        ),

        // Cuerpo del correo
        React.createElement(
          Section,
          null,
          React.createElement(Text, null, "Ya hemos liberado la oferta del Plan de Carrera Profesional+ (Semestre de capacitación + Excel + Open English)."),
          React.createElement(Text, { style: { marginTop: '10px' } }, "Si estás buscando fortalecer tu perfil para acceder a mejores oportunidades laborales, esta es una opción integral diseñada para ti."),
          React.createElement(Text, { style: { marginTop: '20px', fontWeight: 'bold' } }, "El programa incluye:"),
          React.createElement(Text, null, "🔹 Capacitación en 14 habilidades profesionales clave, divididas en 5 módulos y 6 talleres."),
          React.createElement(Text, null, "🔹 Emisión de constancias de capacitación por cada módulo."),
          React.createElement(Text, null, "🔹 Capacitación en diseño e impartición de cursos (formación de capital humano)."),
          React.createElement(Text, null, "🔹 Coaching sabatino para reforzar habilidades profesionales."),
          React.createElement(Text, null, "🔹 200 horas de capacitación en Excel (básico a avanzado)."),
          React.createElement(Text, null, "🔹 Simulador de práctica para evaluación."),
          React.createElement(Text, null, "🔹 Certificación oficial de Microsoft en Excel (MOS)."),
          React.createElement(Text, null, "🔹 Suscripción anual a Open English (Business) con acceso ilimitado 24/7."),
          React.createElement(Text, { style: { marginTop: '10px', color: '#dc3545', fontWeight: 'bold' } }, "💥 Precio especial: $9,997 pesos"),
          React.createElement(Text, { style: { marginTop: '10px' } }, "Aprovecha esta oportunidad para construir un plan de desarrollo profesional alineado al mercado actual.")
        ),

        // Botón de inscripción
        React.createElement(
          Section,
          { style: { textAlign: 'center', marginTop: '20px' } },
          React.createElement(Button, {
            href: "https://pay.hotmart.com/R98815072C?checkoutMode=10&sck=ACC0543-OC063-22&src=LGR",
            style: {
              padding: '10px 30px',
              backgroundColor: '#28a745',
              color: '#ffffff',
              borderRadius: '5px',
              fontSize: '16px',
              textDecoration: 'none'
            }
          }, "✅ Accede al Plan Profesional+")
        ),

        // Soporte personalizado
        React.createElement(
          Section,
          { style: { marginTop: '20px' } },
          React.createElement(Text, null, "📲 Para cualquier duda o apoyo adicional, estamos a tu disposición."),
          React.createElement(Text, { style: { fontStyle: 'italic' } }, "Puedes responder a este correo o escribirnos directamente por WhatsApp.")
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

module.exports = ReminderOfertaPlanCarreraHighTicket;
