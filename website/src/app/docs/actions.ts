'use server'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

type Framework = 'react' | 'solid' | 'svelte' | 'vue'

interface Props {
  framework: Framework
  component: string
  example: string
}

export const getComponentExampleSourceCode = async (props: Props) => {
  const { framework, component, example } = props

  const baseDir = join(process.cwd(), '../components')
  const path = join(baseDir, framework, 'src/examples', component, `${example}.tsx`)

  return await readFile(path, 'utf-8').catch(() => 'Example not found')
}
