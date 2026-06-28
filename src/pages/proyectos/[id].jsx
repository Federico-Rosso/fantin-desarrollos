import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
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
  Tag,
  Map as MapIcon,
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { desarrollos } from '../../data/desarrollos';

// Número de WhatsApp comercial (reemplazar por el real)
const WHATSAPP = '5490000000000';

// Mapea cada servicio a un emoji específico según palabras clave,
// adaptándose dinámicamente a los servicios de cada desarrollo.
function getServicioEmoji(servicio = '') {
  const s = servicio.toLowerCase();
  if (s.includes('agua')) return '💧';
  if (s.includes('cloaca')) return '🚰';
  if (s.includes('gas')) return '🔥';
  if (s.includes('wifi') || s.includes('red') || s.includes('fibra')) return '📶';
  if (s.includes('alumbrado') || s.includes('luz') || s.includes('electric')) return '💡';
  if (s.includes('cordón') || s.includes('cordon') || s.includes('cuneta')) return '🧱';
  if (s.includes('calle') || s.includes('paviment') || s.includes('asfalt')) return '🛣️';
  if (s.includes('juego')) return '🛝';
  if (s.includes('laguna') || s.includes('lago')) return '🏞️';
  if (s.includes('forest') || s.includes('verde') || s.includes('arbol') || s.includes('árbol'))
    return '🌳';
  if (s.includes('segur') || s.includes('perimetr')) return '🛡️';
  if (s.includes('recreat') || s.includes('común') || s.includes('comun') || s.includes('club'))
    return '🎾';
  if (s.includes('comercial') || s.includes('local') || s.includes('gastro')) return '🛍️';
  return '✅';
}

export default function ProyectoPage({ proyecto }) {
  const router = useRouter();

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

          {/* Volver — esquina superior izquierda */}
          <div className="absolute inset-x-0 top-0 z-20">
            <div className="mx-auto w-full max-w-7xl px-6 pt-8 sm:px-10">
              <Link
                href="/#proyectos"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-tech-white/80 transition-colors hover:text-tech-white"
              >
                <ArrowLeft size={16} />
                Volver a desarrollos
              </Link>
            </div>
          </div>

          {/* Logo dinámico centrado */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex items-center justify-center px-6"
          >
            <span className="sr-only">{proyecto.nombre}</span>
            {proyecto.logo ? (
              <img
                src={proyecto.logo || '/placeholder.svg'}
                alt={`Logo de ${proyecto.nombre}`}
                className="w-56 max-w-[80vw] object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
              />
            ) : (
              <h1
                aria-hidden="true"
                className="font-heading text-4xl font-black tracking-tight text-tech-white sm:text-6xl"
              >
                {proyecto.nombre}
              </h1>
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

        {/* ENCABEZADO + DESCRIPCIÓN */}
        <section className="mx-auto w-full max-w-7xl px-6 pt-20 sm:px-10">
          <h1 className="font-heading text-3xl font-black tracking-tight text-balance text-tech-white sm:text-4xl">
            {proyecto.nombre}
          </h1>
          {proyecto.tagline && (
            <p className="mt-3 font-heading text-lg font-semibold text-primary-green sm:text-xl">
              {proyecto.tagline}
            </p>
          )}
          <p className="mt-5 max-w-3xl font-sans text-base leading-relaxed text-premium-muted sm:text-lg">
            {proyecto.descripcion}
          </p>
        </section>

        {/* PLANO DEL DESARROLLO — placeholder universal */}
        <section className="mx-auto w-full max-w-7xl px-6 pt-16 sm:px-10">
          <h2 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-primary-green">
            <MapIcon size={14} />
            Plano del desarrollo
          </h2>
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
        </section>

        {/* BODY */}
        <div className="mx-auto mt-20 grid w-full max-w-7xl grid-cols-1 gap-16 px-6 sm:px-10 lg:grid-cols-[1.6fr_1fr]">
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
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {proyecto.servicios.map((servicio) => (
                    <div
                      key={servicio}
                      className="flex items-center gap-4 rounded-xl border border-premium-line bg-premium-gray p-5 transition-colors hover:border-primary-green/40"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-premium-dark text-xl leading-none">
                        <span role="img" aria-hidden="true">
                          {getServicioEmoji(servicio)}
                        </span>
                      </div>
                      <span className="font-sans text-sm font-light text-tech-white">
                        {servicio}
                      </span>
                    </div>
                  ))}
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
                <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-tech-white">
                  <Gift size={20} className="text-primary-green" />
                  {proyecto.beneficioClub.titulo}
                </h2>
                <p className="mt-4 font-sans text-sm leading-relaxed text-premium-muted">
                  {proyecto.beneficioClub.descripcion}
                </p>
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
                    <div
                      key={foto}
                      className={`relative overflow-hidden rounded-xl border border-premium-line ${
                        i === 0 ? 'col-span-2 row-span-2 sm:col-span-2' : ''
                      }`}
                    >
                      <img
                        src={foto || '/placeholder.svg'}
                        alt={`${proyecto.nombre} — render ${i + 1}`}
                        className={`w-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${
                          i === 0 ? 'h-full min-h-[16rem]' : 'h-36 sm:h-40'
                        }`}
                      />
                    </div>
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

          {/* Aside CTA */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-premium-line bg-premium-gray p-7">
              <h2 className="font-heading text-xl font-bold text-tech-white">
                {isActivo ? 'Consultá disponibilidad' : 'Conocé nuestros desarrollos activos'}
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-premium-muted">
                {isActivo
                  ? 'Coordiná una visita o pedí la ficha completa de lotes y precios actualizados.'
                  : 'Descubrí los barrios abiertos que tenemos en comercialización.'}
              </p>

              {(proyecto.precio || proyecto.lotes) && (
                <div className="mt-6 space-y-4 rounded-xl border border-premium-line bg-premium-dark p-5">
                  {proyecto.precio && (
                    <div className="flex items-start gap-3">
                      <Tag size={18} className="mt-0.5 shrink-0 text-primary-green" />
                      <div>
                        <p className="font-sans text-[0.68rem] uppercase tracking-wider text-premium-muted">
                          Precio
                        </p>
                        <p className="mt-0.5 font-sans text-sm font-medium text-tech-white">
                          {proyecto.precio}
                        </p>
                      </div>
                    </div>
                  )}
                  {proyecto.lotes && (
                    <div className="flex items-start gap-3">
                      <Layers size={18} className="mt-0.5 shrink-0 text-primary-green" />
                      <div>
                        <p className="font-sans text-[0.68rem] uppercase tracking-wider text-premium-muted">
                          Lotes
                        </p>
                        <p className="mt-0.5 font-sans text-sm font-medium text-tech-white">
                          {proyecto.lotes.total} en total · {proyecto.lotes.disponibles}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <a
                href={`https://wa.me/${WHATSAPP}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-primary-green px-6 py-3.5 font-sans text-sm font-semibold text-premium-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage"
              >
                <MessageCircle size={18} />
                Quiero información
              </a>

              <Link
                href="/#contacto"
                className="mt-3 flex w-full items-center justify-center rounded-full border border-premium-line px-6 py-3.5 font-sans text-sm font-semibold text-tech-white transition-colors hover:border-primary-green hover:text-primary-green"
              >
                Enviar consulta por formulario
              </Link>
            </div>
          </aside>
        </div>

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
