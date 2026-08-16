import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/fantindesarrollos/',
    Icon: FaInstagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/FantinDesarrollos',
    Icon: FaFacebookF,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@fantindesarrollos',
    Icon: FaYoutube,
  },
];

const navLinks = [
  { label: 'Desarrollos', href: '/#proyectos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Footer({ bgClass = 'bg-premium-black' }) {
  return (
    <footer className={bgClass}>
      <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/#inicio"
              className="inline-flex items-center transition-opacity duration-300 hover:opacity-80"
            >
              <img
                src="/images/isologotipo.png"
                alt="Fantín Desarrollos"
                loading="lazy"
                decoding="async"
                className="h-40 w-auto object-contain sm:h-48"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-premium-muted">
              Navegación
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-tech-white/90 transition-colors duration-300 hover:text-primary-green"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-premium-muted">
              Seguinos
            </span>
            <div className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-premium-line text-premium-muted transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary-green hover:text-primary-green"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider my-10" />

        <p className="text-center font-sans text-xs tracking-wide text-premium-muted">
          &copy; 2026 Fantín Desarrollos.
        </p>
      </div>
    </footer>
  );
}
