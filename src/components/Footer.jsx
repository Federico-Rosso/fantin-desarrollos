import React from 'react';
import { motion } from 'framer-motion';

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socials = [
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
  { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
  { name: 'YouTube', icon: YoutubeIcon, href: 'https://youtube.com' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-green text-sage">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-14 md:flex-row md:items-center md:justify-between">
        {/* Left: logo */}
        <div className="flex items-center">
          <img
            src="/images/logo-footer.png"
            alt="Fantín Desarrollos"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Center: social icons */}
        <nav aria-label="Redes sociales" className="flex items-center gap-5">
          {socials.map(({ name, icon: Icon, href }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              whileHover={{ scale: 1.18, y: -4 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 400, damping: 12 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sage/20 bg-sage/5 text-sage transition-colors duration-300 hover:border-primary-green hover:bg-primary-green hover:text-dark-green"
            >
              <Icon width={20} height={20} aria-hidden="true" />
            </motion.a>
          ))}
        </nav>
      </div>

      {/* Bottom: rights */}
      <div className="border-t border-sage/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center text-sm leading-relaxed text-sage/70">
          Todos los derechos reservados Fantín Desarrollos &copy;. Marketing digital Go Digital Rosario.
        </p>
      </div>
    </footer>
  );
}
