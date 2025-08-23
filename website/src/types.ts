export type Framework = 'react' | 'solid' | 'svelte' | 'vue'
export type Lang = 'tsx' | 'bash' | 'vue' | 'svelte'
export interface CodeExample {
  framework: Framework
  lang: Lang
  code: string | null
}
