import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { desarrollos } from '../data/desarrollos';

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Portfolio() {
  const router = useRouter();

  const enComercializacion = useMemo(
    () => desarrollos.filter((d) => d.lifecycle === 'activo'),
    [],
  );
  const consolidados = useMemo(
    () => desarrollos.filter((d) => d.lifecycle === 'consolidado'),
    [],
  );

  const onSelect = (p) => router.push(`/proyectos/${p.id}`);

  const renderGrupo = (proyectos) => (
    <motion.div
      variants={grid}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {proyectos.map((proyecto) => (
        <motion.div key={proyecto.id}>
          <ProjectCard proyecto={proyecto} onSelect={onSelect} />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section id="proyectos" className="relative bg-premium-black py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        {/* En comercialización */}
        <div className="mb-10 max-w-2xl">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary-green">
            En comercialización
          </span>
          <h2 className="mt-4 font-heading text-4xl font-black leading-tight tracking-tight text-balance text-tech-white sm:text-5xl">
            Mirá nuestros desarrollos
          </h2>
        </div>
        {renderGrupo(enComercializacion)}

        {/* Consolidados */}
        <div className="mb-10 mt-24 max-w-2xl">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary-green">
            Barrios consolidados
          </span>
          <h2 className="mt-4 font-heading text-4xl font-black leading-tight tracking-tight text-balance text-tech-white sm:text-5xl">
            Entregamos +2500 lotes
          </h2>
        </div>
        {renderGrupo(consolidados)}
      </div>
    </section>
  );
}
