import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fantín Desarrollos | 27 años entregando lo que prometemos</title>
        <meta
          name="description"
          content="Loteos, barrios y desarrollos urbanos donde la naturaleza y la arquitectura moderna se encuentran en equilibrio. 27 años entregando lo que prometemos."
        />
        <meta name="theme-color" content="#0E0E0E" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
