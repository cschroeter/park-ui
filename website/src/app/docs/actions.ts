'use server'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { CodeExample, Framework } from '~/types'

interface Props {
  framework: Framework
  component: string
  example: string
}

export const getComponentCodeExamples = async (props: Props): Promise<CodeExample[]> => {
  const { framework, component, example } = props

  const baseDir = join(process.cwd(), '../components')
  const path = join(baseDir, framework, 'src/examples', component, `${example}.tsx`)
  const code = await readFile(path, 'utf-8').catch(() => null)

  return [
    { framework, lang: 'tsx', code },
    { framework: 'solid', lang: 'tsx', code: null },
    { framework: 'svelte', lang: 'svelte', code: null },
    { framework: 'vue', lang: 'vue', code: null },
  ]
}
