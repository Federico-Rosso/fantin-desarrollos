import { proyectos } from '../data/proyectos';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  // Filtramos los proyectos que definimos como destacados
  const proyectosDestacados = proyectos.filter(p => p.destacado);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* 1. BARRA DE NAVEGACIÓN */}
      <nav className="bg-white sticky top-0 z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-xl font-black tracking-wider text-slate-900 uppercase">
            Fantín<span className="text-emerald-600">.</span>
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-slate-600">
            <a href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">Inicio</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Loteos</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Empresa</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Contacto</a>
          </div>
          <button className="bg-emerald-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-emerald-600 transition-colors shadow-md">
            💬 WhatsApp
          </button>
        </div>
      </nav>

      {/* 2. SECCIÓN PRINCIPAL (HERO) */}
      <header className="bg-slate-900 text-white py-24 sm:py-32 text-center relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Trayectoria Inmobiliaria
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mt-6 leading-tight">
            Diseñamos el espacio para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              tu futura vida
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Desarrollos urbanos planificados en las zonas con mayor crecimiento de la región. Tu lote seguro, con el respaldo de Fantín.
          </p>
        </div>
      </header>

      {/* 3. SECCIÓN DE LOTEOS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            Explorá nuestros barrios abiertos y privados en Ibarlucea y la región.
          </p>
        </div>

        {/* Grilla responsiva adaptada a celulares y monitores grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosDestacados.map((proyecto) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </main>

      {/* 4. PIE DE PÁGINA */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>© 2026 Fantín Desarrollos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
