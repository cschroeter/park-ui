import { createHighlighter } from 'shiki'

const highlighter = createHighlighter({
  themes: ['github-dark-default'],
  langs: ['vue', 'tsx'],
})

export const highlight = async (code: string, framework?: string) =>
  (await highlighter).codeToHtml(code, {
    lang: framework === 'vue' ? 'vue' : 'tsx',
    theme: 'github-dark-default',
  })
