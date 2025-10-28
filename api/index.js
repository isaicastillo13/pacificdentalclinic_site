const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Manejar preflight OPTIONS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Use POST.' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nombre, email y mensaje son requeridos' });
    }

    console.log('📨 Enviando email para:', name, email);

    const { data, error } = await resend.emails.send({
      from: 'Pacific Dental Clinic <onboarding@resend.dev>',
      to: [process.env.EMAIL_USER],
      reply_to: email,
      subject: `Nuevo mensaje de ${name} - Pacific Dental Clinic`,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
        <hr>
        <small>Enviado desde Pacific Dental Clinic</small>
      `,
    });

    if (error) {
      console.error('❌ Error de Resend:', error);
      return res.status(500).json({ error: 'Error al enviar email: ' + error.message });
    }

    console.log('✅ Email enviado:', data?.id);
    
    res.status(200).json({ 
      success: true, 
      message: 'Mensaje enviado correctamente',
      id: data?.id 
    });

  } catch (error) {
    console.error('❌ Error general:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};