import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '27', suffix: 'Años', label: 'de trayectoria ininterrumpida' },
  { value: '+2500', suffix: 'Clientes', label: 'contentos' },
  { value: '+12', suffix: 'Desarrollos', label: 'terminados' },
  { value: '+3200', suffix: 'Lotes', label: 'en desarrollo' },
];

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const wrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

// Separa un valor como "+3200" en prefijo ("+") y número (3200).
function parseValue(value) {
  const match = String(value).match(/^(\D*)(\d+)(.*)$/);
  if (!match) return { prefix: '', number: 0, suffix: '' };
  return { prefix: match[1], number: Number(match[2]), suffix: match[3] };
}

function AnimatedNumber({ value }) {
  const { prefix, number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);

  const run = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo para un conteo con desaceleración marcada
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(Math.round(eased * number));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    setDisplay(0);
    rafRef.current = requestAnimationFrame(tick);
  }, [number]);

  return (
    <motion.span
      className="cursor-default font-heading text-5xl font-black tracking-tight text-tech-white sm:text-6xl"
      onViewportEnter={run}
      onMouseEnter={run}
      onFocus={run}
      viewport={{ once: true, amount: 0.6 }}
      tabIndex={0}
      role="text"
      aria-label={`${prefix}${number}${suffix}`}
    >
      {prefix}
      {display.toLocaleString('es-AR')}
      {suffix}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section id="nosotros" className="relative bg-dark-green py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-heading text-4xl font-black leading-tight tracking-tight text-balance text-tech-white sm:text-5xl">
            Naturaleza y arquitectura en equilibrio
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-premium-muted">
            Casi tres décadas construyendo confianza. Cada proyecto refleja
            nuestra obsesión por el detalle, el respeto por el entorno y el
            cumplimiento de lo que prometemos.
          </p>
        </div>

        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-tech-white/15 bg-tech-white/10 backdrop-blur-xl lg:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.suffix}
              variants={item}
              className="flex flex-col bg-tech-white/5 p-8 transition-colors duration-300 hover:bg-tech-white/10"
            >
              <AnimatedNumber value={s.value} />
              <span className="mt-2 font-heading text-base font-bold uppercase tracking-wide text-primary-green">
                {s.suffix}
              </span>
              <span className="mt-3 font-sans text-sm leading-relaxed text-premium-muted">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
