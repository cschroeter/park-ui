import { Box } from 'styled-system/jsx'
import { highlight, type Lang } from '~/lib/shiki'
import { ClipboardButton } from './clipboard-button'

interface Props {
  code: string
  lang: Lang
}

export const CodeSnippet = async (props: Props) => {
  const { code, lang } = props
  const __html = await highlight({ code, lang })

  return (
    <Box className="dark" bg="gray.2" position="relative">
      <Box position="absolute" top="1" right="1">
        <ClipboardButton value={code} />
      </Box>
      <Box maxH="lg" overflow="auto" p="4" dangerouslySetInnerHTML={{ __html }} />
    </Box>
  )
}
