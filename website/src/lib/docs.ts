import { type Doc, docs } from '.velite'

export const getDocumentBySlug = (slug: string[]): Doc | undefined => {
  return docs.find((doc) => doc.slug === slug.join('/'))
}

export const getSidebarGroups = (): Doc[][] => {
  const categories = ['overview', 'theme', 'typography', 'components']
  const overviewPriority = ['introduction', 'getting-started', 'figma', 'changelog', 'about']

  const sortedCategories = docs.reduce(
    (acc, doc) => {
      const category = doc.category
      if (categories.includes(category)) {
        acc[category] ??= []
        acc[category].push({
          ...doc,
          title: doc.id === 'introduction' ? 'Introduction' : doc.title,
        })
      }
      return acc
    },
    {} as Record<string, Doc[]>,
  )

  if (sortedCategories.overview) {
    sortedCategories.overview.sort(
      (a, b) => overviewPriority.indexOf(a.id) - overviewPriority.indexOf(b.id),
    )
  }

  return categories
    .filter((category) => category in sortedCategories)
    .map((category) => sortedCategories[category])
}
