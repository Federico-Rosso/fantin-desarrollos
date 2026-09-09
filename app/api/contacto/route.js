import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO_EMAIL = 'fantin.desarrollos@gmail.com';

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Cuerpo de la solicitud inválido.' }, { status: 400 });
  }

  const { name, email, phone, message } = body || {};

  const cleanName = typeof name === 'string' ? name.trim() : '';
  const cleanEmail = typeof email === 'string' ? email.trim() : '';
  const cleanPhone = typeof phone === 'string' ? phone.trim() : '';
  const cleanMessage = typeof message === 'string' ? message.trim() : '';

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return Response.json(
      { error: 'Por favor completá nombre, email y mensaje.' },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(cleanEmail)) {
    return Response.json({ error: 'Ingresá un email válido.' }, { status: 400 });
  }

  if (cleanName.length > 120 || cleanEmail.length > 200 || cleanMessage.length > 2000) {
    return Response.json(
      { error: 'Alguno de los campos es demasiado largo.' },
      { status: 400 }
    );
  }

  try {
    const { error } = await resend.emails.send({
      from: `Fantin Desarrollos <contacto@${process.env.RESEND_EMAIL_DOMAIN}>`,
      to: TO_EMAIL,
      replyTo: cleanEmail,
      subject: `Nueva consulta de ${cleanName}`,
      html: `
        <h2>Nueva consulta desde el sitio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        <p><strong>Teléfono:</strong> ${cleanPhone ? escapeHtml(cleanPhone) : 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(cleanMessage).replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.log('[v0] resend error:', error.message || error);
      return Response.json(
        { error: 'No pudimos enviar tu consulta. Intentá nuevamente.' },
        { status: 502 }
      );
    }

    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.log('[v0] contact submission error:', error.message);
    return Response.json(
      { error: 'No pudimos enviar tu consulta. Intentá nuevamente.' },
      { status: 500 }
    );
  }
}
