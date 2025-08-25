'use server'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { frameworks } from '~/lib/frameworks'
import type { CodeExample, SourceCode } from '~/types'

interface Props {
  component: string
  name: string
}

export const getComponentExamples = async (props: Props): Promise<CodeExample[]> => {
  const { component, name } = props

  const baseDir = join(process.cwd(), '../components')

  return Promise.all(
    frameworks.map(async ({ framework, lang }) => {
      const fileName = `${name}.${lang}`
      const path = join(baseDir, framework, 'src/examples', component, fileName)
      const code = await readFile(path, 'utf-8').catch(() => null)

      return {
        framework,
        sourceCode: code ? { code, lang } : null,
      }
    }),
  )
}

export const getComponentSourceCode = async (name: string): Promise<CodeExample[]> => {
  const baseDir = join(process.cwd(), '../components')

  return Promise.all(
    frameworks.map(async ({ framework }) => {
      const lang = 'ts'
      const path = join(baseDir, framework, 'src/components/ui', `${name}.${lang}`)
      const code = await readFile(path, 'utf-8').catch(() => null)

      return {
        framework,
        sourceCode: code ? { code, lang } : null,
      }
    }),
  )
}

export const getRecipe = async (name: string): Promise<SourceCode | null> => {
  const lang = 'ts'
  const path = join(process.cwd(), '../packages/preset/src/recipes', `${name}.${lang}`)
  const code = await readFile(path, 'utf-8').catch(() => null)

  return code ? { code, lang } : null
}
