import { createHighlighter } from 'shiki'

export type Lang = 'tsx' | 'bash' | 'vue'

interface Props {
  code: string
  lang: Lang
}

const highlighter = createHighlighter({
  themes: ['github-dark-default'],
  langs: ['tsx', 'bash', 'vue'],
})

export const highlight = async ({ code, lang }: Props) =>
  (await highlighter).codeToHtml(code, {
    lang,
    theme: 'github-dark-default',
  })
