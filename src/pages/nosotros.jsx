import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import NosotrosHero from '../components/nosotros/NosotrosHero';
import LegacyTimeline from '../components/nosotros/LegacyTimeline';
import PhotoGallery from '../components/nosotros/PhotoGallery';
import OperationalCapacity from '../components/nosotros/OperationalCapacity';
import Footer from '../components/Footer';

const solaresImages = [
  {
    src: '/images/solares_carcarana_1.webp',
    alt: 'Vista aérea de Solares del Carcarañá con lotes arbolados y calles internas',
    caption: 'Solares del Carcarañá',
  },
  {
    src: '/images/solares_carcarana_2.webp',
    alt: 'Vista aérea de Solares del Carcarañá junto al río y espacios verdes',
    caption: 'Solares del Carcarañá',
  },
  {
    src: '/images/solares_carcarana_3.webp',
    alt: 'Vista aérea de Solares del Carcarañá con residencias frente al río',
    caption: 'Solares del Carcarañá',
  },
];

const finishedProjects = [
  {
    src: '/images/bucare.webp',
    alt: 'Vista aérea del Delta del Bucaré al atardecer junto al río',
    caption: 'Delta del Bucaré',
  },
  {
    src: '/images/rincon.webp',
    alt: 'Vista aérea de Chacras del Rincón con lagunas y montes nativos',
    caption: 'Chacras del Rincón',
  },
  {
    src: '/images/solares_sur.webp',
    alt: 'Vista aérea de Solares Sur con residencias y corredor de biodiversidad',
    caption: 'Solares Sur',
  },
];

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
        <PhotoGallery
          eyebrow="Nuestro primer hito"
          title="Solares del Carcarañá"
          description="El proyecto que marcó un antes y un después, respetando la topografía natural y los espacios verdes vírgenes frente al río."
          images={solaresImages}
          variant="light"
        />
        <OperationalCapacity />
        <PhotoGallery
          eyebrow="Trayectoria"
          title="Proyectos terminados"
          description="Urbanizaciones que materializan nuestra visión de preservación ambiental y desarrollo con solidez."
          images={finishedProjects}
          variant="dark"
        />
      </main>
      <Footer />
    </>
  );
}
