import { createHighlighter } from 'shiki'

const highlighter = createHighlighter({
  themes: ['github-dark-default'],
  langs: ['tsx'],
})

interface Props {
  code: string
  lang: 'tsx' | 'vue'
}

export const highlight = async ({ code, lang }: Props) =>
  (await highlighter).codeToHtml(code, {
    lang,
    theme: 'github-dark-default',
  })
