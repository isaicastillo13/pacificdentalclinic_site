const { send } = require("vite");
const { sendEmail } = require("../services/emailService");

exports.sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "Todos los datos son obligatorios" });
    }

    await sendEmail({ name, email, message });
    res
      .status(200)
      .json({ message: "Correo electrónico enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return res
      .status(500)
      .json({ message: "Error al enviar el correo electrónico" });
  }
};
