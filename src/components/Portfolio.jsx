import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
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
    <section id="proyectos" className="relative bg-dark-green pt-10 pb-14 sm:pt-12 sm:pb-16">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        {/* En comercialización */}
        <div className="mb-10 max-w-2xl">
          <h2 className="font-heading text-4xl font-black leading-tight tracking-tight text-balance text-tech-white sm:text-5xl">
            Mirá nuestros desarrollos
          </h2>
        </div>
        {renderGrupo(enComercializacion)}
      </div>
    </section>
  );
}
