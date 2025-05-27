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

const Reminder20Minutes = ({ name }) => {
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
            { style: { fontSize: "22px", color: "#F59E0B" } },
            "⏰ ¡Faltan solo 20 minutos para comenzar!"
          ),
          React.createElement(Text, { style: { fontSize: "16px" } }, `Hola ${name},`)
        ),

        // Cuerpo del mensaje
        React.createElement(
          Section,
          null,
          React.createElement(Text, null, "Estás a punto de iniciar tu transformación profesional con el seminario *Plan de Carrera Profesional*."),
          React.createElement(Text, null, "Hoy puedes dar un paso firme hacia tu crecimiento profesional y tu movilidad social."),
          React.createElement(Text, null, "⏳ ¡Asegúrate de estar listo!"),
          React.createElement(Text, { style: { marginTop: "12px" } }, "📅 Hoy, lunes 26 de mayo"),
          React.createElement(Text, null, "🕖 7:00 p.m.")
        ),

        // Botón Zoom
        React.createElement(
          Section,
          { style: { textAlign: "center", marginTop: "20px" } },
          React.createElement(
            Button,
            {
              href: "https://us06web.zoom.us/meeting/register/LmqIdW67TLWN-WyMfZKm9w#/registration",
              style: {
                display: "inline-block",
                padding: "10px 30px",
                backgroundColor: "#2563eb",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "6px",
                fontSize: "16px",
              },
            },
            "👉 Da clic aquí para ingresar"
          )
        ),

        // Checklist
        React.createElement(
          Section,
          { style: { marginTop: "30px" } },
          React.createElement(Text, null, "✅ Revisa tu correo"),
          React.createElement(Text, null, "✅ Verifica tu enlace de acceso"),
          React.createElement(Text, null, "✅ Conéctate con actitud positiva")
        ),

        React.createElement(Text, { style: { fontWeight: "bold", marginTop: "20px" } }, "¡Nos vemos dentro! 🚀"),

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
                alt: "WhatsApp",
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

module.exports = Reminder20Minutes;
