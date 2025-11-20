import { docs } from '.velite'
import type { MetadataRoute } from 'next'

const baseUrl = 'https://park-ui.com'

const staticPages = ['/', '/changelog']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = staticPages.map((page) => ({
    url: new URL(page, baseUrl).toString(),
  }))

  const docPages = docs.map((doc) => ({
    url: new URL(doc.href, baseUrl).toString(),
  }))

  return [...staticEntries, ...docPages]
}
