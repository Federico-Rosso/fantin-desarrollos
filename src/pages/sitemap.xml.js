import { desarrollos } from '../data/desarrollos';
import { SITE_URL } from '../lib/site';

// Sitemap generado a partir de los desarrollos: se actualiza solo al sumar proyectos.
export async function getServerSideProps({ res }) {
  const paths = ['/', '/nosotros', ...desarrollos.map((d) => `/proyectos/${d.id}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n')}
</urlset>`;
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(xml);
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
