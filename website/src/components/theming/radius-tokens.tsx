import { createRadii } from '@park-ui/panda-preset/utils'
import { Flex, Grid } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { Text } from '~/components/ui/text'

export const RadiusTokens = () => {
  return (
    <Grid className="not-prose" minChildWidth="80px" gap="4">
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => {
        const { l1, l2, l3 } = createRadii(size)
        return (
          <Flex
            key={size}
            height="20"
            bg="bg.default"
            p="2"
            borderWidth="1px"
            flex="1"
            style={{
              // @ts-expect-error
              borderRadius: token.var(l3.value.replace('{', '').replace('}', '')),
            }}
          >
            <Flex
              bg="bg.subtle"
              borderWidth="1px"
              p="2"
              flex="1"
              style={{
                // @ts-expect-error
                borderRadius: token.var(l2.value.replace('{', '').replace('}', '')),
              }}
            >
              <Flex
                bg="bg.muted"
                borderWidth="1px"
                p="2"
                flex="1"
                justify="center"
                alignItems="center"
                style={{
                  // @ts-expect-error
                  borderRadius: token.var(l1.value.replace('{', '').replace('}', '')),
                }}
              >
                <Text textStyle="sm" textAlign="center">
                  {size}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        )
      })}
    </Grid>
  )
}
