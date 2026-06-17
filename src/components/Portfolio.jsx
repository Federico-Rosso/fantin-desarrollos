import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const proyectos = [
  {
    categoria: 'Loteos',
    titulo: 'Reserva del Bosque',
    ubicacion: 'Zona Norte',
    descripcion:
      'Lotes amplios integrados al monte nativo, con calles serpenteantes y espacios verdes comunes.',
    imagen: '/images/dev-1.png',
  },
  {
    categoria: 'Barrios',
    titulo: 'Altos del Lago',
    ubicacion: 'Costa del río',
    descripcion:
      'Barrio cerrado premium con lagunas, senderos y arquitectura contemporánea en armonía con el paisaje.',
    imagen: '/images/dev-3.png',
  },
  {
    categoria: 'Arquitectura',
    titulo: 'Casa Mirador',
    ubicacion: 'Diseño exclusivo',
    descripcion:
      'Viviendas modernas de líneas puras, grandes superficies vidriadas y total conexión con el verde.',
    imagen: '/images/dev-2.png',
  },
  {
    categoria: 'Desarrollos urbanos',
    titulo: 'Parque Central',
    ubicacion: 'Centro consolidado',
    descripcion:
      'Desarrollos de uso mixto que combinan residencias, comercios y amplios pulmones verdes.',
    imagen: '/images/dev-4.png',
  },
  {
    categoria: 'Loteos',
    titulo: 'Cumbres Verdes',
    ubicacion: 'Sierras',
    descripcion:
      'Loteos en altura con vistas panorámicas y la mejor infraestructura de servicios.',
    imagen: '/images/dev-5.png',
  },
  {
    categoria: 'Barrios',
    titulo: 'Jardines del Sur',
    ubicacion: 'Zona Sur',
    descripcion:
      'Un barrio pensado para familias, con seguridad, club house y extensas áreas recreativas.',
    imagen: '/images/dev-6.png',
  },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Portfolio() {
  return (
    <section id="proyectos" className="relative bg-premium-black py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        {/* Heading */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary-green">
              Nuestro portfolio
            </span>
            <h2 className="mt-4 font-heading text-4xl font-black leading-tight tracking-tight text-balance text-tech-white sm:text-5xl">
              Desarrollos que perduran
            </h2>
          </div>
          <p className="max-w-md font-sans text-base leading-relaxed text-premium-muted">
            Loteos, barrios cerrados y desarrollos urbanos diseñados para
            integrarse al entorno natural y revalorizarse con el tiempo.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <ProjectCard proyecto={proyectos[0]} className="lg:row-span-2 lg:h-full" />
          <ProjectCard proyecto={proyectos[1]} />
          <ProjectCard proyecto={proyectos[2]} />
          <ProjectCard proyecto={proyectos[3]} />
          <ProjectCard proyecto={proyectos[4]} className="sm:col-span-2 lg:col-span-1" />
          <ProjectCard proyecto={proyectos[5]} className="sm:col-span-2 lg:col-span-3" />
        </motion.div>
      </div>
    </section>
  );
}
