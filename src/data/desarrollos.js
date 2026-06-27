// Fantín Desarrollos — Barrios Abiertos / Loteos Residenciales
// Two commercial lifecycles: activo (En Comercialización) y consolidado (Barrios Consolidados)

export const desarrollos = [
  // ── EN COMERCIALIZACIÓN ──────────────────────────────────────────────
  {
    id: 'fincas-rosedal',
    nombre: 'Las Fincas del Rosedal',
    ubicacion: 'Ibarlucea',
    lifecycle: 'activo',
    badge: 'Lanzamiento Segunda Etapa',
    imagen: '/F4.webp',
    logo: '/logos/fincas-rosedal.png',
    tagline: 'Vida de pueblo, a 5 minutos de la gran ciudad.',
    descripcion:
      'A solo 5 minutos de Rosario, y cerca de Funes también. Las Fincas del Rosedal combina la tranquilidad absoluta del entorno natural con la comodidad urbana de primer nivel.',
    precio: 'Precios promocionales de lanzamiento segunda etapa.',
    avance: 50,
    lotes: {
      total: 250,
      disponibles: 'Segunda Etapa',
    },
    servicios: [
      'Calles pavimentadas',
      'Cordón cuneta',
      'Alumbrado público',
      'Electricidad',
      'Agua potable',
      'Espacios verdes intervenidos',
      'Juegos infantiles',
      'Red Wifi',
    ],
    beneficioClub: {
      titulo: 'Club Bancario Rosario Bonificado',
      descripcion:
        'Con la compra del lote tenés bonificada la cuota de ingreso al Club Bancario Rosario, sede a 5 minutos (en Cinco Lagos, Ybarlucea) y sede zona norte.',
    },
    hitosEtapas: [
      {
        titulo: 'Etapa 1',
        estado: '100% vendida y escriturada',
        detalle: 'Más de 100 vecinos con casa construida.',
        fotoEtapa: '/Etapa1d.webp',
      },
      {
        titulo: 'Etapa 2',
        estado: 'A la venta',
        detalle:
          'Incluye la estación de servicio (única en Ibarlucea) y un centro comercial exclusivo con oficinas, locales y gastronomía.',
        fotoEtapa: '/centro3_rosedal.webp',
      },
      {
        titulo: 'Proyectado a futuro',
        estado: 'Planificación avanzada',
        detalle: 'Parque recreativo con dos lagos, sendero aeróbico, plazas y juegos.',
        fotoEtapa: '/parque_recreativo.webp',
      },
    ],
    coords: { lat: -32.8507468, lng: -60.7643169 },
    fotos: [
      '/F4.webp',
      '/estacion3_rosedal.webp',
      '/D4.webp',
      '/E9.webp',
      '/A3.webp',
      '/C1.webp',
      '/B1.webp',
    ],
    masterplan: '/F4.webp',
  },
  {
    id: 'fincas-ros',
    nombre: 'Fincas Ros',
    ubicacion: 'Ibarlucea',
    lifecycle: 'activo',
    badge: 'En Comercialización',
    imagen: '/images/dev-6.png',
    logo: '/logos/fincas-ros.webp',
    descripcion:
      'Nuevo loteo residencial en Ibarlucea, pensado para una vida tranquila y conectada, con infraestructura completa y entorno natural cuidado.',
    avance: 35,
    servicios: ['Luz', 'Agua', 'Calles', 'Alumbrado público', 'Espacios verdes'],
  },
  {
    id: 'terranova',
    nombre: 'Terranova',
    ubicacion: 'Oliveros',
    lifecycle: 'activo',
    badge: 'En Obra / Últimos Lotes',
    imagen: '/images/dev-1.png',
    logo: '/logos/terranova.png',
    descripcion:
      'Barrio abierto con infraestructura completa y los últimos lotes disponibles en plena ejecución de obra.',
    avance: 85,
    servicios: ['Luz', 'Agua', 'Calles asfaltadas', 'Cloacas', 'Espacios verdes'],
  },
  {
    id: 'cinco-lagos',
    nombre: 'Cinco Lagos',
    ubicacion: 'Ibarlucea',
    lifecycle: 'activo',
    badge: 'Desarrollo Premium / Lanzamiento',
    imagen: '/images/dev-3.png',
    logo: '/logos/cinco-lagos.png',
    descripcion:
      'Desarrollo premium organizado en torno a cinco lagunas, con lotes amplios y paisajismo integral.',
    avance: 30,
    servicios: ['Luz', 'Agua', 'Lagunas', 'Calles', 'Seguridad perimetral'],
  },
  {
    id: 'fincas-ybarlucea',
    nombre: 'Las Fincas de Ybarlucea',
    ubicacion: 'Ibarlucea',
    lifecycle: 'activo',
    badge: 'Comercialización Avanzada',
    imagen: '/images/dev-2.png',
    logo: '/logos/fincas-ybarlucea.png',
    descripcion:
      'Lotes residenciales de gran superficie en un entorno consolidado, con comercialización en etapa avanzada.',
    avance: 65,
    servicios: ['Luz', 'Agua', 'Calles', 'Gas', 'Áreas recreativas'],
  },
  {
    id: 'carcaraes',
    nombre: 'Pueblo Carcaraes',
    ubicacion: 'Oliveros',
    lifecycle: 'activo',
    badge: 'Turismo Rural / En Comercialización',
    imagen: '/images/dev-1.png',
    logo: '/logos/carcaraes.png',
    descripcion:
      'Pueblo Carcaraes es una propuesta de naturaleza y aventura en Oliveros, que integra distintos barrios y sectores dentro de un mismo entorno productivo y paisajístico.',
    avance: 50,
    servicios: ['Luz', 'Agua', 'Calles', 'Áreas comunes', 'Forestación'],
    sectores: [
      {
        nombre: 'Chacras del Rincón',
        estado: 'Legado',
        descripcion:
          'Sector fundacional con monte nativo protegido, donde la vida residencial convive con la preservación ambiental.',
      },
      {
        nombre: 'Solares Norte',
        estado: 'En comercialización',
        descripcion:
          'Loteo estratégico en el corredor norte del pueblo, con alta proyección de revalorización.',
      },
      {
        nombre: 'Solares Sur',
        estado: 'En comercialización',
        descripcion:
          'Sector integrado a un corredor de biodiversidad, con lotes en venta y fuerte impronta ambiental.',
      },
    ],
  },

  // ── BARRIOS CONSOLIDADOS ─────────────────────────────────────────────
  {
    id: 'altos-orono',
    nombre: 'Altos de Oroño',
    ubicacion: 'San Lorenzo',
    lifecycle: 'consolidado',
    badge: '100% Vendido / Consolidado',
    imagen: '/images/dev-3.png',
    logo: '/logos/altos-orono.webp',
    descripcion:
      'Barrio consolidado en San Lorenzo, con lotes en altura y vistas privilegiadas del entorno, hoy plenamente habitado.',
  },
  {
    id: 'solares-carcarana',
    nombre: 'Solares del Carcarañá',
    ubicacion: 'Carcarañá',
    lifecycle: 'consolidado',
    badge: '100% Vendido / Hito Fundacional',
    imagen: '/images/dev-4.png',
    logo: '/logos/solares-carcarana.webp',
    descripcion:
      'Hito fundacional de Fantín Desarrollos: un barrio abierto íntegramente vendido y plenamente habitado.',
  },
  {
    id: 'quinta-cairo',
    nombre: 'Quinta Cairo',
    ubicacion: 'Capitán Bermúdez',
    lifecycle: 'consolidado',
    badge: '100% Vendido / Consolidado',
    imagen: '/images/dev-5.png',
    logo: '/logos/quinta-cairo.png',
    descripcion:
      'Comunidad consolidada y completamente vendida, hoy un barrio maduro de referencia en la zona.',
  },
  {
    id: 'delta-bucare',
    nombre: 'Delta del Bucaré',
    ubicacion: 'Monje',
    lifecycle: 'consolidado',
    badge: 'Reserva Natural / Consolidado',
    imagen: '/images/dev-6.png',
    logo: '/logos/delta-bucare.webp',
    descripcion:
      'Barrio consolidado en torno a una reserva natural, con humedales y biodiversidad protegida.',
  },
];

export const filtros = [
  { id: 'todos', label: 'Todos los Desarrollos' },
  { id: 'activo', label: 'En Comercialización' },
  { id: 'consolidado', label: 'Barrios Consolidados' },
];
