import { codeToHtml } from 'shiki'

type Framework = 'react' | 'solid' | 'vue'

export const highlight = async (code: string, framework?: Framework) => {
  const lang = framework === 'vue' ? 'vue' : 'tsx'
  return codeToHtml(code, {
    lang,
    theme: 'github-dark-default',
  })
}
