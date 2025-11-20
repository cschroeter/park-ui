import { join } from 'node:path'
import type { MetadataRoute } from 'next'
import { pages } from '.velite'

const baseUrl = 'https://legacy.park-ui.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docPages = pages.map((doc) => ({
    url: new URL(join('/docs/', doc.slug), baseUrl).toString(),
  }))

  const sitemapEntries = [{ url: baseUrl }, ...docPages]

  return sitemapEntries
}
