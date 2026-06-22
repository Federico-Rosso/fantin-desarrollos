import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectCard({ proyecto, onSelect }) {
  if (!proyecto) return null;

  const isActivo = proyecto.lifecycle === 'activo';

  return (
    <motion.button
      type="button"
      layout
      variants={item}
      onClick={() => onSelect?.(proyecto)}
      className="group relative block h-[24rem] w-full overflow-hidden rounded-2xl border border-premium-line bg-premium-gray text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green sm:h-[26rem]"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={proyecto.imagen || '/placeholder.svg'}
          alt={`Desarrollo ${proyecto.nombre} en ${proyecto.ubicacion}`}
          className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isActivo ? '' : 'grayscale-[0.65] contrast-[0.9] brightness-90'
          }`}
        />
        {/* Bottom gradient overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isActivo
              ? 'bg-gradient-to-t from-dark-green via-premium-black/40 to-transparent group-hover:from-deep-green/95'
              : 'bg-gradient-to-t from-premium-black via-premium-black/45 to-transparent'
          }`}
        />
      </div>

      {/* Location (top-left, where the badge used to be) */}
      <p className="absolute left-6 top-6 z-10 font-sans text-xs uppercase tracking-widest text-sage/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
        {proyecto.ubicacion}
      </p>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        {proyecto.logo ? (
          <h3 className="mt-2 flex h-20 items-end">
            <span className="sr-only">{proyecto.nombre}</span>
            <img
              src={proyecto.logo || '/placeholder.svg'}
              alt={`Logo de ${proyecto.nombre}`}
              className="max-h-20 w-auto max-w-[15rem] object-contain object-left drop-shadow-[0_2px_10px_rgba(255,255,255,0.18)]"
            />
          </h3>
        ) : (
          <h3 className="mt-2 font-heading text-2xl font-bold text-tech-white sm:text-3xl">
            {proyecto.nombre}
          </h3>
        )}

        {/* Reveal on hover */}
        <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <span className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary-green">
              {isActivo ? 'Ver Masterplan y Ficha' : 'Ver Legado Histórico'}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
