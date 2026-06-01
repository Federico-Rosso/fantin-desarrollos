import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between p-6 sm:p-12 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Encabezado / Logo */}
      <header className="max-w-7xl mx-auto w-full">
        <span className="text-xl font-black tracking-wider text-emerald-400 uppercase">
          Fantín Desarrollos
        </span>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-4xl mx-auto w-full my-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Textos (H1, H2 y P) */}
        <div className="flex flex-col justify-center">
          <span className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2 block">
            Sitio en Lanzamiento
          </span>
          
          {/* Tu H1 Principal */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Estamos creando el futuro inmobiliario.
          </h1>
          
          {/* Tu H2 Secundario */}
          <h2 className="text-lg sm:text-xl text-slate-400 font-medium mt-4">
            Próximamente vas a poder explorar nuestros masterplanes, barrios y loteos de forma interactiva.
          </h2>
          
          {/* Línea decorativa */}
          <div className="h-1 w-20 bg-emerald-500 rounded mt-6"></div>
        </div>

        {/* Foto de Placeholder (Imagen de muestra de un lote/arquitectura) */}
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl shadow-emerald-950/20 border border-slate-800 aspect-video md:aspect-square">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop" 
            alt="Terreno o loteo en construcción" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
        </div>

      </main>

      {/* Pie de página */}
      <footer className="max-w-7xl mx-auto w-full text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Fantín Desarrollos. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}
