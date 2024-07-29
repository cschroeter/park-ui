import { Box, Flex, Grid } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { Text } from '~/components/ui/text'
import { getColorTokens } from '~/lib/get-color-tokens'

interface Props {
  type: 'bg' | 'fg' | 'accent'
}

export const ColorTokens = (props: Props) => {
  const { type } = props
  const colorTokens = getColorTokens({ type })

  return (
    <Grid gap="4" columns={{ base: 2, sm: 4 }} className="not-prose">
      {colorTokens.map((colorToken, id) => (
        <Flex
          key={id}
          borderRadius="l3"
          boxShadow="sm"
          flexDirection="column-reverse"
          minH="20"
          style={{
            color: token.var(colorToken.color),
            background: token.var(colorToken.background),
          }}
        >
          <Box px="3" py="2">
            <Text textStyle="sm">{colorToken.name}</Text>
          </Box>
        </Flex>
      ))}
    </Grid>
  )
}
