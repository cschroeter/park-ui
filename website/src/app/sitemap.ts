import type { MetadataRoute } from 'next'

const baseUrl = 'https://park-ui.com'
const frameworks = ['react', 'solid', 'vue']
const paths = ['/docs/overview/introduction', '/blocks']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date().toISOString()

  const sitemapEntries = [
    { url: baseUrl, lastModified },
    ...frameworks.flatMap((framework) =>
      paths.map((path) => ({
        url: `${baseUrl}/${framework}${path}`,
        lastModified,
      })),
    ),
  ]

  return sitemapEntries
}
