import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  ArrowLeft,
  Layers,
  ShieldCheck,
  MessageCircle,
  Images,
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
  Anchor,
  Bike,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EtapasDesarrollo from '../../components/EtapasDesarrollo';

import { desarrollos } from '../../data/desarrollos';

// Número de WhatsApp comercial (reemplazar por el real)
const WHATSAPP = '5490000000000';

// Mapea cada servicio a un ícono outline (estética Fantín, verde) según
// palabras clave, adaptándose dinámicamente a los servicios de cada desarrollo.
function getServicioIcon(servicio = '') {
  const s = servicio.toLowerCase();
  if (s.includes('agua')) return Droplets;
  if (s.includes('cloaca') || s.includes('desagüe') || s.includes('desague')) return Droplets;
  if (s.includes('gas')) return Flame;
  if (s.includes('electric') || s.includes('eléctric') || s.includes('energía') || s.includes('energia'))
    return Zap;
  if (s.includes('alumbrado') || s.includes('iluminaci') || s.includes('luz')) return Lightbulb;
  if (s.includes('amarra') || s.includes('náutic') || s.includes('nautic') || s.includes('lancha'))
    return Anchor;
  if (s.includes('skate') || s.includes('bici')) return Bike;
  if (s.includes('wifi') || s.includes('internet') || s.includes('fibra') || s.includes('red'))
    return Wifi;
  if (s.includes('alambr') || s.includes('cerc') || s.includes('perimetr')) return Fence;
  if (s.includes('cordón') || s.includes('cordon') || s.includes('cuneta')) return Construction;
  if (
    s.includes('calle') ||
    s.includes('paviment') ||
    s.includes('asfalt') ||
    s.includes('acceso') ||
    s.includes('ingreso') ||
    s.includes('bv ') ||
    s.includes('bulevar')
  )
    return Route;
  if (s.includes('control') || s.includes('segur')) return ShieldCheck;
  if (s.includes('juego')) return Baby;
  if (
    s.includes('forest') ||
    s.includes('verde') ||
    s.includes('arbol') ||
    s.includes('árbol') ||
    s.includes('bosque') ||
    s.includes('nativo') ||
    s.includes('vegetaci') ||
    s.includes('autócton') ||
    s.includes('autocton')
  )
    return Trees;
  if (
    s.includes('laguna') ||
    s.includes('lago') ||
    s.includes('río') ||
    s.includes('rio') ||
    s.includes('costa')
  )
    return Waves;
  if (
    s.includes('recreat') ||
    s.includes('anfiteatro') ||
    s.includes('común') ||
    s.includes('comun') ||
    s.includes('club')
  )
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
        <main className="flex min-h-screen items-center justify-center bg-dark-green px-6 text-center">
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
        <Footer bgClass="bg-dark-green" />
      </>
    );
  }

  const isActivo = proyecto.lifecycle === 'activo';
  const waText = encodeURIComponent(
    `Hola! Quiero más información sobre ${proyecto.nombre} (${proyecto.ubicacion}).`,
  );

  // Ficha técnica unificada: todos los desarrollos muestran
  // Localidad | Etapa comercial | Dimensiones
  const dimensionesValue =
    proyecto.dimensiones ??
    proyecto.fichaTecnica?.find((f) => f.label === 'Dimensiones')?.value ??
    'Consultar dimensiones';
  const etapaComercialValue =
    proyecto.etapaComercial ??
    proyecto.fichaTecnica?.find((f) => f.label === 'Etapa comercial')?.value ??
    proyecto.badge ??
    (isActivo ? 'En comercialización' : 'Barrio consolidado');

  const stats = [
    { label: 'Localidad', value: proyecto.ubicacion, accent: false },
    { label: 'Etapa comercial', value: etapaComercialValue, accent: false },
    { label: 'Dimensiones', value: dimensionesValue, accent: true },
  ];

  return (
    <>
      <Head>
        <title>{`${proyecto.nombre} | Fantín Desarrollos`}</title>
        <meta name="description" content={proyecto.descripcion} />
        <meta name="theme-color" content="#0E0E0E" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="bg-dark-green pb-28 font-sans text-tech-white">
        {/* HERO — minimalista: solo el logo dinámico centrado sobre la imagen */}
        <section className="relative flex h-[80vh] min-h-[520px] w-full items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={proyecto.imagen || '/placeholder.svg'}
              alt={`Desarrollo ${proyecto.nombre} en ${proyecto.ubicacion}`}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className={`h-full w-full object-cover ${
                isActivo ? 'brightness-[0.5]' : 'brightness-[0.45] grayscale-[0.4]'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-green via-dark-green/30 to-dark-green/30" />
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
          <div
            className={`mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:px-10 ${
              stats.length >= 4 ? 'lg:grid-cols-4' : 'sm:grid-cols-3'
            }`}
          >
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
                loading="lazy"
                decoding="async"
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
            <EtapasDesarrollo etapas={proyecto.hitosEtapas} nombre={proyecto.nombre} />

            {/* Beneficio Club */}
            {proyecto.beneficioClub && (
              <section className="rounded-2xl border border-primary-green/30 bg-primary-green/5 p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  {proyecto.beneficioClub.logo && (
                    <div className="flex shrink-0 items-center justify-center rounded-2xl border border-premium-line bg-tech-white p-4 sm:p-5">
                      <img
                        src={proyecto.beneficioClub.logo || '/placeholder.svg'}
                        alt={`Logo de ${proyecto.beneficioClub.titulo}`}
                        loading="lazy"
                        decoding="async"
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
                {(() => {
                  const previewCount = Math.min(proyecto.fotos.length, 9);
                  const restantes = proyecto.fotos.length - previewCount;
                  const renderFoto = (i, extraClass, imgHeightClass, showRestantes) => (
                    <button
                      key={proyecto.fotos[i]}
                      type="button"
                      onClick={() =>
                        setLightboxIndex(showRestantes && restantes > 0 ? previewCount - 1 : i)
                      }
                      aria-label={
                        showRestantes && restantes > 0
                          ? `Ver las ${proyecto.fotos.length} fotos de ${proyecto.nombre}`
                          : `Ampliar foto ${i + 1} de ${proyecto.nombre}`
                      }
                      className={`group relative cursor-pointer overflow-hidden rounded-xl border border-premium-line focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green ${extraClass}`}
                    >
                      <img
                        src={proyecto.fotos[i] || '/placeholder.svg'}
                        alt={`${proyecto.nombre} — foto ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imgHeightClass}`}
                      />
                      {showRestantes && restantes > 0 ? (
                        <span className="absolute inset-0 flex flex-col items-center justify-center bg-premium-black/60 text-tech-white transition-colors duration-300 group-hover:bg-premium-black/70">
                          <span className="font-heading text-2xl font-bold">+{restantes}</span>
                          <span className="mt-1 font-sans text-xs uppercase tracking-widest">
                            Ver galería
                          </span>
                        </span>
                      ) : (
                        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-premium-black/0 opacity-0 transition-all duration-300 group-hover:bg-premium-black/30 group-hover:opacity-100">
                          <Images size={22} className="text-tech-white" />
                        </span>
                      )}
                    </button>
                  );

                  return (
                    <div className="mt-6 space-y-4">
                      {/* Fila principal: 1 grande + 2 rectangulares apiladas */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {proyecto.fotos[0] &&
                          renderFoto(0, 'sm:col-span-2 sm:row-span-2', 'min-h-[16rem] sm:min-h-[22rem]')}
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                          {proyecto.fotos[1] && renderFoto(1, '', 'h-40 sm:h-[10.5rem]')}
                          {proyecto.fotos[2] && renderFoto(2, '', 'h-40 sm:h-[10.5rem]')}
                        </div>
                      </div>
                      {/* Dos líneas de 3 fotos comunes */}
                      <div className="grid grid-cols-3 gap-4">
                        {[3, 4, 5, 6, 7, 8]
                          .filter((i) => i < previewCount)
                          .map((i) =>
                            renderFoto(i, '', 'h-28 sm:h-40', i === previewCount - 1),
                          )}
                      </div>
                    </div>
                  );
                })()}
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
        {proyecto.videoId && (
          <section className="mx-auto mt-24 w-full max-w-7xl px-6 sm:px-10">
            <h2 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-primary-green">
              <Images size={14} />
              Video del desarrollo
            </h2>
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-premium-line shadow-lg">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${proyecto.videoId}`}
                title={`Video de ${proyecto.nombre}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        )}

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
              {proyecto.coords || proyecto.mapQuery ? (
                <iframe
                  title={`Mapa de ${proyecto.nombre}`}
                  src={
                    proyecto.coords
                      ? `https://maps.google.com/maps?q=${proyecto.coords.lat},${proyecto.coords.lng}&z=14&output=embed`
                      : `https://maps.google.com/maps?q=${encodeURIComponent(proyecto.mapQuery)}&z=14&output=embed`
                  }
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
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-premium-line bg-dark-green/90 px-6 py-3.5 backdrop-blur-lg lg:hidden">
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

      <Footer bgClass="bg-dark-green" />
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
