import React from 'react';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectCard({ proyecto }) {
  if (!proyecto) return null;

  return (
    <motion.article
      variants={item}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-dark-green/10 bg-tech-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-4 hover:shadow-2xl hover:shadow-dark-green/30"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={proyecto.imagen}
          alt={`Desarrollo ${proyecto.titulo}`}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
        <span className="absolute left-4 top-4 rounded-full bg-primary-green px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-dark-green shadow-md">
          {proyecto.ubicacion}
        </span>
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="font-heading text-2xl font-bold text-dark-green transition-colors duration-300 group-hover:text-transition-green">
          {proyecto.titulo}
        </h3>
        <p className="mt-3 flex-grow font-sans text-sm leading-relaxed text-charcoal/70">
          {proyecto.description}
        </p>
        <button className="mt-6 inline-flex items-center justify-center gap-2 self-start rounded-full bg-dark-green px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-sage transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary-green hover:text-dark-green">
          Ver más
          <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            &rarr;
          </span>
        </button>
      </div>
    </motion.article>
  );
}
