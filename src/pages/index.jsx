import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Fantín Desarrollos",
    description: "Sitio web corporativo y plataforma de proyectos.",
    image: "/images/fantin.jpg",
    tags: ["Next.js", "Tailwind CSS", "React"],
    link: "#"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Mis Proyectos
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Explorá los desarrollos activos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
