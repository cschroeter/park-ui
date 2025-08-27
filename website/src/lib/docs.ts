import { type Doc, docs } from '.velite'

export const getDocumentBySlug = (slug: string[]) => {
  const sortedDocs = docs.sort((a, b) => {
    const categories = ['overview', 'theme', 'typography', 'components']
    const categoryAIndex = categories.indexOf(a.category)
    const categoryBIndex = categories.indexOf(b.category)
    if (categoryAIndex === categoryBIndex) {
      return a.id.localeCompare(b.id)
    }
    return categoryAIndex - categoryBIndex
  })

  return sortedDocs
    .sort((a, b) => {
      if (a.category === 'overview' && b.category === 'overview') {
        const overviewPriority = ['introduction', 'getting-started', 'figma', 'changelog', 'about']
        return overviewPriority.indexOf(a.id) - overviewPriority.indexOf(b.id)
      }
      return 0
    })
    .find((doc) => doc.slug === slug.join('/'))
}

export const getNextDocument = (slug: string[]) => {
  const index = docs.findIndex((doc) => doc.slug === slug.join('/'))
  return docs[index + 1]
}

export const getPrevDocument = (slug: string[]) => {
  const index = docs.findIndex((doc) => doc.slug === slug.join('/'))
  return docs[index - 1]
}

export const getSidebarGroups = (): Doc[][] => {
  const categories = ['overview', 'theme', 'typography', 'components']
  const overviewPriority = ['introduction', 'getting-started', 'figma', 'changelog', 'about']

  const sortedCategories = docs.reduce(
    (acc, doc) => {
      const category = doc.category
      if (categories.includes(category)) {
        acc[category] ??= []
        acc[category].push(doc)
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
