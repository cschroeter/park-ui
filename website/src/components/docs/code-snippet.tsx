import { codeToHtml } from 'shiki'
import { Box, type BoxProps } from 'styled-system/jsx'
import { ScrollArea } from '@/components/ui'
import type { SourceCode } from '~/lib/frameworks'
import { ClipboardButton } from './clipboard-button'

interface Props extends BoxProps {
  sourceCode: SourceCode | null
}

async function getCachedHighlightedCode(code: string, lang: string) {
  'use cache'
  return codeToHtml(code, {
    lang,
    theme: 'github-dark-default',
  })
}

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
      my="4"
      {...rootProps}
    >
      <Box position="absolute" top="1" right="1" zIndex="1">
        <ClipboardButton value={sourceCode.code} />
      </Box>
      <ScrollArea.Root maxH="lg" style={{ ['--scrollbar-margin' as string]: '2px' }}>
        <ScrollArea.Viewport>
          <ScrollArea.Content px="4" py="3" dangerouslySetInnerHTML={{ __html }} />
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </Box>
  )
}
