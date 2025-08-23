'use server'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { CodeExample, Framework, Lang } from '~/types'

interface Props {
  component: string
  example: string
}

export const getComponentCodeExamples = async (props: Props): Promise<CodeExample[]> => {
  const { component, example } = props
  const frameworks: Framework[] = ['react', 'solid', 'svelte', 'vue']
  const frameworkLang: Record<Framework, Lang> = {
    vue: 'vue',
    svelte: 'svelte',
    react: 'tsx',
    solid: 'tsx',
  }

  const baseDir = join(process.cwd(), '../components')

  return Promise.all(
    frameworks.map(async (framework) => {
      const lang = frameworkLang[framework]
      const path = join(baseDir, framework, 'src/examples', component, `${example}.${lang}`)
      const code = await readFile(path, 'utf-8').catch(() => null)
      return { framework, lang, code }
    }),
  )
}
