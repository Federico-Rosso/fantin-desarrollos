import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="relative bg-premium-black py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-premium-line bg-premium-gray p-10 text-center sm:p-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-green/10 blur-3xl" />
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary-green">
            Hablemos
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-heading text-4xl font-black leading-tight tracking-tight text-balance text-tech-white sm:text-5xl">
            Construyamos juntos tu próximo proyecto
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-premium-muted">
            Nuestro equipo está listo para asesorarte y encontrar el desarrollo
            ideal para vos. Dejanos tu consulta y te respondemos a la brevedad.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:contacto@fantindesarrollos.com"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-green px-8 py-4 font-sans text-base font-semibold text-premium-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-sage"
            >
              Enviar consulta
              <ArrowRight
                size={18}
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              />
            </a>
            <a
              href="tel:+540000000000"
              className="inline-flex items-center justify-center rounded-full border border-premium-line px-8 py-4 font-sans text-base font-semibold text-tech-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary-green/60 hover:bg-premium-dark"
            >
              Llamar ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
