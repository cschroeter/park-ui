import { docs } from '.velite'

const GETTING_STARTED_PRIORITY = [
  'introduction',
  'installation',
  'theming',
  'migration',
  'figma',
  'about',
] as const

const getStarted = docs
  .filter((page) => !page.href.startsWith('/docs/components'))
  .sort((a, b) => {
    const aIndex = GETTING_STARTED_PRIORITY.indexOf(
      a.slug as (typeof GETTING_STARTED_PRIORITY)[number],
    )
    const bIndex = GETTING_STARTED_PRIORITY.indexOf(
      b.slug as (typeof GETTING_STARTED_PRIORITY)[number],
    )
    if (aIndex === -1 && bIndex === -1) {
      return a.title.localeCompare(b.title)
    }
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    return aIndex - bIndex
  })
  .map((page) => ({
    label: page.title,
    value: page.href,
    description: page.description,
    category: 'Get Started',
  }))

const components = docs
  .filter((page) => page.href.startsWith('/docs/components'))
  .map((page) => ({
    label: page.title,
    value: page.href,
    description: page.description,
    category: 'Components',
  }))

export const data = { getStarted, components }
