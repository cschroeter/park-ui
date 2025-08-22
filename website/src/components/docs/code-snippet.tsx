import { Box } from 'styled-system/jsx'
import { ClipboardButton } from './clipboard-button'

interface Props {
  source: {
    code: string
    html: string
  }
}

export const CodeSnippet = (props: Props) => {
  const { source } = props
  return (
    <Box className="dark" bg="gray.2" position="relative">
      <Box position="absolute" top="1" right="1">
        <ClipboardButton value={source.code} />
      </Box>
      <Box maxH="lg" overflow="auto" p="4" dangerouslySetInnerHTML={{ __html: source.html }} />
    </Box>
  )
}
