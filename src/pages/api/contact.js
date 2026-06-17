import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    return res.status(201).json({ ok: true });
  } catch (error) {
    console.log('[v0] contact submission error:', error.message);
    return res
      .status(500)
      .json({ error: 'No pudimos enviar tu consulta. Intentá nuevamente.' });
  }
}
