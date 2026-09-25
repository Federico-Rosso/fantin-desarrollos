import React from 'react';
import { motion } from 'framer-motion';

const comercializadoras = [
  {
    nombre: 'Drovetta',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-01-eLwrSi385Su30f3QkRdrcAqV6gnzB8.png',
    instagram: 'https://instagram.com/drovetta.prop',
  },
  {
    nombre: 'Criscenti',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-02-XB6mFyaNfIWpQ8Xks2y4ZPk3BxN8WW.png',
    instagram: 'https://instagram.com/inmobiliariacriscenti',
  },
  {
    nombre: 'Metro',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-03-fvPdQHAVQhUFtmjxVSdmnwNKZCafpH.png',
    instagram: 'https://instagram.com/metro.propiedades',
  },
  {
    nombre: 'Almirón',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-04-NoadZyFeAkiJ65jpxAf0k2nI4MlHkp.png',
    instagram: 'https://instagram.com/almiron_propiedades',
  },
];

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Comercializadoras() {
  return (
    <section
      id="comercializadoras"
      aria-labelledby="comercializadoras-title"
      className="relative bg-dark-green py-14 sm:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.24em] text-primary-green">
            Red comercial
          </p>
          <h2
            id="comercializadoras-title"
            className="mt-3 font-heading text-4xl font-black leading-tight tracking-tight text-tech-white sm:text-5xl"
          >
            Comercializadoras oficiales
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-premium-muted">
            Conocé a nuestros socios comerciales y encontrá tu próximo desarrollo.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {comercializadoras.map((comercializadora) => (
            <motion.a
              key={comercializadora.nombre}
              variants={item}
              href={comercializadora.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visitar Instagram de ${comercializadora.nombre}`}
              className="group flex min-h-32 items-center justify-center rounded-2xl border border-tech-white/15 bg-tech-white/5 p-6 transition-colors duration-300 hover:border-primary-green/70 hover:bg-tech-white/10 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-dark-green sm:min-h-40 sm:p-8"
            >
              <img
                src={comercializadora.logo}
                alt={`Logo de ${comercializadora.nombre}`}
                className="max-h-16 w-full object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105 sm:max-h-20"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Los logos provistos son archivos PNG con fondo claro; el tratamiento invertido los adapta al fondo institucional.
// Descripción de imágenes: cuatro logos institucionales de las comercializadoras Drovetta, Criscenti, Metro y Almirón.

 
