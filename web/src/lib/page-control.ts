import { getCollection } from 'astro:content'
import path from 'path'

export const getAllCollections = async () => {
  const priority = ['introduction', 'getting-started', 'figma', 'changelog', 'about']
  const overviewPages = await getCollection('overview').then((items) =>
    items.sort((a, b) => priority.indexOf(a.slug) - priority.indexOf(b.slug)),
  )
  const componentPages = await getCollection('components')
  return [...overviewPages, ...componentPages]
}

const getCurrentPageIndex = async (pathname?: string) => {
  const slug = pathname?.split('/').pop() ?? ''
  const collections = await getAllCollections()
  return collections.findIndex((item) => item.slug.endsWith(slug))
}

export const getPreviousPage = async (pathname?: string) => {
  const collections = await getAllCollections()
  const index = await getCurrentPageIndex(pathname)

  const item = collections[index - 1]
  return item
    ? { href: path.join('/docs', item.collection, item.data.id), name: item.data.title }
    : null
}

export const getNextPage = async (pathname?: string) => {
  const collections = await getAllCollections()
  const index = await getCurrentPageIndex(pathname)

  const item = collections[index + 1]
  return item
    ? { href: path.join('/docs', item.collection, item.data.id), name: item.data.title }
    : null
}

type Sitemap = {
  title: string
  items: {
    title: string
    href: string
  }[]
}[]

export const getSitemap = async (): Promise<Sitemap> => {
  const collections = await getAllCollections()
  return [
    {
      title: 'Overview',
      items: collections
        .filter((item) => item.collection === 'overview')
        .map((item) => ({
          title: item.data.title,
          href: path.join('/docs', item.collection, item.data.id),
        })),
    },
    {
      title: 'Components',
      items: collections
        .filter((item) => item.collection === 'components')
        .map((item) => ({
          title: item.data.title,
          href: path.join('/docs', item.collection, item.data.id),
        })),
    },
  ]
}
