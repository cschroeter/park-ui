import { createHighlighter } from 'shiki'

const highlighter = createHighlighter({
  themes: ['github-dark-default'],
  langs: ['vue', 'tsx', 'bash', 'json', 'txt'],
})

export const highlight = async (code: string, lang: string) =>
  (await highlighter).codeToHtml(code, {
    lang,
    theme: 'github-dark-default',
  })
