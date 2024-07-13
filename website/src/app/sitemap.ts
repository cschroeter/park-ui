import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://park-ui.com',
      lastModified: new Date(),
    },
    {
      url: 'https://park-ui.com/react/docs/overview/introduction',
      lastModified: new Date(),
    },
    {
      url: 'https://park-ui.com/solid/overview/introduction',
      lastModified: new Date(),
    },
    {
      url: 'https://park-ui.com/vue/overview/introduction',
      lastModified: new Date(),
    },
  ]
}
