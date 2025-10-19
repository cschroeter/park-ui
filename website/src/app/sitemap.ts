import { docs } from '.velite'
import type { MetadataRoute } from 'next'

const baseUrl = 'https://park-ui.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docPages = docs.map((doc) => ({
    url: new URL(doc.href, baseUrl).toString(),
  }))

  const sitemapEntries = [{ url: baseUrl }, ...docPages]

  return sitemapEntries
}
