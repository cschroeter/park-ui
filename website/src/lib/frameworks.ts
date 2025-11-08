import { cookies } from 'next/headers'
import { z } from 'zod'

export type Framework = (typeof frameworks)[number]
export const frameworks = ['react', 'solid', 'vue', 'svelte'] as const

export type Lang = 'tsx' | 'bash' | 'vue' | 'svelte' | 'ts'

export interface SourceCode {
  lang: Lang
  code: string
}

export interface FrameworkSourceCode {
  framework: Framework
  sourceCode: SourceCode | null
}

export interface FrameworkConfig {
  framework: Framework
  lang: Lang
}

export const frameworkConfigs: FrameworkConfig[] = [
  {
    framework: 'react',
    lang: 'tsx',
  },
  {
    framework: 'solid',
    lang: 'tsx',
  },
  {
    framework: 'svelte',
    lang: 'svelte',
  },
  {
    framework: 'vue',
    lang: 'vue',
  },
] as const

const cookieSchema = z.object({
  state: z.object({
    framework: z.enum(frameworks),
  }),
})

export const getFramework = async (): Promise<Framework> => {
  const cookieStore = await cookies()
  const cookieValue = cookieStore.get('park-ui')?.value

  if (!cookieValue) return 'react'

  const result = cookieSchema.safeParse(JSON.parse(cookieValue))
  return result.success ? result.data.state.framework : 'react'
}
