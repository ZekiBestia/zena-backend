const React = require("react");
const { render } = require("@react-email/render");
const ConfirmationEmail = require("./emails/ConfirmationEmail.cjs"); // Importa la plantilla de correo

// Función para generar y mostrar la plantilla
const generateEmailPreview = async () => {
    try {
        // Generar el HTML de la plantilla
        const emailHtml = await render(ConfirmationEmail({ name: "Ezequiel" })); // Usa un nombre de prueba

        // Mostrar el HTML en la consola
        console.log("HTML generado:", emailHtml);

        // Opcional: Guardar el HTML en un archivo para visualizarlo en el navegador
        const fs = require("fs");
        fs.writeFileSync("preview.html", emailHtml);
        console.log("✅ Plantilla guardada en preview.html");

    } catch (error) {
        console.error("❌ Error al generar la plantilla:", error);
    }
};

// Ejecutar la función
generateEmailPreview();