import { useEffect, useState } from 'react';

const PROMO_IMAGE =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FD%20-%20POPUP%20100%20cuotas-mz6JgzLpJ7kGBlk5ijxmHf2WuxXSDk.png';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/65 p-4 sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <section
        aria-label="Promoción: 100 cuotas"
        aria-modal="true"
        className="relative w-full max-w-[600px] animate-slide-up overflow-hidden rounded-[2px] shadow-2xl"
        role="dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <img
          src={PROMO_IMAGE}
          alt="Viví en Ibarlucea: tu lote en 100 cuotas"
          className="block h-auto w-full"
        />
        <button
          type="button"
          aria-label="Cerrar promoción"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-2xl leading-none text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20"
          onClick={() => setIsOpen(false)}
        >
          <span aria-hidden="true">×</span>
        </button>
      </section>
    </div>
  );
}

PromoPopup.PROMO_IMAGE = PROMO_IMAGE;
