import React from 'react';
import { Milestone } from 'lucide-react';

/**
 * Muestra las etapas de un desarrollo como tarjetas responsivas.
 * Desktop: 3 columnas (una al lado de la otra).
 * Mobile: 1 columna (apiladas verticalmente).
 */
export default function EtapasDesarrollo({ etapas = [], nombre = '' }) {
  if (!etapas.length) return null;

  return (
    <section>
      <h2 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-primary-green">
        <Milestone size={14} />
        Etapas del desarrollo
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {etapas.map((etapa) => (
          <article
            key={etapa.titulo}
            className="flex flex-col overflow-hidden rounded-2xl border border-premium-line bg-premium-gray transition-colors hover:border-primary-green/40"
          >
            {etapa.fotoEtapa && (
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={etapa.fotoEtapa || '/placeholder.svg'}
                  alt={`${etapa.titulo} — ${nombre}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-premium-gray/90 to-transparent" />
              </div>
            )}

            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-heading text-lg font-bold text-tech-white">{etapa.titulo}</h3>
                {etapa.estado && (
                  <span className="rounded-full bg-primary-green/15 px-3 py-1 font-sans text-[0.68rem] font-semibold uppercase tracking-wider text-primary-green">
                    {etapa.estado}
                  </span>
                )}
              </div>
              {etapa.detalle && (
                <p className="mt-3 font-sans text-sm leading-relaxed text-premium-muted">
                  {etapa.detalle}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
