import { Box, Flex, Grid } from 'styled-system/jsx'
import { Text } from '@/components/ui'

export const ShadowTokens = () => {
  return (
    <Grid className="not-prose" minChildWidth="20" gap="4">
      {['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((shadow) => (
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
