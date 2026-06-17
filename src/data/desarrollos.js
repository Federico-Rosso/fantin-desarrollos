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
    ubicacion: 'Roldán',
    lifecycle: 'activo',
    badge: 'Preventa Exclusiva',
    imagen: '/images/dev-6.png',
    descripcion:
      'Barrio abierto en preventa exclusiva, con diseño paisajístico de jardines y rosedales centrales.',
    avance: 15,
    servicios: ['Luz', 'Agua', 'Calles', 'Paisajismo', 'Club house'],
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
