import { codeToHtml } from 'shiki'

export const highlight = async (code: string) => {
  return codeToHtml(code, {
    lang: 'tsx',
    theme: 'github-dark-default',
  })
}
