import path from 'node:path'
import { getCollection } from 'astro:content'

const getOverviewPages = async () => {
  const priority = ['introduction', 'getting-started', 'cli', 'figma', 'changelog', 'about']
  return getCollection('overview').then((items) =>
    items.sort((a, b) => priority.indexOf(a.data.id) - priority.indexOf(b.data.id)),
  )
}
const getThemePages = async () => {
  const priority = ['colors', 'semantic-tokens', 'customize']
  return getCollection('theme').then((items) =>
    items.sort((a, b) => priority.indexOf(a.data.id) - priority.indexOf(b.data.id)),
  )
}

const getComponentsPages = async () => {
  const priority = ['typography', 'component']
  return getCollection('components').then((items) =>
    items.sort((a, b) => priority.indexOf(a.data.category) - priority.indexOf(b.data.category)),
  )
}

export const getAllCollections = async () => {
  const overviewPages = await getOverviewPages()
  const themePages = await getThemePages()
  const componentPages = await getComponentsPages()

  return [...overviewPages, ...themePages, ...componentPages]
}

const getCurrentPageIndex = async (pathname?: string) => {
  const slug = pathname?.split('/').pop() ?? ''
  const cssFramework = pathname?.split('/')[0] as CSSFramework
  const collections = await getAllCollections().then((x) =>
    x.filter((item) => item.slug.startsWith(cssFramework)),
  )
  return collections.findIndex((item) => item.slug.endsWith(slug))
}

export const getPreviousPage = async (pathname?: string) => {
  const cssFramework = pathname?.split('/')[0] as CSSFramework
  const collections = await getAllCollections().then((x) =>
    x.filter((item) => item.slug.startsWith(cssFramework)),
  )

  const index = await getCurrentPageIndex(pathname)

  const item = collections[index - 1]
  return item
    ? {
        href: path.join('/docs', cssFramework, item.collection, item.data.id),
        name: item.data.title,
      }
    : null
}

export const getNextPage = async (pathname?: string) => {
  const cssFramework = pathname?.split('/')[0] as CSSFramework
  const collections = await getAllCollections().then((x) =>
    x.filter((item) => item.slug.startsWith(cssFramework)),
  )
  const index = await getCurrentPageIndex(pathname)

  const item = collections[index + 1]
  return item
    ? {
        href: path.join('/docs', cssFramework, item.collection, item.data.id),
        name: item.data.title,
      }
    : null
}

interface Item {
  id: string
  name: string
  href?: string
  items?: Item[]
}

type CSSFramework = 'panda' | 'tailwind'

type Props = {
  cssFramework: CSSFramework
}

export const getSitemap = async (props: Props): Promise<Item[]> => {
  const { cssFramework } = props
  const overviewPages = await getOverviewPages()
  const themePages = await getThemePages()
  const componentPages = await getCollection('components')

  const priority = ['typography', 'component']

  const componentPagesGroupByCategory = componentPages
    .map((item) => item.data.category)
    .sort((a, b) => priority.indexOf(a) - priority.indexOf(b))
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((category) => ({
      id: category === 'typography' ? 'typography' : 'components',
      name: category === 'typography' ? 'Typography' : 'Components',
      items: componentPages
        .filter((item) => item.slug.startsWith(cssFramework))
        .filter((item) => item.data.category === category)
        .map((item) => ({
          id: `component:${item.data.id}`,
          name: item.data.title,
          href: path.join('/docs', cssFramework, item.collection, item.data.id),
          label: item.data.label,
        })),
    }))

  return [
    {
      id: 'overview',
      name: 'Overview',
      items: overviewPages
        .filter((item) => item.collection === 'overview')
        .filter((item) => item.slug.startsWith(cssFramework))
        .map((item) => ({
          id: `overview:${item.data.id}`,
          name: item.data.title,
          href: path.join('/docs', cssFramework, item.collection, item.data.id),
          label: item.data.label,
        })),
    },
    {
      id: 'theme',
      name: 'Theme',
      items: themePages
        .filter((item) => item.collection === 'theme')
        .filter((item) => item.slug.startsWith(cssFramework))
        .map((item) => ({
          id: `theme:${item.data.id}`,
          name: item.data.title,
          href: path.join('/docs', cssFramework, item.collection, item.data.id),
        })),
    },
    ...componentPagesGroupByCategory,
  ].filter(Boolean)
}

// a very primitive appraoch but it works
export const hasVariants = async (pathname?: string) => {
  const id = pathname?.split('/').pop() ?? ''
  const collections = await getAllCollections()
  const items = collections.filter((item) => item.data.id === id)
  return items.length > 1 && !['introduction', 'figma', 'about'].includes(id)
}
