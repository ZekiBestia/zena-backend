const React = require("react");
const { Html, Head, Body, Text, Section, Container, Heading, Button, Link, Hr, Img } = require("@react-email/components");

const ReminderOfertaPlanesMedios = ({ name }) => {
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
          React.createElement(Heading, { style: { fontSize: '24px', color: '#dc3545' } }, "Elige tu ruta: Plan Profesional+ o Profesional++"),
          React.createElement(Text, null, `Hola ${name},`)
        ),

        // Introducción
        React.createElement(
          Section,
          null,
          React.createElement(Text, null, "Ya puedes elegir entre dos rutas de formación diseñadas para desarrollar competencias reales y reforzar tu perfil profesional con estructura, acompañamiento y resultados medibles.")
        ),

        // Plan Profesional +
        React.createElement(
          Section,
          { style: { marginTop: "25px" } },
          React.createElement(Heading, { style: { fontSize: '20px', color: '#28a745' } }, "✅ Plan de Carrera Profesional+"),
          React.createElement(Text, { style: { fontWeight: 'bold' } }, "Precio especial: $2,997 pesos"),
          React.createElement(Text, null, "Incluye:"),
          React.createElement(Text, null, "🔹 Capacitación en 14 habilidades profesionales clave, divididas en 5 módulos y 6 talleres."),
          React.createElement(Text, null, "🔹 Constancia de capacitación por cada módulo."),
          React.createElement(Text, null, "🔹 Capacitación en Diseño e impartición de cursos de formación del capital humano."),
          React.createElement(Text, null, "🔹 Coaching sabatino para reforzar habilidades."),
          React.createElement(Text, null, "🔹 200 horas de capacitación en Excel (de nivel básico a avanzado)."),
          React.createElement(Text, null, "🔹 Programa de habilidades digitales con enfoque en Excel (sin certificación)."),
          React.createElement(Text, { style: { marginTop: "10px", fontStyle: "italic" } }, "Ideal para quienes desean fortalecer su perfil profesional y contar con evidencia de sus competencias a través de constancias emitidas por ICEMéxico."),
          React.createElement(
            Button,
            {
              href: "https://pay.hotmart.com/B98815377D?checkoutMode=10&sck=ACC0543-OC063-22&src=LGR",
              style: {
                marginTop: "10px",
                padding: '10px 30px',
                backgroundColor: '#28a745',
                color: '#ffffff',
                borderRadius: '5px',
                fontSize: '16px',
                textDecoration: 'none'
              }
            },
            "👉 Adquirir Plan Profesional+"
          )
        ),

        // Plan Profesional ++
        React.createElement(
          Section,
          { style: { marginTop: "35px" } },
          React.createElement(Heading, { style: { fontSize: '20px', color: '#007bff' } }, "✅ Plan de Carrera Profesional++"),
          React.createElement(Text, { style: { fontWeight: 'bold' } }, "Precio especial: $5,997 pesos"),
          React.createElement(Text, null, "Incluye todo lo anterior, más:"),
          React.createElement(Text, null, "🔹 Certificación oficial de Microsoft en Excel MOS (básico o avanzado)."),
          React.createElement(Text, { style: { marginTop: "10px", fontStyle: "italic" } }, "Esta opción es ideal si, además de adquirir habilidades, deseas validarlas internacionalmente a través de una certificación de alto reconocimiento como Microsoft Office Specialist."),
          React.createElement(
            Button,
            {
              href: "https://pay.hotmart.com/C98815299Y?checkoutMode=10&sck=ACC0543-OC063-22&src=LGR",
              style: {
                marginTop: "10px",
                padding: '10px 30px',
                backgroundColor: '#007bff',
                color: '#ffffff',
                borderRadius: '5px',
                fontSize: '16px',
                textDecoration: 'none'
              }
            },
            "👉 Adquirir Plan Profesional++"
          )
        ),

        // Cierre
        React.createElement(
          Section,
          { style: { marginTop: '30px' } },
          React.createElement(Text, { style: { fontWeight: 'bold' } }, "Ambas rutas ya están disponibles."),
          React.createElement(Text, null, "Tú eliges hasta dónde quieres llevar tu desarrollo profesional."),
          React.createElement(Text, { style: { marginTop: "10px" } }, "¿Prefieres hacer tu compra directamente por WhatsApp?"),
          React.createElement(
            Button,
            {
              href: "https://wa.link/k0g5kn",
              style: {
                marginTop: "10px",
                padding: '10px 30px',
                backgroundColor: '#25D366',
                color: '#ffffff',
                borderRadius: '5px',
                fontSize: '16px',
                textDecoration: 'none'
              }
            },
            "👉 Enviar mensaje por WhatsApp"
          )
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

module.exports = ReminderOfertaPlanesMedios;
