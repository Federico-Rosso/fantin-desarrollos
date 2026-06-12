import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-dark-green">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-shift bg-300%"
        style={{
          backgroundImage:
            'linear-gradient(125deg, #1E3310 0%, #1E3310 25%, #4A8222 55%, #69B42E 80%, #4A8222 100%)',
        }}
      />
      {/* Soft floating glows */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary-green/30 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-sage/10 blur-3xl animate-float-slow" />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 via-dark-green/20 to-transparent" />

      {/* Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <motion.a
          href="#inicio"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
        >
          <img
            src="/images/logo-header.png"
            alt="Fantín Desarrollos"
            className="h-12 w-auto object-contain"
          />
        </motion.a>
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden gap-8 md:flex"
        >
          {['Proyectos', 'Nosotros', 'Contacto'].map((linkText) => (
            <a
              key={linkText}
              href="#"
              className="font-sans text-sm font-medium text-sage/80 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-primary-green"
            >
              {linkText}
            </a>
          ))}
        </motion.nav>
      </header>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex min-h-[calc(100vh-200px)] w-full max-w-5xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-block rounded-full border border-sage/30 bg-sage/10 px-5 py-2 font-sans text-xs font-semibold uppercase tracking-widest text-sage backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary-green hover:bg-primary-green/20"
        >
          27 años de trayectoria
        </motion.span>

        <motion.h1
          variants={item}
          className="font-heading text-5xl font-black leading-[1.05] tracking-tight text-balance text-tech-white transition-all duration-300 ease-in-out hover:scale-[1.02] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">27 años</span> entregando lo que prometemos
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-sage transition-all duration-300 ease-in-out hover:-translate-y-1 sm:text-lg"
        >
          Diseñamos espacios donde la naturaleza y la arquitectura moderna se
          encuentran en perfecto equilibrio. Loteos, barrios y desarrollos pensados
          para vivir mejor, sin renunciar al entorno verde que nos define.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#proyectos"
            className="group inline-flex items-center justify-center rounded-full bg-primary-green px-8 py-4 font-sans text-base font-semibold text-dark-green shadow-lg shadow-primary-green/30 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-sage hover:shadow-2xl hover:shadow-primary-green/40"
          >
            Ver nuestros proyectos
            <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full border border-sage/40 bg-transparent px-8 py-4 font-sans text-base font-semibold text-tech-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:border-primary-green hover:bg-sage/10 hover:shadow-xl"
          >
            Contactanos
          </a>
        </motion.div>
      </motion.div>

      {/* Footer strip */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 text-center sm:px-10">
        <p className="font-sans text-xs tracking-wide text-sage/60">
          &copy; {new Date().getFullYear()} Fantín Desarrollos. Naturaleza y arquitectura en equilibrio.
        </p>
      </div>
    </section>
  );
}
