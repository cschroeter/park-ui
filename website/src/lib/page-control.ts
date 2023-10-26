import { getCollection } from 'astro:content'
import path from 'path'

const getOverviewPages = async () => {
  const priority = ['introduction', 'getting-started', 'figma', 'changelog', 'about']
  return getCollection('overview').then((items) =>
    items.sort((a, b) => priority.indexOf(a.data.id) - priority.indexOf(b.data.id)),
  )
}
const getThemePages = async () => {
  const priority = ['customize', 'semantic-tokens']
  return getCollection('theme').then((items) =>
    items.sort((a, b) => priority.indexOf(a.data.id) - priority.indexOf(b.data.id)),
  )
}

export const getAllCollections = async () => {
  const overviewPages = await getOverviewPages()
  const themePages = await getThemePages()
  const componentPages = await getCollection('components')

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

type Sitemap = {
  title: string
  items: {
    title: string
    href: string
    label?: string
  }[]
}[]

type CSSFramework = 'panda' | 'tailwind'

type Props = {
  cssFramework: CSSFramework
}

export const getSitemap = async (props: Props): Promise<Sitemap> => {
  const { cssFramework } = props
  const overviewPages = await getOverviewPages()
  const themePages = await getThemePages()
  const componentPages = await getCollection('components')

  const priority = ['typography', 'component']
  const typographyPriority = ['text', 'heading', 'code']

  const componentPagesGroupByCategory = componentPages
    .map((item) => item.data.category)
    .sort((a, b) => priority.indexOf(a) - priority.indexOf(b))
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((category) => ({
      title: category,
      items: componentPages
        .filter((item) => item.slug.startsWith(cssFramework))
        .filter((item) => item.data.category === category)
        .sort(
          (a, b) => typographyPriority.indexOf(a.data.id) - typographyPriority.indexOf(b.data.id),
        )
        .map((item) => ({
          title: item.data.title,
          href: path.join('/docs', cssFramework, item.collection, item.data.id),
          label: item.data.label,
        })),
    }))

  const hasThemePagesForCssFramework = themePages.some((item) => item.slug.startsWith(cssFramework))

  return [
    {
      title: 'Overview',
      items: overviewPages
        .filter((item) => item.collection === 'overview')
        .filter((item) => item.slug.startsWith(cssFramework))
        .map((item) => ({
          title: item.data.title,
          href: path.join('/docs', cssFramework, item.collection, item.data.id),
        })),
    },
    hasThemePagesForCssFramework
      ? {
          title: 'Theme',
          items: themePages
            .filter((item) => item.collection === 'theme')
            .filter((item) => item.slug.startsWith(cssFramework))
            .map((item) => ({
              title: item.data.title,
              href: path.join('/docs', cssFramework, item.collection, item.data.id),
            })),
        }
      : undefined,
    ...componentPagesGroupByCategory,
  ].filter(Boolean) as Sitemap
}

// a very primitive appraoch but it works
export const hasVariants = async (pathname?: string) => {
  const id = pathname?.split('/').pop() ?? ''
  const collections = await getAllCollections()
  const items = collections.filter((item) => item.data.id === id)

  return items.length > 1
}
