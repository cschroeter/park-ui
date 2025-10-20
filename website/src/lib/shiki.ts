import { createHighlighter } from 'shiki'

const highlighter = createHighlighter({
  themes: ['github-dark-default'],
  langs: ['vue', 'tsx', 'bash', 'json', 'txt', 'markdown', 'jsx', 'diff'],
})

export const highlight = async (code: string, lang: string) =>
  (await highlighter).codeToHtml(code, {
    lang,
    theme: 'github-dark-default',
  })
