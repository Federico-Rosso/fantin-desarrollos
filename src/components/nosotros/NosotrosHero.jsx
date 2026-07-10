import React from 'react';
import { motion } from 'framer-motion';

export default function NosotrosHero() {
  return (
    <section className="relative overflow-hidden bg-dark-green pt-32 pb-20 sm:pt-40 sm:pb-32">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/hero_nosotros.jpg"
          alt="Vista aérea de una urbanización de Fantín Desarrollos con calle central y lotes arbolados"
          className="h-full w-full object-cover"
        />
        {/* Darkening overlay for text legibility */}
        <div className="absolute inset-0 bg-premium-black/55" />
        {/* Bottom gradient merging into the next section (#0E0E0E) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-premium-black/70 to-premium-black" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 sm:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl font-extrabold tracking-tight text-tech-white sm:text-6xl lg:text-7xl"
        >
          Nosotros
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-tech-white/90 sm:text-xl"
        >
          27 años de trayectoria, preservando el entorno natural y construyendo
          con solidez corporativa.
        </motion.p>
      </div>
    </section>
  );
}
