export type Framework = 'react' | 'solid' | 'svelte' | 'vue'
export type Lang = 'tsx' | 'bash' | 'vue' | 'svelte' | 'ts'

export interface SourceCode {
  lang: Lang
  code: string
}

export interface SourceFile {
  fileName: string
  sourceCode: SourceCode
}

export interface CodeExample {
  framework: Framework
  sourceCode?: SourceCode | null
}
