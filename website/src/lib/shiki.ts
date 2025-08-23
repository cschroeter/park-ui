import { createHighlighter } from 'shiki'
import type { Lang } from '~/types'

interface Props {
  code: string
  lang: Lang
}

const highlighter = createHighlighter({
  themes: ['github-dark-default'],
  langs: ['tsx', 'bash', 'vue', 'svelte'],
})

export const highlight = async ({ code, lang }: Props) =>
  (await highlighter).codeToHtml(code, {
    lang,
    theme: 'github-dark-default',
  })
