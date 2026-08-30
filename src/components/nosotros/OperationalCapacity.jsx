import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const metrics = [
  {
    value: '7',
    label:
      'Urbanizaciones en distintos grados de desarrollo (Ibarlucea, Capitán Bermúdez, San Lorenzo, Timbúes, Oliveros, Puerto Gaboto y Monje).',
  },
  {
    value: '4',
    label: 'Nuevas urbanizaciones próximas a ser comercializadas.',
  },
  {
    value: '3.000',
    label:
      'Lotes en banco de suelo (Landbank) para desarrollo futuro en el Corredor Norte de Rosario.',
  },
];

export default function OperationalCapacity() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/capacidad_operativa.jpg"
          alt="Vista aérea de una nueva urbanización de Fantín Desarrollos con avenida central en desarrollo"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        {/* Darkening overlay for legibility */}
        <div className="absolute inset-0 bg-premium-black/70" />
        {/* Top gradient merging with the previous section (dark-green) */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-dark-green via-dark-green/70 to-transparent" />
        {/* Bottom gradient merging with the footer (dark-green) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-green via-dark-green/70 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-tech-white sm:text-4xl">
            Capacidad operativa y banco de tierras
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {metrics.map(({ value, label }, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm"
            >
              <span className="block font-heading text-6xl font-extrabold leading-none tracking-tight text-primary-green sm:text-7xl">
                {value}
              </span>
              <p className="mt-5 font-sans text-sm leading-relaxed text-charcoal/80">
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 rounded-3xl border border-primary-green/20 bg-dark-green/30 p-8 shadow-lg backdrop-blur-md sm:p-12"
        >
          <Quote className="text-primary-green" size={36} />
          <blockquote className="mt-6 font-heading text-xl font-semibold leading-relaxed text-tech-white sm:text-2xl">
            “Nuestro compromiso es con el crecimiento de la región, logrando
            urbanizaciones en las que quienes las habiten logren altos estándares
            de satisfacción.”
          </blockquote>
          <figcaption className="mt-6 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-sage">
            Diego R. Fantín
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
