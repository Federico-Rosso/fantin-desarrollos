import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const heroSlides = [
  {
    src: '/images/hero-parque-esculturas.jpg',
    alt: 'Parque con esculturas verdes en forma de árbol y bancos de hormigón entre campos',
  },
  {
    src: '/images/hero-cinco-lagos.jpg',
    alt: 'Pórtico de acceso al desarrollo Cinco Lagos con techo ondulado de madera',
  },
  {
    src: '/images/hero-loteo-atardecer.jpg',
    alt: 'Vista aérea de un loteo residencial al atardecer rodeado de campos verdes',
  },
  {
    src: '/images/hero-parque-render.jpg',
    alt: 'Render aéreo de un parque arbolado con senderos y áreas verdes',
  },
  {
    src: '/images/hero-camino-obra.jpg',
    alt: 'Camino de tierra dentro de un nuevo loteo en desarrollo bajo un cielo nublado',
  },
  {
    src: '/images/hero-terranova.webp',
    alt: 'Acceso al barrio abierto Terranova con avenida arbolada de palmeras',
  },
];

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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-dark-green"
    >
      {/* Background image carousel */}
      <div className="absolute inset-0">
        
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.src}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{ zIndex: index === current ? 10 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              unoptimized
              className="object-cover object-[center_65%]"
            />
          </motion.div>
        ))}

        {/* Dark overlays for premium contrast (AHORA CON Z-20 PARA QUE NO SE ROMPA) */}
        <div className="absolute inset-0 z-20 bg-premium-black/60" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-premium-black/90 via-transparent to-transparent" />
        {/* Green accent gradient on the left */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-primary-green/30 via-transparent to-transparent" />
        {/* Bottom fade to #1e3310 so the next section blends seamlessly */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-2/3 bg-gradient-to-b from-transparent via-[#1e3310]/80 to-[#1e3310]" />
      </div>

      {/* Soft accent glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/4 z-20 h-96 w-96 rounded-full bg-primary-green/10 blur-3xl animate-float-slow" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-30 mx-auto w-full max-w-7xl px-6 pt-16 sm:px-10"
      >
        <div className="max-w-3xl">
          <motion.h1
            variants={item}
            className="font-heading text-5xl font-black leading-[1.05] tracking-tight text-balance text-tech-white sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            Tu próximo hogar empieza en el{' '}
            <span className="text-primary-green">entorno ideal</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-premium-muted sm:text-lg"
          >
            Desarrollamos loteos y barrios que integran arquitectura moderna y
            naturaleza para elevar tu calidad de vida.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-green px-8 py-4 font-sans text-base font-semibold text-premium-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-sage"
            >
              Ver nuestros desarrollos
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
      <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#1e3310] to-transparent" />
    </section>
  );
}
