'use server'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { highlight } from '~/lib/shiki'

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

  console.log(`Reading example source code from: ${path}`)
  const code = await readFile(path, 'utf-8').catch(() => 'Example not found')
  const html = await highlight({ code, lang: framework === 'vue' ? 'vue' : 'tsx' })

  return {
    code,
    html,
  }
}
