// emailserver.js
require("dotenv").config();
const nodemailer = require("nodemailer");

// Helper para parsear boolean de env
const toBool = (v) => String(v).toLowerCase() === "true";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,                       // smtppro.zoho.com
  port: Number(process.env.EMAIL_PORT || 587),        // 587 (TLS) o 465 (SSL)
  secure: process.env.EMAIL_SECURE === "true", // true con 465
  auth: {
    user: process.env.EMAIL_USER,                     // info@pacificdentalclinic.com
    pass: process.env.EMAIL_PASS,                     // App Password de Zoho
  },
  tls: { rejectUnauthorized: true },
});

// Opcional: verifica conexión al iniciar (te da un log útil)
transporter.verify((err, ok) => {
  if (err) {
    console.error("SMTP VERIFY ERROR >>>", err.message);
  } else {
    console.log("SMTP conectado y listo para enviar ✅");
  }
});

exports.sendEmail = async ({ name, email, message }) => {
console.log("----Preparing to send email----");
  return transporter.sendMail({
    from: process.env.EMAIL_FROM || `Pacific Dental Clinic <${process.env.EMAIL_USER}>`,
    replyTo: email,                                    // responder al visitante
    to: process.env.EMAIL_USER,                       // destino: tu buzón corporativo
    subject: "Nuevo mensaje desde el formulario de contacto",
    html: `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  });
};
