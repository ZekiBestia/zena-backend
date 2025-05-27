const React = require("react");
const {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Button,
  Link,
  Img,
  Hr,
} = require("@react-email/components");

const LiveNow = ({ name }) => {
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
            { style: { fontSize: "22px", color: "#E11D48" } },
            "🔴 ¡Ya estamos en vivo! Conéctate ahora a la Sesión 1"
          ),
          React.createElement(Text, { style: { fontSize: "16px", lineHeight: "1.5" } }, `Hola ${name},`)
        ),

        // Cuerpo del mensaje
        React.createElement(
          Section,
          null,
          React.createElement(Text, { style: { fontSize: "16px", lineHeight: "1.5" } }, "Ya estamos en vivo con la Sesión 1 del Seminario *Plan de Carrera Profesional*, organizado por **Open English** e **ICEMéxico**."),
          React.createElement(Text, null, "En esta sesión conocerás el caso práctico de un profesionista que logró duplicar su salario gracias a un plan de carrera bien estructurado y enfocado en sus fortalezas y áreas de desarrollo."),
          React.createElement(Text, null, "Aún estás a tiempo de ingresar y aprovechar al máximo esta oportunidad de crecimiento profesional.")
        ),

        // Botón Zoom
        React.createElement(
          Section,
          { style: { textAlign: "center", marginTop: "20px" } },
          React.createElement(Text, { style: { fontWeight: "bold", marginBottom: "10px" } }, "Conéctate ahora usando el siguiente enlace:"),
          React.createElement(
            Button,
            {
              href: "https://us06web.zoom.us/meeting/register/LmqIdW67TLWN-WyMfZKm9w#/registration",
              style: {
                display: "inline-block",
                padding: "10px 30px",
                backgroundColor: "#10B981",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "6px",
                fontSize: "16px",
              },
            },
            "👉 Ingresar a la sala Zoom"
          )
        ),

        // Firma y redes
        React.createElement(
          Section,
          { style: { textAlign: "center", marginBottom: "20px", marginTop: "30px" } },
          React.createElement(Hr, { style: { borderColor: "#ddd", margin: "30px 0" } }),
          React.createElement(Img, {
            src: "https://kubsycsxqsuoevqckjkm.supabase.co/storage/v1/object/public/PCP//Firma.png",
            alt: "Firma ZENA",
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
                height: "24",
              })
            ),
            React.createElement(
              Link,
              { href: "https://t.me/+TOkq1Pvv8YUzZmEx", style: { margin: "0 5px" } },
              React.createElement(Img, {
                src: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
                alt: "Telegram",
                width: "24",
                height: "24",
              })
            ),
            React.createElement(
              Link,
              { href: "https://wa.link/k0g5kn", style: { margin: "0 5px" } },
              React.createElement(Img, {
                src: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
                alt: "Whatsapp",
                width: "24",
                height: "24",
              })
            )
          ),

          React.createElement(
            Text,
            { style: { fontSize: "12px", color: "#777", marginTop: "20px", lineHeight: "1.5" } },
            "AVISO DE CONFIDENCIALIDAD:",
            React.createElement("br"),
            "Este correo electrónico puede contener información confidencial y está dirigido únicamente a su destinatario. Si no eres tú, notifícalo al remitente y elimina el mensaje."
          )
        )
      )
    )
  );
};

module.exports = LiveNow;
