export type Framework = (typeof frameworks)[number]
export const frameworks = ['react', 'solid'] as const

export type Lang = 'tsx' | 'bash' | 'ts'

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
] as const
