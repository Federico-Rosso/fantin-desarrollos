import React from 'react';
import { Inter, Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import '../styles/globals.css';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${montserrat.variable} font-sans`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
