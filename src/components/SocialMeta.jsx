import { SITE_URL, SITE_NAME } from '../lib/site';

// next/head solo toma etiquetas que sean hijos directos (o dentro de un Fragment),
// por eso esto se usa como función: {socialMeta({ ... })} y no como <SocialMeta />.
// Etiquetas para la vista previa de links (WhatsApp, Instagram, Facebook, X)
// y URL canónica. `image` y `path` son rutas relativas al sitio.
export default function socialMeta({ title, description, image, path = '/' }) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image?.startsWith('http') ? image : `${SITE_URL}${image}`;
  return [
    <link key="canonical" rel="canonical" href={url} />,
    <meta key="og:type" property="og:type" content="website" />,
    <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />,
    <meta key="og:locale" property="og:locale" content="es_AR" />,
    <meta key="og:url" property="og:url" content={url} />,
    <meta key="og:title" property="og:title" content={title} />,
    <meta key="og:description" property="og:description" content={description} />,
    image && <meta key="og:image" property="og:image" content={imageUrl} />,
    image && <meta key="og:image:alt" property="og:image:alt" content={title} />,
    <meta key="twitter:card" name="twitter:card" content="summary_large_image" />,
    <meta key="twitter:title" name="twitter:title" content={title} />,
    <meta key="twitter:description" name="twitter:description" content={description} />,
    image && <meta key="twitter:image" name="twitter:image" content={imageUrl} />,
  ].filter(Boolean);
}
