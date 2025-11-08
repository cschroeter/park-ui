'use server'
import { readFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import {
  type Framework,
  type FrameworkSourceCode,
  frameworkConfigs,
  frameworks,
} from '~/lib/frameworks'

interface Props {
  component: string
  name: string
}

export const getComponentSourceCode = async (props: Props): Promise<FrameworkSourceCode[]> => {
  const { component, name } = props

  const baseDir = join(process.cwd(), '../components')

  return Promise.all(
    frameworkConfigs.map(async ({ framework, lang }) => {
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

export const getComponentDefinitions = async (name: string): Promise<FrameworkSourceCode[]> => {
  const baseDir = join(process.cwd(), '../components')

  return Promise.all(
    frameworkConfigs.map(async ({ framework, lang }) => {
      const fileName = `${name}.${lang}`
      const path = join(baseDir, framework, 'src/components/ui', fileName)
      const code = await readFile(path, 'utf-8').catch(() => null)

      return {
        framework,
        sourceCode: code ? { code, lang } : null,
      }
    }),
  )
}

export const getRecipes = async (name: string): Promise<FrameworkSourceCode[]> => {
  const lang = 'ts'
  const path = join(process.cwd(), '../packages/preset/src/recipes', `${name}.${lang}`)
  const code = await readFile(path, 'utf-8').catch(() => null)

  return frameworks.map((framework) => ({
    framework,
    sourceCode: code
      ? { code: code.replace(/@ark-ui\/react/g, `@ark-ui/${framework}`), lang }
      : null,
  }))
}

export interface Properties {
  type: string
  isRequired: boolean
  defaultValue?: string | undefined
  description?: string | undefined
}

const sortEntries = (props: Record<string, any>): [string, Properties][] => {
  return Object.entries(props).sort(([, a], [, b]) => {
    if (a.isRequired && !b.isRequired) return -1
    if (!a.isRequired && b.isRequired) return 1
    if (a.defaultValue && !b.defaultValue) return -1
    if (!a.defaultValue && b.defaultValue) return 1
    return 0
  })
}

interface GetComponentProps {
  component: string
  part: string
  framework: Framework
}

export const getComponentProps = async (props: GetComponentProps) => {
  const { component, part, framework } = props
  const path = join(process.cwd(), 'public', 'types', framework, `${component}.json`)
  const componentTypes = JSON.parse(readFileSync(path, 'utf-8'))
  const componentType = part ? componentTypes[part] : componentTypes

  if (!componentType?.props) return null

  return sortEntries(componentType.props)
}
