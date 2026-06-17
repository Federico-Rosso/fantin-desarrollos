import React from 'react';
import Link from 'next/link';
import { Globe, Mail, Phone } from 'lucide-react';

const socials = [
  { label: 'Sitio web', href: '#', Icon: Globe },
  { label: 'Email', href: 'mailto:contacto@fantindesarrollos.com', Icon: Mail },
  { label: 'Teléfono', href: 'tel:+540000000000', Icon: Phone },
];

const navLinks = [
  { label: 'Proyectos', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Footer() {
  return (
    <footer className="border-t border-premium-line bg-premium-dark">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Fantín Desarrollos"
                className="h-10 w-10 object-contain"
              />
              <span className="font-heading text-sm font-extrabold uppercase tracking-[0.25em] text-tech-white">
                Fantín <span className="text-primary-green">Desarrollos</span>
              </span>
            </div>
            <p className="mt-5 font-sans text-sm leading-relaxed text-premium-muted">
              Naturaleza y arquitectura en equilibrio. 27 años entregando lo que
              prometemos.
            </p>
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
          &copy; 2026 Fantín Desarrollos. Naturaleza y arquitectura en
          equilibrio.
        </p>
      </div>
    </footer>
  );
}
