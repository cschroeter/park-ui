import { Box, Flex, type FlexProps } from 'styled-system/jsx'
import { highlight, type HighlightOptions } from '~/lib/shiki'
import { CopyCodeButton } from './copy-code-button'

type Props = HighlightOptions & FlexProps

export const Code = async (props: Props) => {
  const { code, lang = 'typescript', ...flexProps } = props

  return (
    <Box className="dark" position="relative" bg="bg.subtle" borderRadius="l3" borderWidth="1px">
      <Box position="absolute" top="2" right="2" zIndex={1}>
        <CopyCodeButton content={code} />
      </Box>
      <Flex overflow="auto" p="4" {...flexProps}>
        <Box
          dangerouslySetInnerHTML={{
            __html: await highlight({ code, lang }),
          }}
        />
      </Flex>
    </Box>
  )
}
