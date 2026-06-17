import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import NosotrosHero from '../components/nosotros/NosotrosHero';
import LegacyTimeline from '../components/nosotros/LegacyTimeline';
import OperationalCapacity from '../components/nosotros/OperationalCapacity';
import Footer from '../components/Footer';

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Nosotros | Fantín Desarrollos</title>
        <meta
          name="description"
          content="27 años de trayectoria preservando el entorno natural y construyendo con solidez corporativa. Conocé la historia y la capacidad operativa de Fantín Desarrollos."
        />
        <meta name="theme-color" content="#1E3310" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <NosotrosHero />
        <LegacyTimeline />
        <OperationalCapacity />
      </main>
      <Footer />
    </>
  );
}
