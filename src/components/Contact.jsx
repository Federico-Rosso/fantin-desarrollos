import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const initialForm = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'No pudimos enviar tu consulta.');
      }

      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <section id="contacto" className="relative bg-premium-black py-14 sm:py-16">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-premium-line bg-premium-gray p-8 sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-green/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary-green">
                Hablemos
              </span>
              <h2 className="mt-5 max-w-md font-heading text-4xl font-black leading-tight tracking-tight text-balance text-tech-white sm:text-5xl lg:mx-0">
                Construyamos juntos tu próximo proyecto
              </h2>
              <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-premium-muted lg:mx-0">
                Nuestro equipo está listo para asesorarte y encontrar el
                desarrollo ideal para vos. Dejanos tu consulta y te respondemos
                a la brevedad.
              </p>
            </div>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-primary-green/30 bg-premium-dark p-8 text-center">
                <CheckCircle2 size={40} className="text-primary-green" />
                <h3 className="mt-4 font-heading text-xl font-bold text-tech-white">
                  ¡Consulta enviada!
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-premium-muted">
                  Gracias por escribirnos. Te vamos a responder a la brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-premium-line px-6 py-3 font-sans text-sm font-semibold text-tech-white transition-all duration-300 ease-in-out hover:border-primary-green/60 hover:bg-premium-gray"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2 text-left">
                  <label
                    htmlFor="name"
                    className="font-sans text-xs font-semibold uppercase tracking-wider text-premium-muted"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="rounded-xl border border-premium-line bg-premium-dark px-4 py-3 font-sans text-sm text-tech-white placeholder:text-premium-muted/60 outline-none transition-colors duration-200 focus:border-primary-green"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2 text-left">
                    <label
                      htmlFor="email"
                      className="font-sans text-xs font-semibold uppercase tracking-wider text-premium-muted"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="rounded-xl border border-premium-line bg-premium-dark px-4 py-3 font-sans text-sm text-tech-white placeholder:text-premium-muted/60 outline-none transition-colors duration-200 focus:border-primary-green"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <label
                      htmlFor="phone"
                      className="font-sans text-xs font-semibold uppercase tracking-wider text-premium-muted"
                    >
                      Teléfono <span className="normal-case opacity-60">(opcional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+54 ..."
                      className="rounded-xl border border-premium-line bg-premium-dark px-4 py-3 font-sans text-sm text-tech-white placeholder:text-premium-muted/60 outline-none transition-colors duration-200 focus:border-primary-green"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-left">
                  <label
                    htmlFor="message"
                    className="font-sans text-xs font-semibold uppercase tracking-wider text-premium-muted"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Contanos qué estás buscando"
                    className="resize-none rounded-xl border border-premium-line bg-premium-dark px-4 py-3 font-sans text-sm text-tech-white placeholder:text-premium-muted/60 outline-none transition-colors duration-200 focus:border-primary-green"
                  />
                </div>

                {status === 'error' && (
                  <p
                    role="alert"
                    className="font-sans text-sm text-red-400"
                  >
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary-green px-8 py-4 font-sans text-base font-semibold text-premium-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-sage disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      Enviando
                      <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Enviar consulta
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
