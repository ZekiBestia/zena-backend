const React = require("react");
const {
  Html,
  Head,
  Body,
  Text,
  Section,
  Container,
  Heading,
  Button,
  Link,
  Hr,
  Img,
} = require("@react-email/components");

const ReminderSession3 = ({ name }) => {
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
          color: "#333",
        },
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
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          },
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
            height: "auto",
          })
        ),

        // Encabezado
        React.createElement(
          Section,
          { style: { textAlign: "center", marginBottom: "20px" } },
          React.createElement(
            Heading,
            { style: { fontSize: "22px", color: "#3B82F6" } },
            "Nos vemos hoy en la Sesión 3 del Seminario"
          ),
          React.createElement(
            Text,
            { style: { fontSize: "16px", lineHeight: "1.5" } },
            `Hola ${name}, hoy continuamos con la tercera sesión del Seminario *Plan de Carrera Profesional*, organizada por ZENA junto a ICEMéxico y Open English.`
          )
        ),

        // Cuerpo
        React.createElement(
          Section,
          null,
          React.createElement(
            Text,
            {
              style: {
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "12px",
              },
            },
            "En esta sesión aprenderás técnicas efectivas de negociación laboral, que podrás aplicar tanto en entrevistas como en la solicitud de un aumento salarial."
          ),
          React.createElement(
            Text,
            null,
            "Te daremos herramientas prácticas para comunicar mejor tu valor profesional y negociar condiciones más favorables."
          ),
          React.createElement(Text, { style: { marginTop: "16px" } }, "🗓 Fecha: Hoy, miércoles"),
          React.createElement(Text, null, "🕖 Hora: 7:00 p.m. (hora centro de México)"),
          React.createElement(Text, null, "💻 Modalidad: En línea vía Zoom")
        ),

        // Botón Zoom
        React.createElement(
          Section,
          { style: { marginTop: "20px", textAlign: "center" } },
          React.createElement(Text, { style: { fontWeight: "bold", marginBottom: "10px" } }, "Accede a la sala Zoom desde aquí:"),
          React.createElement(
            Button,
            {
              href: "https://us06web.zoom.us/meeting/register/LmqIdW67TLWN-WyMfZKm9w#/registration",
              style: {
                backgroundColor: "#10B981",
                color: "#ffffff",
                padding: "10px 30px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "16px",
              },
            },
            "👉 Ingresar a la sesión"
          )
        ),

        // Firma y redes
        React.createElement(
          Section,
          { style: { textAlign: "center", marginBottom: "20px", marginTop: "30px" } },
          React.createElement(Hr, { style: { borderColor: "#ddd", margin: "20px 0" } }),
          React.createElement(Img, {
            src: "https://kubsycsxqsuoevqckjkm.supabase.co/storage/v1/object/public/PCP//Firma.png",
            alt: "Firma de ZENA",
            style: {
              maxWidth: "100%",
              width: "400px",
              height: "auto",
              margin: "20px auto",
              display: "block",
            },
          }),

          React.createElement(
            Section,
            { style: { textAlign: "center", marginTop: "20px" } },
            React.createElement(
              Link,
              { href: "https://www.facebook.com/CentroDeCompetenciasZena", style: { margin: "0 5px" } },
              React.createElement(Img, {
                src: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
                alt: "Facebook",
                width: "24",
              })
            ),
            React.createElement(
              Link,
              { href: "https://t.me/+TOkq1Pvv8YUzZmEx", style: { margin: "0 5px" } },
              React.createElement(Img, {
                src: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
                alt: "Telegram",
                width: "24",
              })
            ),
            React.createElement(
              Link,
              { href: "https://wa.link/k0g5kn", style: { margin: "0 5px" } },
              React.createElement(Img, {
                src: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
                alt: "WhatsApp",
                width: "24",
              })
            )
          ),

          React.createElement(
            Text,
            { style: { fontSize: "12px", color: "#777", marginTop: "20px", lineHeight: "1.5" } },
            "AVISO DE CONFIDENCIALIDAD:",
            React.createElement("br"),
            "Este correo fue enviado a raíz de tu registro al Seminario Plan de Carrera Profesional. Si no deseas más recordatorios, puedes ignorar este mensaje. Para cualquier duda, responde directamente a este correo."
          )
        )
      )
    )
  );
};

module.exports = ReminderSession3;
