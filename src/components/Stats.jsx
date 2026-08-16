import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '27', suffix: 'Años', label: 'de trayectoria ininterrumpida' },
  { value: '+2500', suffix: 'Clientes', label: 'contentos' },
  { value: '+12', suffix: 'Desarrollos', label: 'terminados' },
  { value: '+3200', suffix: 'Lotes', label: 'en desarrollo' },
];

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const wrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Stats() {
  return (
    <section id="nosotros" className="relative bg-dark-green py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="mb-10 max-w-2xl">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary-green">
            Nosotros
          </span>
          <h2 className="mt-4 font-heading text-4xl font-black leading-tight tracking-tight text-balance text-tech-white sm:text-5xl">
            Naturaleza y arquitectura en equilibrio
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-premium-muted">
            Casi tres décadas construyendo confianza. Cada proyecto refleja
            nuestra obsesión por el detalle, el respeto por el entorno y el
            cumplimiento de lo que prometemos.
          </p>
        </div>

        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-tech-white/15 bg-tech-white/10 backdrop-blur-xl lg:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.suffix}
              variants={item}
              className="flex flex-col bg-tech-white/5 p-8 transition-colors duration-300 hover:bg-tech-white/10"
            >
              <span className="font-heading text-5xl font-black tracking-tight text-tech-white sm:text-6xl">
                {s.value}
              </span>
              <span className="mt-2 font-heading text-base font-bold uppercase tracking-wide text-primary-green">
                {s.suffix}
              </span>
              <span className="mt-3 font-sans text-sm leading-relaxed text-premium-muted">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
