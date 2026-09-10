import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

const sql = neon(process.env.DATABASE_URL);
const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = 'Fantín Desarrollos <no-reply@fantindesarrollos.com>';
const TO_EMAIL = 'fantin.desarrollos@gmail.com';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  const { name, email, phone, message } = req.body || {};

  // Basic server-side validation
  const cleanName = typeof name === 'string' ? name.trim() : '';
  const cleanEmail = typeof email === 'string' ? email.trim() : '';
  const cleanPhone = typeof phone === 'string' ? phone.trim() : '';
  const cleanMessage = typeof message === 'string' ? message.trim() : '';

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return res
      .status(400)
      .json({ error: 'Por favor completá nombre, email y mensaje.' });
  }

  if (!EMAIL_REGEX.test(cleanEmail)) {
    return res.status(400).json({ error: 'Ingresá un email válido.' });
  }

  if (cleanName.length > 120 || cleanEmail.length > 200 || cleanMessage.length > 2000) {
    return res.status(400).json({ error: 'Alguno de los campos es demasiado largo.' });
  }

  try {
    await sql`
      INSERT INTO public.contact_submissions (name, email, phone, message)
      VALUES (${cleanName}, ${cleanEmail}, ${cleanPhone || null}, ${cleanMessage})
    `;
  } catch (error) {
    console.log('[v0] contact submission error:', error.message);
    return res
      .status(500)
      .json({ error: 'No pudimos enviar tu consulta. Intentá nuevamente.' });
  }

  const { error: emailError } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: cleanEmail,
    subject: `Nueva consulta de ${cleanName}`,
    html: `
      <h2>Nueva consulta desde el sitio web</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(cleanName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(cleanPhone || 'No especificado')}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(cleanMessage).replace(/\n/g, '<br>')}</p>
    `,
  });

  if (emailError) {
    console.log('[v0] resend email error:', emailError.message);
    return res
      .status(500)
      .json({ error: 'No pudimos enviar tu consulta. Intentá nuevamente.' });
  }

  return res.status(201).json({ ok: true });
}
