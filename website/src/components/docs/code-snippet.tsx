import { cache } from 'react'
import { codeToHtml } from 'shiki'
import { Box, type BoxProps } from 'styled-system/jsx'
import type { SourceCode } from '~/types'
import { ClipboardButton } from './clipboard-button'

interface Props extends BoxProps {
  sourceCode: SourceCode | null
}

const getCachedHighlightedCode = cache(async (code: string, lang: string) => {
  return codeToHtml(code, {
    lang,
    theme: 'github-dark-default',
  })
})

export const CodeSnippet = async (props: Props) => {
  const { sourceCode, ...rootProps } = props
  if (!sourceCode) {
    return null
  }

  const { code, lang } = sourceCode

  const __html = await getCachedHighlightedCode(code, lang)

  return (
    <Box
      className="dark not-prose"
      bg="gray.2"
      borderRadius="l3"
      borderWidth="1px"
      position="relative"
      my="6"
      {...rootProps}
    >
      <Box position="absolute" top="1" right="1">
        <ClipboardButton value={sourceCode.code} />
      </Box>
      <Box maxH="lg" overflow="auto" px="4" py="3" dangerouslySetInnerHTML={{ __html }} />
    </Box>
  )
}
