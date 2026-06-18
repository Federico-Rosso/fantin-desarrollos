// Fantín Desarrollos — Barrios Abiertos / Loteos Residenciales
// Two commercial lifecycles: activo (En Comercialización) y consolidado (Barrios Consolidados)

export const desarrollos = [
  // ── EN COMERCIALIZACIÓN ──────────────────────────────────────────────
  {
    id: 'terranova',
    nombre: 'Terranova',
    ubicacion: 'Oliveros',
    lifecycle: 'activo',
    badge: 'En Obra / Últimos Lotes',
    imagen: '/images/dev-1.png',
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
    descripcion:
      'Lotes residenciales de gran superficie en un entorno consolidado, con comercialización en etapa avanzada.',
    avance: 65,
    servicios: ['Luz', 'Agua', 'Calles', 'Gas', 'Áreas recreativas'],
  },
  {
    id: 'solares-norte',
    nombre: 'Solares Norte',
    ubicacion: 'Timbúes',
    lifecycle: 'activo',
    badge: 'Oportunidad de Inversión',
    imagen: '/images/dev-4.png',
    descripcion:
      'Loteo estratégico en el corredor norte, pensado como oportunidad de inversión con alta revalorización.',
    avance: 45,
    servicios: ['Luz', 'Agua', 'Calles', 'Espacios verdes'],
  },
  {
    id: 'solares-sur',
    nombre: 'Solares Sur',
    ubicacion: 'Timbúes',
    lifecycle: 'activo',
    badge: 'Corredor Biodiversidad / En Venta',
    imagen: '/images/dev-5.png',
    descripcion:
      'Desarrollo integrado a un corredor de biodiversidad, con lotes en venta y fuerte impronta ambiental.',
    avance: 40,
    servicios: ['Luz', 'Agua', 'Calles', 'Reserva natural', 'Senderos'],
  },
  {
    id: 'fincas-rosedal',
    nombre: 'Las Fincas del Rosedal',
    ubicacion: 'Ibarlucea, Santa Fe',
    lifecycle: 'activo',
    badge: 'Lanzamiento Segunda Etapa',
    imagen: '/F4.webp',
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
    id: 'carcaraes',
    nombre: 'Carcaraes',
    ubicacion: 'Arroyo Seco',
    lifecycle: 'activo',
    badge: 'Turismo Rural / En Comercialización',
    imagen: '/images/dev-1.png',
    descripcion:
      'Propuesta de turismo rural con lotes residenciales en comercialización, rodeada de paisaje productivo.',
    avance: 50,
    servicios: ['Luz', 'Agua', 'Calles', 'Áreas comunes', 'Forestación'],
  },
  {
    id: 'altos-orono',
    nombre: 'Altos de Oroño',
    ubicacion: 'Funes',
    lifecycle: 'activo',
    badge: 'Lanzamiento / Próximamente',
    imagen: '/images/dev-3.png',
    descripcion:
      'Nuevo desarrollo en etapa de lanzamiento, con lotes en altura y vistas privilegiadas del entorno.',
    avance: 10,
    servicios: ['Luz', 'Agua', 'Calles', 'Espacios verdes'],
  },

  // ── BARRIOS CONSOLIDADOS ─────────────────────────────────────────────
  {
    id: 'solares-carcarana',
    nombre: 'Solares del Carcarañá',
    ubicacion: 'Carcarañá',
    lifecycle: 'consolidado',
    badge: '100% Vendido / Hito Fundacional',
    imagen: '/images/dev-4.png',
    descripcion:
      'Hito fundacional de Fantín Desarrollos: un barrio abierto íntegramente vendido y plenamente habitado.',
  },
  {
    id: 'quinta-cairo',
    nombre: 'Quinta Cairo',
    ubicacion: 'Pueblo Esther',
    lifecycle: 'consolidado',
    badge: '100% Vendido / Consolidado',
    imagen: '/images/dev-5.png',
    descripcion:
      'Comunidad consolidada y completamente vendida, hoy un barrio maduro de referencia en la zona.',
  },
  {
    id: 'chacras-rincon',
    nombre: 'Chacras del Rincón',
    ubicacion: 'Pérez',
    lifecycle: 'consolidado',
    badge: '100% Vendido / Monte Nativo Protegido',
    imagen: '/images/dev-2.png',
    descripcion:
      'Loteo consolidado con monte nativo protegido, integrando vida residencial y preservación ambiental.',
  },
  {
    id: 'delta-bucare',
    nombre: 'Delta del Bucaré',
    ubicacion: 'Granadero Baigorria',
    lifecycle: 'consolidado',
    badge: 'Reserva Natural / Consolidado',
    imagen: '/images/dev-6.png',
    descripcion:
      'Barrio consolidado en torno a una reserva natural, con humedales y biodiversidad protegida.',
  },
];

export const filtros = [
  { id: 'todos', label: 'Todos los Desarrollos' },
  { id: 'activo', label: 'En Comercialización' },
  { id: 'consolidado', label: 'Barrios Consolidados' },
];
