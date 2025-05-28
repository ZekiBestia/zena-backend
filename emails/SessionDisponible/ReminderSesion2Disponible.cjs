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

const ReminderSesion2Disponible = ({ name }) => {
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
            { style: { fontSize: "22px", color: "#2563eb" } },
            "Ya puedes ver la grabación de la Sesión 2"
          ),
          React.createElement(Text, { style: { fontSize: "16px", lineHeight: "1.5" } }, `Hola ${name},`)
        ),

        // Cuerpo
        React.createElement(
          Section,
          null,
          React.createElement(
            Text,
            { style: { fontSize: "16px", lineHeight: "1.6", marginBottom: "15px" } },
            "Queremos informarte que la grabación de la Sesión 2 del Seminario Plan de Carrera Profesional ya está disponible. Si no pudiste asistir en vivo o deseas repasar los conceptos clave, este es el momento perfecto para hacerlo."
          ),
          React.createElement(
            Text,
            { style: { fontSize: "16px", lineHeight: "1.6" } },
            "En esta sesión trabajamos cómo diseñar y ejecutar un proyecto de mejora dentro de tu entorno laboral. Este tipo de iniciativa puede ayudarte a posicionarte mejor para ascensos o nuevas oportunidades."
          ),

          React.createElement(
            Section,
            { style: { textAlign: "center", marginTop: "25px" } },
            React.createElement(
              Button,
              {
                href: "https://sesiones.zenacentrodecompetencia.com/",
                style: {
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  padding: "10px 30px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontSize: "16px",
                },
              },
              "Ver grabación de la Sesión 2"
            )
          ),

          React.createElement(
            Text,
            { style: { marginTop: "25px", fontWeight: "bold", fontSize: "17px" } },
            "¿Aún no has completado tus evaluaciones?"
          ),
          React.createElement(
            Text,
            { style: { marginTop: "8px" } },
            "Recuerda que tienes hasta mañana para completar estas herramientas diagnósticas:"
          ),

          React.createElement(Text, { style: { marginTop: "12px" } }, "🔹 Prueba de nivel de inglés (Open English)"),
          React.createElement(
            Link,
            {
              href: "https://www.openenglish.com/para-empresas/prueba-de-nivel/?purchaserId=0013r00002toiUP",
              style: { color: "#2563eb", display: "block", marginBottom: "15px" },
            },
            "Acceder a la prueba"
          ),

          React.createElement(Text, null, "🔹 Prueba de diagnóstico profesional (Pyxoom):"),
          React.createElement(
            Link,
            {
              href: "https://icemexico.pyxoomsaas.com/Interactive/Home/AddPersonalInformation/60e1dc27-e61d-470b-941a-1932277359f0",
              style: { color: "#2563eb", display: "block" },
            },
            "Mandos medios"
          ),
          React.createElement(
            Link,
            {
              href: "https://icemexico.pyxoomsaas.com/Interactive/Home/AddPersonalInformation/dd6ca210-4092-4051-bc87-c22f19145815",
              style: { color: "#2563eb", display: "block", marginBottom: "20px" },
            },
            "Mandos directivos"
          ),

          React.createElement(
            Text,
            { style: { fontStyle: "italic", fontSize: "14px", color: "#555" } },
            "⏳ Ambas pruebas estarán disponibles hasta mañana."
          ),

          React.createElement(
            Text,
            { style: { marginTop: "25px" } },
            "📅 Nos vemos en la Sesión 3 el miércoles 2 de abril a las 7:00 p.m. (hora centro de México)."
          ),
          React.createElement(
            Text,
            { style: { marginTop: "10px" } },
            "¡Gracias por seguir comprometido con tu desarrollo profesional!"
          )
        ),

        // Footer
        React.createElement(
          Section,
          { style: { textAlign: "center", marginTop: "30px" } },
          React.createElement(Hr, { style: { borderColor: "#ddd", margin: "20px 0" } }),
          React.createElement(Img, {
            src: "https://kubsycsxqsuoevqckjkm.supabase.co/storage/v1/object/public/PCP//Firma.png",
            alt: "Firma de Zena",
            style: {
              maxWidth: "100%",
              width: "400px",
              height: "auto",
              margin: "20px auto",
              display: "block",
            },
          }),

          React.createElement(
            Text,
            { style: { fontSize: "13px", color: "#555", marginTop: "20px" } },
            "Este correo forma parte de tu participación en el seminario organizado por ZENA. Si ya viste esta sesión o no deseas más recordatorios, puedes ignorar este mensaje."
          ),

          React.createElement(
            Text,
            { style: { fontSize: "12px", color: "#777", marginTop: "15px", lineHeight: "1.5" } },
            "AVISO DE CONFIDENCIALIDAD:",
            React.createElement("br"),
            "Este correo electrónico puede contener información confidencial. Si no eres el destinatario, notifícalo al remitente y elimina este mensaje."
          )
        )
      )
    )
  );
};

module.exports = ReminderSesion2Disponible;
