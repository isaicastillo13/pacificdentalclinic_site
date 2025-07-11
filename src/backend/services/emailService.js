const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // Cambia esto por tu servidor SMTP
  port: process.env.EMAIL_PORT, // Cambia esto por el puerto de tu servidor SMTP
  secure: process.env.EMAIL_SECURE, 
  service: 'gmail',// true para 465, false para otros puertos
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendEmail = async ({ name, email, message }) => {
  await transporter.sendMail({
    from: `"${name}" <${email}>`, // Remitente
    to: process.env.EMAIL_USER,
    subject: "Nuevo mensaje desde el formulario de contacto",
    html: `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `, // Asunto del correo
  });
};
