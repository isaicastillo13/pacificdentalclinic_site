import { Resend } from "resend";

export async function POST({ request }) {
  try {
    const { name, email, message } = await request.json();

    console.log("📨 Recibiendo solicitud de contacto:", { name, email });

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Pacific Dental Clinic <onboarding@resend.dev>",
      to: [process.env.EMAIL_USER || "info@pacificdentalclinic.com"],
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
            <div style="margin-bottom: 15px;">
              <strong style="color: #1a56db;">Mensaje:</strong>
              <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #1a56db;">
                ${message.replace(/\n/g, "<br>")}
              </p>
            </div>
          </div>
          <div style="margin-top: 20px; padding: 20px; background: #e5e7eb; text-align: center; font-size: 12px; color: #6b7280;">
            <p>Este mensaje fue enviado desde el formulario de contacto de Pacific Dental Clinic</p>
            <p>📅 ${new Date().toLocaleDateString("es-ES", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Error de Resend:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("✅ Email enviado exitosamente:", data?.id);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente",
        id: data?.id,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("❌ Error general:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
