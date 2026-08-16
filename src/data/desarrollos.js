// Fantín Desarrollos — Barrios Abiertos / Loteos Residenciales
// Two commercial lifecycles: activo (En Comercialización) y consolidado (Barrios Consolidados)

export const desarrollos = [
  // ── EN COMERCIALIZACIÓN ──────────────────────────────────────────────
  {
    id: 'fincas-ros',
    nombre: 'Fincas Ros',
    ubicacion: 'Ibarlucea',
    lifecycle: 'activo',
    badge: 'Pre-venta exclusiva',
    imagen: '/proyectos/fincas-ros/1.webp',
    logo: '/logos/fincas-ros.webp',
    subtituloHero:
      'Un nuevo loteo residencial en Ibarlucea pensado para una vida tranquila y conectada. Lotes desde 360 m² con infraestructura de primera calidad y servicios exclusivos para tu futuro hogar.',
    descripcion:
      'Nuevo loteo residencial en Ibarlucea, pensado para una vida tranquila y conectada, con infraestructura completa y entorno natural cuidado.',
    fichaTecnica: [
      { label: 'Localidad', value: 'Ibarlucea' },
      { label: 'Etapa comercial', value: 'Pre-venta exclusiva' },
      { label: 'Dimensiones', value: 'Lotes de 360 a 550 m²' },
      { label: 'Posesión', value: 'En 18 meses', accent: true },
    ],
    avance: 35,
    avanceDescripcion:
      'Actualmente nos encontramos en plena etapa de movimientos de suelo, trabajando activamente en el trazado y pavimentación integral de las calles y en el desarrollo de los reservorios de agua del barrio.',
    servicios: [
      'Agua potabilizada (Sistema de ósmosis inversa)',
      'Calles con adoquinado y cordón cuneta',
      'Internet por fibra óptica',
      'Red eléctrica y alumbrado público',
      'Espacios verdes planificados',
    ],
    ubicacionDescripcion:
      'Fincas Ros se emplaza en Ibarlucea, combinando la tranquilidad del entorno natural con un acceso ágil a los principales corredores de la región. El proyecto se encuentra en una zona de alta revalorización, impulsada por la futura pavimentación de la Ruta 59, una obra clave que conectará Funes con Ibarlucea en los próximos años, garantizando una accesibilidad inmejorable.',
    fotos: [
      '/proyectos/fincas-ros/1.webp',
      '/proyectos/fincas-ros/2.webp',
      '/proyectos/fincas-ros/3.webp',
      '/proyectos/fincas-ros/4.webp',
      '/proyectos/fincas-ros/obra-cartel.jpg',
      '/proyectos/fincas-ros/obra-maquinaria.jpg',
      '/proyectos/fincas-ros/obra-cargadora.jpg',
      '/proyectos/fincas-ros/obra-calle-2.jpg',
      '/proyectos/fincas-ros/obra-terreno-1.jpg',
      '/proyectos/fincas-ros/obra-terreno-3.jpg',
    ],
    coords: { lat: -32.8654662, lng: -60.7954954 },
    masterplan: '/planos/fincas-ros.webp',
  },
  {
    id: 'fincas-rosedal',
    nombre: 'Las Fincas del Rosedal',
    ubicacion: 'Ibarlucea',
    lifecycle: 'activo',
    badge: 'Lanzamiento Segunda Etapa',
    imagen: '/F4.webp',
    logo: '/logos/fincas-rosedal.png',
    tagline: 'Vida de pueblo, a 5 minutos de la gran ciudad.',
    subtituloHero:
      'A solo 5 minutos de Rosario, y cerca de Funes también. Las Fincas del Rosedal combina la tranquilidad absoluta del entorno natural con la comodidad urbana de primer nivel',
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
      'Alambrado público',
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
      logo: '/logos/club-bancario.webp',
      aliado: true,
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
    masterplan: '/planos/fincas-rosedal.svg',
  },
  {
    id: 'cinco-lagos',
    nombre: 'Cinco Lagos',
    ubicacion: 'Ibarlucea',
    lifecycle: 'activo',
    badge: 'Desarrollo Premium / Lanzamiento',
    imagen: '/images/dev-3.png',
    logo: '/logos/cinco-lagos.png',
    subtituloHero:
      'Un desarrollo premium organizado en torno a cinco lagunas, con lotes amplios y paisajismo integral en Ibarlucea',
    descripcion:
      'Desarrollo premium organizado en torno a cinco lagunas, con lotes amplios y paisajismo integral.',
    avance: 30,
    servicios: ['Luz', 'Agua', 'Lagunas', 'Calles', 'Seguridad perimetral'],
    mapQuery: 'Cinco Lagos, Ibarlucea, Santa Fe',
  },
  {
    id: 'terranova',
    nombre: 'Terranova',
    ubicacion: 'Capitán Bermúdez',
    lifecycle: 'activo',
    badge: 'En Obra / Últimos Lotes',
    videoId: 'VKQ3uVNEg-E',
    imagen: '/images/dev-1.png',
    logo: '/logos/terranova.png',
    subtituloHero:
      'En Capitán Bermúdez, un barrio abierto con infraestructura completa y los últimos lotes disponibles, en plena ejecución de obra',
    descripcion:
      'Barrio abierto con infraestructura completa y los últimos lotes disponibles en plena ejecución de obra.',
    avance: 85,
    servicios: ['Luz', 'Agua', 'Calles asfaltadas', 'Cloacas', 'Espacios verdes'],
  },
  {
    id: 'fincas-ybarlucea',
    nombre: 'Las Fincas de Ybarlucea',
    ubicacion: 'Ibarlucea',
    lifecycle: 'activo',
    badge: 'Comercialización Avanzada',
    imagen: '/images/dev-2.png',
    logo: '/logos/fincas-ybarlucea.png',
    subtituloHero:
      'Lotes residenciales de gran superficie en un entorno consolidado de Ibarlucea, con comercialización en etapa avanzada',
    descripcion:
      'Lotes residenciales de gran superficie en un entorno consolidado, con comercialización en etapa avanzada.',
    avance: 65,
    servicios: ['Luz', 'Agua', 'Calles', 'Gas', 'Áreas recreativas'],
    coords: { lat: -32.8610788, lng: -60.7861378 },
  },
  {
    id: 'carcaraes',
    nombre: 'Pueblo Carcaraes',
    ubicacion: 'Oliveros',
    lifecycle: 'activo',
    badge: 'Turismo Rural / En Comercialización',
    videoId: 'GDCYXIKXxZs',
    imagen: '/images/dev-1.png',
    logo: '/logos/carcaraes.png',
    subtituloHero:
      'Una propuesta de naturaleza y aventura en Oliveros, que integra distintos barrios y sectores dentro de un mismo entorno productivo y paisajístico',
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
    coords: { lat: -32.4785731, lng: -60.8557778 },
    masterplan: '/planos/carcaraes.svg',
  },

  {
    id: 'altos-orono',
    nombre: 'Altos de Oroño',
    ubicacion: 'San Lorenzo',
    lifecycle: 'activo',
    badge: '100% Vendido / Consolidado',
    videoId: '685tsMY-P_w',
    imagen: '/images/dev-3.png',
    logo: '/logos/altos-orono.webp',
    subtituloHero:
      'Un barrio consolidado en San Lorenzo, con lotes en altura y vistas privilegiadas del entorno, hoy plenamente habitado',
    descripcion:
      'Barrio consolidado en San Lorenzo, con lotes en altura y vistas privilegiadas del entorno, hoy plenamente habitado.',
  },
  {
    id: 'quinta-cairo',
    nombre: 'Quinta Cairo',
    ubicacion: 'Capitán Bermúdez',
    lifecycle: 'activo',
    badge: '100% Vendido / Consolidado',
    imagen: '/images/dev-5.png',
    logo: '/logos/quinta-cairo.png',
    subtituloHero:
      'Una comunidad consolidada y completamente vendida en Capitán Bermúdez, hoy un barrio maduro de referencia en la zona',
    descripcion:
      'Comunidad consolidada y completamente vendida, hoy un barrio maduro de referencia en la zona.',
  },
  {
    id: 'delta-bucare',
    nombre: 'Delta del Bucaré',
    ubicacion: 'Monje',
    lifecycle: 'activo',
    badge: 'Reserva Natural / Consolidado',
    videoId: 'Y49fZBjHMl0',
    imagen: '/images/dev-6.png',
    logo: '/logos/delta-bucare.webp',
    subtituloHero:
      'Un barrio consolidado en Monje, en torno a una reserva natural, con humedales y biodiversidad protegida',
    descripcion:
      'Barrio consolidado en torno a una reserva natural, con humedales y biodiversidad protegida.',
    coords: { lat: -32.3239121, lng: -60.8845568 },
  },
];

export const filtros = [
  { id: 'todos', label: 'Todos los Desarrollos' },
  { id: 'activo', label: 'En Comercialización' },
  { id: 'consolidado', label: 'Barrios Consolidados' },
];
