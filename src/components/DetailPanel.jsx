import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Wrench, CheckCircle2 } from 'lucide-react';

export default function DetailPanel({ proyecto, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (proyecto) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [proyecto, onClose]);

  const isActivo = proyecto?.lifecycle === 'activo';

  return (
    <AnimatePresence>
      {proyecto && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-premium-black/70 backdrop-blur-sm"
          />

          {/* Sheet */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full max-w-md overflow-y-auto bg-tech-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={`Ficha técnica de ${proyecto.nombre}`}
          >
            {/* Header image */}
            <div className="relative h-56 w-full">
              <img
                src={proyecto.imagen || '/placeholder.svg'}
                alt={`Desarrollo ${proyecto.nombre}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 to-transparent" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar ficha"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-premium-black/50 text-tech-white transition-colors hover:bg-premium-black/80"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-5 right-5">
                <span
                  className={`inline-block rounded-full px-3 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-wider ${
                    isActivo
                      ? 'bg-primary-green text-tech-white'
                      : 'border border-tech-white/60 text-tech-white'
                  }`}
                >
                  {proyecto.badge}
                </span>
                <h3 className="mt-2 font-heading text-3xl font-bold text-tech-white">
                  {proyecto.nombre}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-7 p-6 sm:p-8">
              <p className="font-sans text-sm leading-relaxed text-charcoal">
                {proyecto.descripcion}
              </p>

              {/* Ubicación */}
              <div>
                <h4 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-dark-green">
                  <MapPin size={16} className="text-deep-green" />
                  Ubicación Estratégica
                </h4>
                <p className="mt-2 font-sans text-sm text-charcoal">{proyecto.ubicacion}</p>
              </div>

              {/* Servicios */}
              {proyecto.servicios?.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-dark-green">
                    <Wrench size={16} className="text-deep-green" />
                    Servicios Disponibles
                  </h4>
                  <ul className="mt-3 grid grid-cols-2 gap-2">
                    {proyecto.servicios.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-2 rounded-lg bg-sage px-3 py-2 font-sans text-xs font-medium text-dark-green"
                      >
                        <CheckCircle2 size={14} className="shrink-0 text-primary-green" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Avance de obra */}
              {typeof proyecto.avance === 'number' && (
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-dark-green">
                      Avance de Obra
                    </h4>
                    <span className="font-heading text-sm font-bold text-deep-green">
                      {proyecto.avance}%
                    </span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-sage">
                    <div
                      className="h-full rounded-full bg-primary-green transition-all duration-700"
                      style={{ width: `${proyecto.avance}%` }}
                    />
                  </div>
                </div>
              )}

              {/* CTA */}
              {isActivo ? (
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-2 flex flex-col gap-3 rounded-xl border border-sage bg-sage/40 p-5"
                >
                  <h4 className="font-heading text-base font-bold text-dark-green">
                    Consultar Disponibilidad de Lotes
                  </h4>
                  <input
                    type="text"
                    required
                    placeholder="Nombre y apellido"
                    className="w-full rounded-lg border border-deep-green/20 bg-tech-white px-4 py-2.5 font-sans text-sm text-charcoal outline-none transition-colors focus:border-primary-green"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full rounded-lg border border-deep-green/20 bg-tech-white px-4 py-2.5 font-sans text-sm text-charcoal outline-none transition-colors focus:border-primary-green"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full rounded-lg border border-deep-green/20 bg-tech-white px-4 py-2.5 font-sans text-sm text-charcoal outline-none transition-colors focus:border-primary-green"
                  />
                  <button
                    type="submit"
                    className="mt-1 w-full rounded-lg bg-primary-green px-5 py-3 font-sans text-sm font-semibold text-tech-white transition-colors hover:bg-deep-green"
                  >
                    Enviar consulta
                  </button>
                </form>
              ) : (
                <div className="mt-2 rounded-xl border border-sage bg-sage/40 p-5 text-center">
                  <p className="font-sans text-sm text-charcoal">
                    Este barrio forma parte del legado consolidado de Fantín Desarrollos,
                    100% vendido y plenamente habitado.
                  </p>
                </div>
              )}
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
