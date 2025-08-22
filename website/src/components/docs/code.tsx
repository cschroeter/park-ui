import { Box } from 'styled-system/jsx'

interface Props {
  source: {
    code: string
    html: string
  }
}

export const Code = (props: Props) => {
  const { source } = props
  return (
    <Box className="dark" bg="gray.2" position="relative">
      <Box position="absolute" top="1" right="1">
        {/* <CopyToClipboardButton content={source.code} /> */}
      </Box>
      <Box maxH="lg" overflow="auto" p="4" dangerouslySetInnerHTML={{ __html: source.html }} />
    </Box>
  )
}
