import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fantín Desarrollos | 27 años entregando lo que prometemos</title>
        <meta
          name="description"
          content="Loteos, barrios y desarrollos donde la naturaleza y la arquitectura moderna se encuentran en equilibrio. 27 años entregando lo que prometemos."
        />
        <meta name="theme-color" content="#1E3310" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
    </>
  );
}
