import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectCard({ proyecto, className = '' }) {
  if (!proyecto) return null;

  return (
    <motion.a
      href="#contacto"
      variants={item}
      className={`group relative block overflow-hidden rounded-2xl border border-premium-line bg-premium-gray ${className}`}
    >
      <div className="absolute inset-0">
        <img
          src={proyecto.imagen}
          alt={`Desarrollo ${proyecto.titulo}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/30 to-transparent transition-opacity duration-500 group-hover:from-premium-black/95" />
      </div>

      {/* Category badge */}
      <span className="absolute left-5 top-5 z-10 rounded-full border border-primary-green/40 bg-premium-black/50 px-3 py-1.5 font-sans text-[0.7rem] font-semibold uppercase tracking-widest text-primary-green backdrop-blur-sm">
        {proyecto.categoria}
      </span>

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[22rem] flex-col justify-end p-6 sm:min-h-[26rem]">
        <p className="font-sans text-xs uppercase tracking-widest text-premium-muted">
          {proyecto.ubicacion}
        </p>
        <h3 className="mt-2 font-heading text-2xl font-bold text-tech-white sm:text-3xl">
          {proyecto.titulo}
        </h3>
        <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-premium-muted opacity-0 transition-all duration-500 ease-out group-hover:opacity-100">
          {proyecto.descripcion}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary-green">
          Conocer más
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </span>
      </div>
    </motion.a>
  );
}
