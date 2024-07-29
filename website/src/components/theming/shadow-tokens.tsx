import { Box, Flex, Grid } from 'styled-system/jsx'
import { Text } from '~/components/ui/text'

export const ShadowTokens = () => {
  return (
    <Grid gap="4" columns={{ base: 2, sm: 4 }} className="not-prose">
      {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((shadow) => (
        <Flex
          key={shadow}
          borderRadius="l3"
          boxShadow={shadow}
          flexDirection="column-reverse"
          minH="20"
        >
          <Box px="3" py="2">
            <Text textStyle="sm">{shadow}</Text>
          </Box>
        </Flex>
      ))}
    </Grid>
  )
}
