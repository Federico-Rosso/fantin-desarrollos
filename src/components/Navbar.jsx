import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Empresa', href: '#empresa' },
  { label: 'Desarrollos', href: '#desarrollos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'border-b border-sage/20 bg-dark-green/70 backdrop-blur-xl shadow-lg shadow-dark-green/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#inicio"
          className="flex items-center gap-3 transition-all duration-300 ease-in-out hover:scale-105"
        >
          <img
            src="/images/logo-header.png"
            alt="Fantín Desarrollos"
            className="h-10 w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-sans text-sm font-medium text-sage/90 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-primary-green"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-primary-green px-5 py-2.5 font-sans text-sm font-semibold text-dark-green shadow-lg shadow-primary-green/30 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-sage hover:shadow-2xl"
          >
            Consultar
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-tech-white transition-all duration-300 ease-in-out hover:bg-sage/10 md:hidden"
        >
          <span className="text-2xl">{open ? '\u2715' : '\u2630'}</span>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="overflow-hidden border-t border-sage/10 bg-dark-green/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-sans text-sm font-medium text-sage/90 transition-all duration-300 ease-in-out hover:bg-sage/10 hover:text-primary-green"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
