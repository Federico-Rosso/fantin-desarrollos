import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import DetailPanel from './DetailPanel';
import { desarrollos, filtros } from '../data/desarrollos';

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Portfolio() {
  const [filtro, setFiltro] = useState('todos');
  const [seleccionado, setSeleccionado] = useState(null);

  const visibles = useMemo(() => {
    if (filtro === 'todos') return desarrollos;
    return desarrollos.filter((d) => d.lifecycle === filtro);
  }, [filtro]);

  return (
    <section id="proyectos" className="relative bg-premium-black py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary-green">
            Nuestros desarrollos
          </span>
          <h2 className="mt-4 font-heading text-4xl font-black leading-tight tracking-tight text-balance text-tech-white sm:text-5xl">
            Barrios abiertos que perduran
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-premium-muted">
            Loteos residenciales integrados al paisaje. Explorá nuestro portfolio según su
            etapa comercial, desde lanzamientos y oportunidades de inversión hasta barrios
            100% consolidados.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Filtrar desarrollos por ciclo comercial"
          className="mb-12 inline-flex flex-wrap gap-2 rounded-full border border-premium-line bg-premium-gray p-1.5"
        >
          {filtros.map((f) => {
            const activo = filtro === f.id;
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={activo}
                onClick={() => setFiltro(f.id)}
                className={`relative rounded-full px-5 py-2.5 font-sans text-sm font-semibold transition-colors duration-300 ${
                  activo ? 'text-tech-white' : 'text-premium-muted hover:text-tech-white'
                }`}
              >
                {activo && (
                  <motion.span
                    layoutId="filtro-activo"
                    className="absolute inset-0 rounded-full bg-primary-green"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div
          layout
          variants={grid}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibles.map((proyecto) => (
              <motion.div
                key={proyecto.id}
                layout
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
              >
                <ProjectCard proyecto={proyecto} onSelect={setSeleccionado} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <DetailPanel proyecto={seleccionado} onClose={() => setSeleccionado(null)} />
    </section>
  );
}
