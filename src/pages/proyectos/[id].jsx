import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  MapPin,
  ArrowLeft,
  CheckCircle2,
  Layers,
  Hammer,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { desarrollos } from '../../data/desarrollos';

// Número de WhatsApp comercial (reemplazar por el real)
const WHATSAPP = '5490000000000';

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
        {/* HERO */}
        <section className="relative flex h-[80vh] min-h-[520px] w-full items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={proyecto.imagen || '/placeholder.svg'}
              alt={`Desarrollo ${proyecto.nombre} en ${proyecto.ubicacion}`}
              className={`h-full w-full object-cover ${
                isActivo ? 'brightness-[0.45]' : 'brightness-[0.4] grayscale-[0.4]'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/40 to-premium-black/20" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10">
            <Link
              href="/#proyectos"
              className="mb-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-premium-muted transition-colors hover:text-tech-white"
            >
              <ArrowLeft size={16} />
              Volver a desarrollos
            </Link>

            <div className="flex flex-wrap gap-3">
              <span
                className={`rounded-full px-3 py-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-widest ${
                  isActivo
                    ? 'bg-primary-green text-tech-white'
                    : 'border border-tech-white/40 text-tech-white/90 backdrop-blur-sm'
                }`}
              >
                {proyecto.badge}
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-tech-white/15 bg-tech-white/10 px-3 py-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-widest backdrop-blur-md">
                <MapPin size={12} />
                {proyecto.ubicacion}
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-heading text-4xl font-black tracking-tight text-balance text-tech-white sm:text-6xl"
            >
              {proyecto.nombre}
            </motion.h1>

            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-premium-muted sm:text-lg">
              {proyecto.descripcion}
            </p>
          </div>
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
                      className="flex items-center gap-4 rounded-xl border border-premium-line bg-premium-gray p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-premium-dark text-primary-green">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="font-sans text-sm font-light text-tech-white">
                        {servicio}
                      </span>
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
