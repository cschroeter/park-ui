import { createHighlighter } from 'shiki'
import type { SourceCode } from '~/types'

const highlighter = createHighlighter({
  themes: ['github-dark-default'],
  langs: ['tsx', 'bash', 'vue', 'svelte', 'ts'],
})

export const highlight = async ({ code, lang }: SourceCode) =>
  (await highlighter).codeToHtml(code, {
    lang,
    theme: 'github-dark-default',
  })
