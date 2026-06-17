import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-premium-black"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="Desarrollo inmobiliario premium rodeado de naturaleza"
          className="h-full w-full object-cover"
        />
        {/* Dark overlays for premium contrast */}
        <div className="absolute inset-0 bg-premium-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/40 to-premium-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-premium-black/90 via-transparent to-transparent" />
      </div>

      {/* Soft accent glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-96 w-96 rounded-full bg-primary-green/10 blur-3xl animate-float-slow" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 sm:px-10"
      >
        <div className="max-w-3xl">
          <motion.span
            variants={item}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-green/40 bg-primary-green/10 px-5 py-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary-green backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-green" />
            27 años de trayectoria
          </motion.span>

          <motion.h1
            variants={item}
            className="font-heading text-5xl font-black leading-[1.05] tracking-tight text-balance text-tech-white sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            27 años entregando lo que{' '}
            <span className="text-primary-green">prometemos</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-premium-muted sm:text-lg"
          >
            Diseñamos espacios donde la naturaleza y la arquitectura moderna se
            encuentran en perfecto equilibrio. Loteos, barrios y desarrollos
            urbanos pensados para vivir mejor, sin renunciar al entorno verde
            que nos define.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-green px-8 py-4 font-sans text-base font-semibold text-premium-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-sage"
            >
              Ver nuestros proyectos
              <ArrowRight
                size={18}
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-premium-line bg-premium-black/30 px-8 py-4 font-sans text-base font-semibold text-tech-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary-green/60 hover:bg-premium-gray"
            >
              Contactanos
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-premium-black to-transparent" />
    </section>
  );
}
