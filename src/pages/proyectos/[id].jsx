import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  ArrowLeft,
  Layers,
  Hammer,
  ShieldCheck,
  MessageCircle,
  Images,
  Milestone,
  Gift,
  Map as MapIcon,
  Route,
  Construction,
  Fence,
  Zap,
  Droplets,
  Trees,
  Baby,
  Wifi,
  Waves,
  Flame,
  Lightbulb,
  Trophy,
  ShoppingBag,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { desarrollos } from '../../data/desarrollos';

// Número de WhatsApp comercial (reemplazar por el real)
const WHATSAPP = '5490000000000';

// Mapea cada servicio a un ícono outline (estética Fantín, verde) según
// palabras clave, adaptándose dinámicamente a los servicios de cada desarrollo.
function getServicioIcon(servicio = '') {
  const s = servicio.toLowerCase();
  if (s.includes('agua')) return Droplets;
  if (s.includes('cloaca')) return Droplets;
  if (s.includes('gas')) return Flame;
  if (s.includes('wifi') || s.includes('red') || s.includes('fibra')) return Wifi;
  if (s.includes('electric')) return Zap;
  if (s.includes('alumbrado') || s.includes('luz')) return Lightbulb;
  if (s.includes('alambr') || s.includes('cerc') || s.includes('perimetr')) return Fence;
  if (s.includes('cordón') || s.includes('cordon') || s.includes('cuneta')) return Construction;
  if (s.includes('calle') || s.includes('paviment') || s.includes('asfalt')) return Route;
  if (s.includes('juego')) return Baby;
  if (s.includes('laguna') || s.includes('lago')) return Waves;
  if (s.includes('forest') || s.includes('verde') || s.includes('arbol') || s.includes('árbol'))
    return Trees;
  if (s.includes('segur')) return ShieldCheck;
  if (s.includes('recreat') || s.includes('común') || s.includes('comun') || s.includes('club'))
    return Trophy;
  if (s.includes('comercial') || s.includes('local') || s.includes('gastro')) return ShoppingBag;
  return CheckCircle2;
}

export default function ProyectoPage({ proyecto }) {
  const router = useRouter();

  // Galería / lightbox — las fotos más el plano (si existe) como última imagen
  const fotos = proyecto?.fotos ?? [];
  const galeria = proyecto?.masterplan ? [...fotos, proyecto.masterplan] : fotos;
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isLightboxOpen = lightboxIndex !== null;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + galeria.length) % galeria.length)),
    [galeria.length],
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % galeria.length)),
    [galeria.length],
  );

  useEffect(() => {
    if (!isLightboxOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isLightboxOpen, closeLightbox, showPrev, showNext]);

  // Fallback mientras se genera la página o si no existe
  if (router.isFallback || !proyecto) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center bg-premium-black px-6 text-center">
          <div>
            <h1 className="font-heading text-3xl font-black text-tech-white">
              Proyecto no encontrado
            </h1>
            <p className="mt-3 font-sans text-premium-muted">
              El desarrollo que buscás no está disponible.
            </p>
            <Link
              href="/#proyectos"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-green px-6 py-3 font-sans text-sm font-semibold text-premium-black transition-colors hover:bg-sage"
            >
              <ArrowLeft size={16} />
              Ver todos los desarrollos
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const isActivo = proyecto.lifecycle === 'activo';
  const waText = encodeURIComponent(
    `Hola! Quiero más información sobre ${proyecto.nombre} (${proyecto.ubicacion}).`,
  );

  const stats = [
    { label: 'Localidad', value: proyecto.ubicacion, accent: false },
    {
      label: 'Etapa comercial',
      value: isActivo ? 'En comercialización' : 'Barrio consolidado',
      accent: false,
    },
    isActivo && typeof proyecto.avance === 'number'
      ? { label: 'Avance de obra', value: `${proyecto.avance}%`, accent: true }
      : { label: 'Estado', value: '100% Vendido', accent: true },
  ].filter(Boolean);

  return (
    <>
      <Head>
        <title>{`${proyecto.nombre} | Fantín Desarrollos`}</title>
        <meta name="description" content={proyecto.descripcion} />
        <meta name="theme-color" content="#0E0E0E" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="bg-premium-black pb-28 font-sans text-tech-white">
        {/* HERO — minimalista: solo el logo dinámico centrado sobre la imagen */}
        <section className="relative flex h-[80vh] min-h-[520px] w-full items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={proyecto.imagen || '/placeholder.svg'}
              alt={`Desarrollo ${proyecto.nombre} en ${proyecto.ubicacion}`}
              className={`h-full w-full object-cover ${
                isActivo ? 'brightness-[0.5]' : 'brightness-[0.45] grayscale-[0.4]'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/30 to-premium-black/30" />
          </div>

          {/* Volver — debajo del navbar fijo */}
          <div className="absolute inset-x-0 top-0 z-20">
            <div className="mx-auto w-full max-w-7xl px-6 pt-24 sm:px-10 sm:pt-28">
              <Link
                href="/#proyectos"
                className="inline-flex items-center gap-2 rounded-full bg-premium-black/40 px-4 py-2 font-sans text-sm font-medium text-tech-white/80 backdrop-blur-sm transition-colors hover:text-tech-white"
              >
                <ArrowLeft size={16} />
                Volver a desarrollos
              </Link>
            </div>
          </div>

          {/* Logo dinámico centrado + subtítulo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mt-16 flex flex-col items-center px-6 text-center"
          >
            <span className="sr-only">{proyecto.nombre}</span>
            {proyecto.logo ? (
              <img
                src={proyecto.logo || '/placeholder.svg'}
                alt={`Logo de ${proyecto.nombre}`}
                className="w-72 max-w-[85vw] object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] sm:w-96"
              />
            ) : (
              <h1
                aria-hidden="true"
                className="font-heading text-4xl font-black tracking-tight text-tech-white sm:text-6xl"
              >
                {proyecto.nombre}
              </h1>
            )}

            {proyecto.subtituloHero && (
              <h2 className="mt-6 max-w-2xl font-sans text-base font-light leading-relaxed text-gray-300 text-pretty sm:text-lg">
                {proyecto.subtituloHero}
              </h2>
            )}
          </motion.div>
        </section>

        {/* STATS */}
        <section className="border-y border-premium-line bg-premium-dark py-7">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-3 sm:px-10">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-premium-line sm:border-r sm:pr-6 sm:last:border-0"
              >
                <p className="font-sans text-xs uppercase tracking-wider text-premium-muted">
                  {s.label}
                </p>
                <p
                  className={`mt-1.5 font-heading text-2xl font-bold ${
                    s.accent ? 'text-primary-green' : 'text-tech-white'
                  }`}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PLANO DEL DESARROLLO — placeholder universal */}
        <section className="mx-auto w-full max-w-7xl px-6 pt-20 sm:px-10">
          <h2 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-primary-green">
            <MapIcon size={14} />
            Plano del desarrollo
          </h2>
          {proyecto.masterplan ? (
            <button
              type="button"
              onClick={() => setLightboxIndex(fotos.length)}
              aria-label={`Ampliar plano de ${proyecto.nombre}`}
              className="group relative mt-6 block w-full cursor-pointer overflow-hidden rounded-2xl border border-premium-line bg-premium-gray shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green"
            >
              <img
                src={proyecto.masterplan || '/placeholder.svg'}
                alt={`Plano del desarrollo ${proyecto.nombre}`}
                className="w-full object-contain"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-premium-black/0 opacity-0 transition-all duration-300 group-hover:bg-premium-black/20 group-hover:opacity-100">
                <span className="flex items-center gap-2 rounded-full bg-premium-black/70 px-4 py-2 font-sans text-sm font-medium text-tech-white">
                  <Images size={16} />
                  Ver plano en grande
                </span>
              </span>
            </button>
          ) : (
            <div className="group relative mt-6 flex min-h-[18rem] w-full items-center justify-center overflow-hidden rounded-2xl border border-premium-line bg-premium-gray shadow-lg sm:min-h-[22rem]">
              {/* Patrón sutil tipo grilla / mapa */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
              <div className="relative z-10 flex flex-col items-center px-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-premium-line bg-premium-dark text-primary-green">
                  <MapIcon size={28} strokeWidth={1.5} />
                </div>
                <p className="mt-5 font-heading text-lg font-bold text-tech-white">
                  Masterplan en preparación
                </p>
                <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-premium-muted">
                  Estamos integrando el plano interactivo de {proyecto.nombre}. Solicitá la
                  planimetría completa con disponibilidad y dimensiones de lotes.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* BODY */}
        <div className="mx-auto mt-20 w-full max-w-7xl px-6 sm:px-10">
          <div className="space-y-16">
            {/* Avance de obra */}
            {isActivo && typeof proyecto.avance === 'number' && (
              <section>
                <h2 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-primary-green">
                  <Hammer size={14} />
                  Avance de obra
                </h2>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-sans text-sm text-premium-muted">
                    Ejecución de infraestructura
                  </span>
                  <span className="font-heading text-xl font-bold text-tech-white">
                    {proyecto.avance}%
                  </span>
                </div>
                <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-premium-gray">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${proyecto.avance}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-primary-green"
                  />
                </div>
              </section>
            )}

            {/* Servicios / Amenities */}
            {proyecto.servicios?.length > 0 && (
              <section>
                <h2 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-primary-green">
                  <Layers size={14} />
                  Servicios e infraestructura
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {proyecto.servicios.map((servicio) => {
                    const Icon = getServicioIcon(servicio);
                    return (
                      <div
                        key={servicio}
                        className="flex items-center gap-4 rounded-xl border border-premium-line bg-premium-gray p-5 transition-colors hover:border-primary-green/40"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary-green/40 bg-premium-dark text-primary-green">
                          <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <span className="font-sans text-sm font-light text-tech-white">
                          {servicio}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Sectores / Barrios */}
            {proyecto.sectores?.length > 0 && (
              <section>
                <h2 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-primary-green">
                  <Layers size={14} />
                  Barrios dentro de {proyecto.nombre}
                </h2>
                <div className="mt-6 space-y-4">
                  {proyecto.sectores.map((sector) => (
                    <article
                      key={sector.nombre}
                      className="rounded-2xl border border-premium-line bg-premium-gray p-6"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-heading text-lg font-bold text-tech-white">
                          {sector.nombre}
                        </h3>
                        {sector.estado && (
                          <span className="rounded-full bg-primary-green/15 px-3 py-1 font-sans text-[0.68rem] font-semibold uppercase tracking-wider text-primary-green">
                            {sector.estado}
                          </span>
                        )}
                      </div>
                      {sector.descripcion && (
                        <p className="mt-3 font-sans text-sm leading-relaxed text-premium-muted">
                          {sector.descripcion}
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Hitos por etapas */}
            {proyecto.hitosEtapas?.length > 0 && (
              <section>
                <h2 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-primary-green">
                  <Milestone size={14} />
                  Etapas del desarrollo
                </h2>
                <div className="mt-6 space-y-6">
                  {proyecto.hitosEtapas.map((hito) => (
                    <article
                      key={hito.titulo}
                      className="overflow-hidden rounded-2xl border border-premium-line bg-premium-gray"
                    >
                      {hito.fotoEtapa && (
                        <div className="relative h-48 w-full overflow-hidden sm:h-56">
                          <img
                            src={hito.fotoEtapa || '/placeholder.svg'}
                            alt={`${hito.titulo} — ${proyecto.nombre}`}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-premium-gray/90 to-transparent" />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-heading text-lg font-bold text-tech-white">
                            {hito.titulo}
                          </h3>
                          <span className="rounded-full bg-primary-green/15 px-3 py-1 font-sans text-[0.68rem] font-semibold uppercase tracking-wider text-primary-green">
                            {hito.estado}
                          </span>
                        </div>
                        <p className="mt-3 font-sans text-sm leading-relaxed text-premium-muted">
                          {hito.detalle}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Beneficio Club */}
            {proyecto.beneficioClub && (
              <section className="rounded-2xl border border-primary-green/30 bg-primary-green/5 p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  {proyecto.beneficioClub.logo && (
                    <div className="flex shrink-0 items-center justify-center rounded-2xl border border-premium-line bg-tech-white p-4 sm:p-5">
                      <img
                        src={proyecto.beneficioClub.logo || '/placeholder.svg'}
                        alt={`Logo de ${proyecto.beneficioClub.titulo}`}
                        className="h-24 w-auto object-contain sm:h-28"
                      />
                    </div>
                  )}
                  <div>
                    {proyecto.beneficioClub.aliado && (
                      <span className="inline-block rounded-full border border-primary-green/40 bg-primary-green/10 px-3 py-1 font-sans text-[0.68rem] font-semibold uppercase tracking-wider text-primary-green">
                        Aliado institucional
                      </span>
                    )}
                    <h2 className="mt-3 flex items-center gap-2 font-heading text-lg font-bold text-tech-white">
                      <Gift size={20} className="text-primary-green" />
                      {proyecto.beneficioClub.titulo}
                    </h2>
                    <p className="mt-4 font-sans text-sm leading-relaxed text-premium-muted">
                      {proyecto.beneficioClub.descripcion}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Galería */}
            {proyecto.fotos?.length > 0 && (
              <section>
                <h2 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-primary-green">
                  <Images size={14} />
                  Galería del proyecto
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {proyecto.fotos.map((foto, i) => (
                    <button
                      key={foto}
                      type="button"
                      onClick={() => setLightboxIndex(i)}
                      aria-label={`Ampliar foto ${i + 1} de ${proyecto.nombre}`}
                      className={`group relative cursor-pointer overflow-hidden rounded-xl border border-premium-line focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green ${
                        i === 0 ? 'col-span-2 row-span-2 sm:col-span-2' : ''
                      }`}
                    >
                      <img
                        src={foto || '/placeholder.svg'}
                        alt={`${proyecto.nombre} — render ${i + 1}`}
                        className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                          i === 0 ? 'h-full min-h-[16rem]' : 'h-36 sm:h-40'
                        }`}
                      />
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-premium-black/0 opacity-0 transition-all duration-300 group-hover:bg-premium-black/30 group-hover:opacity-100">
                        <Images size={22} className="text-tech-white" />
                      </span>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* Mensaje para barrios consolidados */}
            {!isActivo && (
              <section className="rounded-2xl border border-premium-line bg-premium-gray p-8">
                <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-tech-white">
                  <ShieldCheck size={20} className="text-primary-green" />
                  Legado consolidado
                </h2>
                <p className="mt-4 font-sans text-sm leading-relaxed text-premium-muted">
                  {proyecto.nombre} forma parte del legado de Fantín Desarrollos: un
                  barrio íntegramente vendido y plenamente habitado, hoy una comunidad
                  madura de referencia en {proyecto.ubicacion}.
                </p>
              </section>
            )}
          </div>
        </div>

        {/* VIDEO — recorrido del desarrollo */}
        <section className="mx-auto mt-24 w-full max-w-7xl px-6 sm:px-10">
          <h2 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-primary-green">
            <Images size={14} />
            Video del desarrollo
          </h2>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-premium-line shadow-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/M7qkA5KcsYI?start=23"
              title={`Video de ${proyecto.nombre}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        {/* UBICACIÓN — layout integrado a 2 columnas */}
        <section className="mx-auto mt-24 w-full max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Columna izquierda: título + entorno */}
            <div>
              <h2 className="font-heading text-3xl font-black tracking-tight text-balance text-tech-white sm:text-4xl">
                Ubicación privilegiada
              </h2>
              <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-premium-muted">
                {proyecto.ubicacionDescripcion ||
                  `${proyecto.nombre} se emplaza en ${proyecto.ubicacion}, combinando la tranquilidad del entorno natural con un acceso ágil a los principales corredores de la región.`}
              </p>

              {proyecto.distancias?.length > 0 && (
                <ul className="mt-8 space-y-4">
                  {proyecto.distancias.map((d) => (
                    <li key={d.lugar} className="flex items-center justify-between gap-6 border-b border-premium-line pb-4">
                      <span className="font-sans text-sm text-tech-white">{d.lugar}</span>
                      <span className="font-heading text-sm font-bold text-primary-green">
                        {d.valor}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-premium-line bg-premium-gray px-4 py-2 font-sans text-sm font-medium text-tech-white">
                <MapPin size={15} className="text-primary-green" />
                {proyecto.ubicacion}
              </div>
            </div>

            {/* Columna derecha: mapa fusionado */}
            <div className="overflow-hidden rounded-2xl border border-premium-line shadow-lg">
              {proyecto.coords ? (
                <iframe
                  title={`Mapa de ${proyecto.nombre}`}
                  src={`https://maps.google.com/maps?q=${proyecto.coords.lat},${proyecto.coords.lng}&z=14&output=embed`}
                  className="h-[20rem] w-full border-0 grayscale-[0.2] sm:h-[24rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="relative flex h-[20rem] w-full items-center justify-center bg-premium-gray sm:h-[24rem]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.35]"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-premium-line bg-premium-dark text-primary-green">
                      <MapPin size={24} strokeWidth={1.5} />
                    </div>
                    <p className="mt-4 font-sans text-sm text-premium-muted">
                      Mapa de {proyecto.ubicacion}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FLOATING WHATSAPP CTA (mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-premium-line bg-premium-black/90 px-6 py-3.5 backdrop-blur-lg lg:hidden">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
          <p className="hidden font-sans text-sm font-medium text-tech-white sm:block">
            {proyecto.nombre} — {proyecto.ubicacion}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-primary-green px-6 py-3 font-sans text-sm font-semibold text-premium-black transition-colors hover:bg-sage sm:w-auto"
          >
            <MessageCircle size={18} />
            Quiero información
          </a>
        </div>
      </div>

      {/* LIGHTBOX / GALERÍA */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-premium-black/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`Galería de ${proyecto.nombre}`}
            onClick={closeLightbox}
          >
            {/* Cerrar */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Cerrar galería"
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-premium-line bg-premium-gray/60 text-tech-white transition-colors hover:border-primary-green hover:text-primary-green"
            >
              <X size={22} />
            </button>

            {/* Anterior */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Foto anterior"
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-premium-line bg-premium-gray/60 text-tech-white transition-colors hover:border-primary-green hover:text-primary-green sm:left-8"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Imagen */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={galeria[lightboxIndex] || '/placeholder.svg'}
              alt={`${proyecto.nombre} — imagen ${lightboxIndex + 1} de ${galeria.length}`}
              className="max-h-[82vh] max-w-[88vw] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Siguiente */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Foto siguiente"
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-premium-line bg-premium-gray/60 text-tech-white transition-colors hover:border-primary-green hover:text-primary-green sm:right-8"
            >
              <ChevronRight size={26} />
            </button>

            {/* Contador */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-premium-gray/70 px-4 py-1.5 font-sans text-sm text-tech-white">
              {lightboxIndex + 1} / {galeria.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: desarrollos.map((d) => ({ params: { id: d.id } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const proyecto = desarrollos.find((d) => d.id === params.id) || null;
  if (!proyecto) {
    return { notFound: true };
  }
  return { props: { proyecto } };
}
