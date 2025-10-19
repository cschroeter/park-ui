import { Match } from 'effect'
import { Flex, Grid } from 'styled-system/jsx'
import { type Token, token } from 'styled-system/tokens'
import { Text } from '@/components/ui'

export const BorderRadiusTokens = () => {
  return (
    <Grid className="not-prose" minChildWidth="20" gap="4">
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => {
        const { l1, l2, l3 } = createRadii(size)
        return (
          <Flex
            borderWidth="1px"
            key={size}
            height="20"
            p="2"
            flex="1"
            style={{
              borderRadius: token.var(l3 as unknown as Token),
            }}
          >
            <Flex
              borderWidth="1px"
              p="2"
              flex="1"
              bg="gray.2"
              style={{
                borderRadius: token.var(l2 as unknown as Token),
              }}
            >
              <Flex
                borderWidth="1px"
                p="2"
                flex="1"
                justify="center"
                alignItems="center"
                bg="gray.3"
                style={{
                  borderRadius: token.var(l1 as unknown as Token),
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

export type Radii = (typeof borderRadii)[number]
export const borderRadii = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

const createRadii = (radii: Radii) =>
  Match.value(radii).pipe(
    Match.when('xs', () => ({
      l1: 'radii.2xs',
      l2: 'radii.xs',
      l3: 'radii.sm',
    })),
    Match.when('sm', () => ({
      l1: 'radii.xs',
      l2: 'radii.sm',
      l3: 'radii.md',
    })),
    Match.when('md', () => ({
      l1: 'radii.sm',
      l2: 'radii.md',
      l3: 'radii.lg',
    })),
    Match.when('lg', () => ({
      l1: 'radii.md',
      l2: 'radii.lg',
      l3: 'radii.xl',
    })),
    Match.when('xl', () => ({
      l1: 'radii.lg',
      l2: 'radii.xl',
      l3: 'radii.2xl',
    })),
    Match.when('2xl', () => ({
      l1: 'radii.xl',
      l2: 'radii.2xl',
      l3: 'radii.3xl',
    })),
    Match.orElse(() => ({
      l1: 'radii.none',
      l2: 'radii.none',
      l3: 'radii.none',
    })),
  )
