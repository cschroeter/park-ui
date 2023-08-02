import { readFileSync } from 'fs'
import { sitemap } from '~/sitemap'

export type Foundation = {
  title: string
  description: string
  files: {
    config: string
  }
}

export const findFoundation = async (name: string): Promise<Foundation | undefined> => {
  const entry = sitemap
    .flatMap((section) => section.entries)
    .find((entry) => entry.href === `/docs/foundations/${name}`)

  if (entry) {
    return {
      ...entry,
      files: { config: readFileSync(`../packages/presets/src/${name}.ts`, 'utf-8') },
    }
  }
}
