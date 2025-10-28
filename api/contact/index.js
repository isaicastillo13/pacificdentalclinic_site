// api/contact/index.js - VERSIÓN ESTABLE
const { Resend } = require('resend');

// Inicializar Resend de forma segura
let resend;
try {
  resend = new Resend(process.env.RESEND_API_KEY);
  console.log('✅ Resend initialized successfully');
} catch (error) {
  console.error('❌ Resend initialization failed:', error);
}

module.exports = async (req, res) => {
  console.log('🔄 API Contact called - Method:', req.method);
  
  try {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Manejar preflight OPTIONS
    if (req.method === 'OPTIONS') {
      console.log('🔄 Handling OPTIONS preflight');
      return res.status(200).end();
    }
    
    // Verificar que Resend se inicializó correctamente
    if (!resend) {
      throw new Error('Resend no se pudo inicializar. Verifica RESEND_API_KEY.');
    }
    
    // Solo permitir POST para el envío real
    if (req.method === 'POST') {
      console.log('📨 Processing POST request');
      
      let body;
      try {
        body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      } catch (parseError) {
        return res.status(400).json({ 
          error: 'Cuerpo de solicitud JSON inválido',
          details: parseError.message 
        });
      }
      
      const { name, email, message } = body;
      
      console.log('📝 Form data received:', { 
        name: name?.substring(0, 20), 
        email, 
        message: message?.substring(0, 30) + '...' 
      });
      
      // Validaciones básicas
      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: 'Faltan campos requeridos',
          required: ['name', 'email', 'message'],
          received: { name: !!name, email: !!email, message: !!message }
        });
      }
      
      // Enviar email (esto es lo que probablemente falla)
      console.log('🔄 Attempting to send email...');
      const { data, error: resendError } = await resend.emails.send({
        from: 'Pacific Dental Clinic <onboarding@resend.dev>',
        to: [process.env.EMAIL_USER || 'info@pacificdentalclinic.com'],
        reply_to: email,
        subject: `Nuevo mensaje de ${name} - Pacific Dental Clinic`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <small>Enviado el ${new Date().toLocaleString('es-ES')}</small>
        `
      });
      
      if (resendError) {
        console.error('❌ Resend API error:', resendError);
        throw new Error(`Resend error: ${resendError.message}`);
      }
      
      console.log('✅ Email sent successfully:', data?.id);
      
      return res.status(200).json({
        success: true,
        message: 'Mensaje enviado correctamente',
        id: data?.id
      });
    }
    
    // Para GET, devolver información de la API
    res.status(200).json({
      message: 'API de contacto funcionando',
      allowed_methods: ['POST', 'OPTIONS'],
      status: 'active'
    });
    
  } catch (error) {
    console.error('💥 API Error:', error);
    
    res.status(500).json({
      error: 'Error interno del servidor',
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? undefined : error.stack
    });
  }
};