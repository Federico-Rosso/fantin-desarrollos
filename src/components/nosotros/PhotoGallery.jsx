import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function PhotoGallery({
  eyebrow,
  title,
  description,
  images,
  variant = 'light',
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const isDark = variant === 'dark';
  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [activeIndex, closeLightbox]);

  return (
    <section
      className={`py-20 sm:py-28 ${isDark ? 'bg-premium-black' : 'bg-tech-white'}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
            {eyebrow}
          </span>
          <h2
            className={`mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl ${
              isDark ? 'text-tech-white' : 'text-charcoal'
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`mt-4 font-sans text-base leading-relaxed ${
                isDark ? 'text-premium-muted' : 'text-charcoal/70'
              }`}
            >
              {description}
            </p>
          )}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, i) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 ${
                isDark
                  ? 'border-premium-line focus-visible:ring-offset-premium-black'
                  : 'border-charcoal/10 focus-visible:ring-offset-tech-white'
              }`}
              aria-label={`Ampliar imagen: ${image.alt}`}
            >
              <img
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-premium-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-4 left-4 right-4 text-left font-sans text-sm font-semibold text-tech-white opacity-0 transition group-hover:opacity-100">
                {image.caption}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-premium-black/90 p-4 backdrop-blur-sm sm:p-8"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-tech-white/30 bg-premium-black/50 text-tech-white transition hover:bg-tech-white hover:text-premium-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green sm:right-6 sm:top-6"
              aria-label="Cerrar imagen"
            >
              <X size={22} />
            </button>

            <motion.figure
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex max-h-full w-full max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage.src || '/placeholder.svg'}
                alt={activeImage.alt}
                className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />
              {activeImage.caption && (
                <figcaption className="mt-4 text-center font-sans text-sm font-medium text-tech-white/80">
                  {activeImage.caption}
                </figcaption>
              )}
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
