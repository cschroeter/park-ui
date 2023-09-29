import { sitemap } from '~/sitemap'

export const getNextPage = (title: string) => {
  const pages = sitemap.flatMap((section) => section.entries)
  const currentPageIndex = pages.findIndex((page) => page.title === title)
  const nextPage = pages[currentPageIndex + 1]
  return nextPage
}

export const getPrevPage = (title: string) => {
  const pages = sitemap.flatMap((section) => section.entries)
  const currentPageIndex = pages.findIndex((page) => page.title === title)
  const prevPage = pages[currentPageIndex - 1]
  return prevPage
}
