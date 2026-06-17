import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { label: 'Proyectos', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/nosotros') return router.pathname === '/nosotros';
    if (href === '/') return router.pathname === '/';
    return false;
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'border-b border-premium-line/80 bg-premium-black/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 transition-all duration-300 ease-in-out hover:opacity-80"
        >
          <img
            src="/images/logo.png"
            alt="Fantín Desarrollos"
            className="h-9 w-9 object-contain"
          />
          <span className="font-heading text-sm font-extrabold uppercase tracking-[0.25em] text-tech-white">
            Fantín <span className="text-primary-green">Desarrollos</span>
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`group relative font-sans text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive(link.href)
                  ? 'text-primary-green'
                  : 'text-premium-muted hover:text-tech-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-primary-green transition-all duration-300 ease-in-out ${
                  isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <Link
            href="/#contacto"
            className="rounded-full bg-primary-green px-6 py-2.5 font-sans text-sm font-semibold text-premium-black transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-sage"
          >
            Consultar
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-tech-white transition-all duration-300 ease-in-out hover:bg-premium-gray md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="overflow-hidden border-t border-premium-line bg-premium-black/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 font-sans text-sm font-medium transition-all duration-300 ease-in-out hover:bg-premium-gray ${
                  isActive(link.href)
                    ? 'text-primary-green'
                    : 'text-premium-muted hover:text-primary-green'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary-green px-5 py-3 text-center font-sans text-sm font-semibold text-premium-black"
            >
              Consultar
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
