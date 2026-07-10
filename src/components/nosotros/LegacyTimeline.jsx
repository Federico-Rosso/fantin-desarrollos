import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Waves, TreePine } from 'lucide-react';

const milestones = [
  {
    period: 'Década del 90',
    title: 'El origen',
    Icon: Sprout,
    text: 'Fundada por el Dr. Julio Humberto Fantín, quien al jubilarse se dedicó al paisajismo. Limpiaba manualmente de hormigas y rosetas las tierras junto al Río Carcarañá en un tanque de 500 litros, con el único deseo de que los niños pudieran caminar descalzos.',
  },
  {
    period: '1999',
    title: 'Primer hito',
    Icon: Waves,
    text: 'Comercialización de "Solares del Carcarañá", un proyecto que marcó un antes y un después al respetar la topografía natural y los espacios verdes vírgenes frente al río.',
    images: [
      {
        src: '/images/solares_carcarana_1.webp',
        alt: 'Vista aérea de Solares del Carcarañá con lotes arbolados y calles internas',
      },
      {
        src: '/images/solares_carcarana_2.webp',
        alt: 'Vista aérea de Solares del Carcarañá junto al río y espacios verdes',
      },
      {
        src: '/images/solares_carcarana_3.webp',
        alt: 'Vista aérea de Solares del Carcarañá con residencias frente al río',
      },
    ],
  },
  {
    period: 'El Legado',
    title: 'La visión familiar',
    Icon: TreePine,
    text: 'Continuación de la visión familiar por parte de sus hijos, materializando hitos de preservación ambiental como el Bosque Natural Protegido "Delta del Bucaré", la conservación de montes nativos en "Chacras del Rincón", y los corredores de biodiversidad en "Solares Sur" y "Carcaraes".',
    images: [
      {
        src: '/images/bucare.webp',
        alt: 'Vista aérea del Delta del Bucaré al atardecer junto al río',
      },
      {
        src: '/images/rincon.webp',
        alt: 'Vista aérea de Chacras del Rincón con lagunas y montes nativos',
      },
      {
        src: '/images/solares_sur.webp',
        alt: 'Vista aérea de Solares Sur con residencias y corredor de biodiversidad',
      },
    ],
  },
];

export default function LegacyTimeline() {
  return (
    <section className="bg-premium-black py-20 sm:py-28">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">
        <div className="mb-14 text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
            Nuestra Historia
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-tech-white sm:text-4xl">
            El legado que nos construye
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-premium-line sm:left-[27px]" />

          <div className="flex flex-col gap-12">
            {milestones.map(({ period, title, text, Icon, images }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex gap-6"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary-green/40 bg-dark-green text-primary-green sm:h-14 sm:w-14">
                  <Icon size={22} />
                </div>

                <div className="flex-1 rounded-2xl border border-premium-line bg-premium-dark p-6 sm:p-8">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
                    {period}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold text-tech-white sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-premium-muted sm:text-base">
                    {text}
                  </p>

                  {images && (
                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {images.map((image) => (
                        <div
                          key={image.src}
                          className="overflow-hidden rounded-xl border border-premium-line"
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
