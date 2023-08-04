import { readFileSync } from 'fs'
import { match } from 'ts-pattern'
import { sitemap } from '~/sitemap'

export type DefaultProps = Record<
  string,
  string | number | boolean | { options: string[]; defaultValue: string }
>

type FileContent = string

export type Component = {
  title: string
  description: string
  isPrimitive?: boolean
  files: {
    code: FileContent
    recipe: FileContent
    snippet: FileContent
  }
  defaultProps?: DefaultProps
}

export const findComponent = async (name: string): Promise<Component | undefined> => {
  const entry = sitemap
    .flatMap((section) => section.entries)
    .find((entry) => entry.href === `/docs/components/${name}`)

  const recipeName = match(name)
    .with('icon-button', () => 'button')
    .with('range-slider', () => 'slider')
    .otherwise(() => name)

  if (entry) {
    const snippet = readFileSync(`./src/components/${name}.tsx`, 'utf8')
    const code = readFileSync(`./src/components/docs/components/demo/${name}-demo.tsx`, 'utf8')
    const recipe = readFileSync(`../packages/presets/src/theme/recipes/${recipeName}.ts`, 'utf8')

    return {
      ...entry,
      files: { code, recipe, snippet },
    }
  }
}
