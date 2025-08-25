import { Box } from 'styled-system/jsx'
import { highlight } from '~/lib/shiki'
import type { SourceCode } from '~/types'
import { ClipboardButton } from './clipboard-button'

interface Props {
  sourceCode: SourceCode | null
}

export const CodeSnippet = async (props: Props) => {
  const { sourceCode } = props
  if (!sourceCode) {
    return null
  }

  const __html = await highlight(sourceCode)

  return (
    <Box className="dark" bg="gray.2" position="relative" borderRadius="l3">
      <Box position="absolute" top="1" right="1">
        <ClipboardButton value={sourceCode.code} />
      </Box>
      <Box maxH="lg" overflow="auto" p="4" dangerouslySetInnerHTML={{ __html }} />
    </Box>
  )
}
