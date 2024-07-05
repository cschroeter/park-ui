import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Park UI',
    short_name: 'Park UI',
    description:
      'Beautifully designed components built with Ark UI and Panda CSS that work with avariety of JS frameworks.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#fff',
    icons: [
      {
        src: '/icon-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/icon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
  }
}
