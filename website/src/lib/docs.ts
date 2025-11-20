import { type Doc, docs } from '.velite'

const CATEGORIES_ORDER = ['getting-started'] as const
const GETTING_STARTED_PRIORITY = [
  'introduction',
  'installation',
  'theming',
  'migration',
  'figma',
  'about',
] as const

export const getDocumentBySlug = (slug: string[]): Doc | undefined => {
  const slugString = getSlugString(slug)
  return docs.find((doc) => doc.slug === slugString)
}

export const getNextDocument = (slug: string[]): Doc | undefined => {
  const sortedDocs = getSortedDocs()
  const slugString = getSlugString(slug)
  const index = sortedDocs.findIndex((doc) => doc.slug === slugString)
  return index !== -1 ? sortedDocs[index + 1] : undefined
}

export const getPrevDocument = (slug: string[]): Doc | undefined => {
  const sortedDocs = getSortedDocs()
  const slugString = getSlugString(slug)
  const index = sortedDocs.findIndex((doc) => doc.slug === slugString)
  return index !== -1 ? sortedDocs[index - 1] : undefined
}

export const getSidebarGroups = (): Doc[][] => {
  const groups = docs.reduce(
    (acc, doc) => {
      if (!acc[doc.category]) {
        acc[doc.category] = []
      }
      acc[doc.category].push(doc)
      return acc
    },
    {} as Record<string, Doc[]>,
  )

  return Object.keys(groups)
    .sort(sortByCategory)
    .map((category) => groups[category].sort(sortDocuments))
}

const getSlugString = (slug: string[]): string => slug.join('/')

const getSortedDocs = (): Doc[] => {
  return getSidebarGroups().flat()
}

const sortByCategory = (a: string, b: string): number => {
  const aIndex = CATEGORIES_ORDER.indexOf(a as (typeof CATEGORIES_ORDER)[number])
  const bIndex = CATEGORIES_ORDER.indexOf(b as (typeof CATEGORIES_ORDER)[number])

  if (aIndex === -1 && bIndex === -1) return a.localeCompare(b)
  if (aIndex === -1) return 1
  if (bIndex === -1) return -1
  return aIndex - bIndex
}

const sortDocuments = (a: Doc, b: Doc): number => {
  if (a.category === 'getting-started' && b.category === 'getting-started') {
    const aPriority = GETTING_STARTED_PRIORITY.indexOf(
      a.id as (typeof GETTING_STARTED_PRIORITY)[number],
    )
    const bPriority = GETTING_STARTED_PRIORITY.indexOf(
      b.id as (typeof GETTING_STARTED_PRIORITY)[number],
    )
    if (aPriority !== -1 || bPriority !== -1) {
      return aPriority - bPriority
    }
  }
  return a.title.localeCompare(b.title)
}
