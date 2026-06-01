import React from 'react';

export default function ProjectCard({ proyecto }) {
  if (!proyecto) return null;
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative h-56 w-full bg-slate-200 overflow-hidden">
        <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-full object-cover" />
        <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
          📍 {proyecto.ubicacion}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-slate-800">{proyecto.titulo}</h3>
        <p className="text-slate-600 text-sm mt-2 flex-grow">{proyecto.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {proyecto.tags && proyecto.tags.map((tag, index) => (
            <span key={index} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium">
              {tag}
            </span>
          ))}
        </div>
        <button className="mt-6 block w-full text-center bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors">
          Ver Masterplan y Lotes
        </button>
      </div>
    </div>
  );
}
