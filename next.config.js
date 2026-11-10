/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/proyectos/fincas-ybarlucea',
        destination: '/proyectos/fincas-ibarlucea',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
