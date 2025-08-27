import { type Doc, docs } from '.velite'

const categories = ['docs', 'typography', 'components']
const docsPriority = ['introduction', 'installation', 'theming', 'figma', 'about']

export const getDocumentBySlug = (slug: string[]) => {
  const sortedDocs = docs.sort((a, b) => {
    const categoryAIndex = categories.indexOf(a.category)
    const categoryBIndex = categories.indexOf(b.category)
    if (categoryAIndex === categoryBIndex) {
      return a.id.localeCompare(b.id)
    }
    return categoryAIndex - categoryBIndex
  })

  return sortedDocs
    .sort((a, b) => {
      if (a.category === 'docs' && b.category === 'docs') {
        return docsPriority.indexOf(a.id) - docsPriority.indexOf(b.id)
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

  if (sortedCategories.docs) {
    sortedCategories.docs.sort((a, b) => docsPriority.indexOf(a.id) - docsPriority.indexOf(b.id))
  }

  return categories
    .filter((category) => category in sortedCategories)
    .map((category) => sortedCategories[category])
}
