import { codeToHtml } from 'shiki'

export const highlight = async (code: string, framework?: string) => {
  const lang = framework === 'vue' ? 'vue' : 'tsx'
  return codeToHtml(code, {
    lang,
    theme: 'github-dark-default',
  })
}
