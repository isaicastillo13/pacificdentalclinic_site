// src/services/emailService.js
import { Resend } from 'resend';

// Inicializar Resend
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendContactEmail = async (formData) => {
  try {
    console.log('🔄 Enviando email directamente desde frontend...');
    
    const { name, email, phone, message } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Pacific Dental Clinic <onboarding@resend.dev>',
      to: [import.meta.env.VITE_EMAIL_USER],
      reply_to: email,
      subject: `Nuevo mensaje de ${name} - Pacific Dental Clinic`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a56db; color: white; padding: 20px; text-align: center;">
            <h1>✉️ Nuevo Mensaje de Contacto</h1>
          </div>
          <div style="background: #f9fafb; padding: 20px;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #1a56db;">Nombre:</strong> ${name}
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #1a56db;">Email:</strong> ${email}
            </div>
            ${phone ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #1a56db;">Teléfono:</strong> ${phone}
            </div>
            ` : ''}
            <div style="margin-bottom: 15px;">
              <strong style="color: #1a56db;">Mensaje:</strong>
              <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #1a56db;">
                ${message.replace(/\n/g, '<br>')}
              </p>
            </div>
          </div>
          <div style="margin-top: 20px; padding: 20px; background: #e5e7eb; text-align: center; font-size: 12px; color: #6b7280;">
            <p>Este mensaje fue enviado desde el formulario de contacto de Pacific Dental Clinic</p>
            <p>📅 ${new Date().toLocaleDateString('es-ES')}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('❌ Error de Resend:', error);
      throw error;
    }

    console.log('✅ Email enviado exitosamente:', data?.id);
    return data;

  } catch (error) {
    console.error('❌ Error enviando email:', error);
    throw error;
  }
};