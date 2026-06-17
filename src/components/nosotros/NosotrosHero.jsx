import React from 'react';
import { motion } from 'framer-motion';

export default function NosotrosHero() {
  return (
    <section className="relative overflow-hidden bg-dark-green pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#69B42E_0%,transparent_55%)]" />
      </div>
      <div className="relative mx-auto w-full max-w-5xl px-6 sm:px-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-primary-green/40 bg-primary-green/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary-green"
        >
          Quiénes somos
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-heading text-5xl font-extrabold tracking-tight text-tech-white sm:text-6xl lg:text-7xl"
        >
          Nosotros
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-sage sm:text-xl"
        >
          27 años de trayectoria, preservando el entorno natural y construyendo
          con solidez corporativa.
        </motion.p>
      </div>
    </section>
  );
}
