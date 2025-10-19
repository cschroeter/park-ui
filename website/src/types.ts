export type Framework = 'react' | 'solid' | 'svelte' | 'vue'
export type Lang = 'tsx' | 'bash' | 'vue' | 'svelte' | 'ts'

export interface SourceCode {
  lang: Lang
  code: string
}

export interface FrameworkSourceCode {
  framework: Framework
  sourceCode: SourceCode | null
}
