import { Flex, HStack, Stack } from 'styled-system/jsx'
import { type Token, token } from 'styled-system/tokens'
import { match } from 'ts-pattern'
import { Text } from '@/components/ui'
import { type AccentColor, type GrayColor, grayColors } from '~/lib/theme'

export const ColorPairings = () => {
  const data = grayColors
    .filter((grayColor) => grayColor !== 'neutral')
    .map((grayColor) => ({
      gray: grayColor,
      accentcolors: match<GrayColor, AccentColor[]>(grayColor)
        .with('mauve', () => [
          'tomato',
          'red',
          'ruby',
          'crimson',
          'pink',
          'plum',
          'purple',
          'violet',
        ])
        .with('olive', () => ['grass', 'lime'])
        .with('sage', () => ['mint', 'teal', 'jade', 'green'])
        .with('sand', () => ['yellow', 'amber', 'orange', 'brown'])
        .with('slate', () => ['iris', 'indigo', 'blue', 'sky', 'cyan'])
        .otherwise(() => []),
    }))

  return (
    <Stack className="not-prose" gap="6">
      {data.map((item, index) => (
        <Stack key={index} gap="1">
          <Flex
            justifyContent="center"
            alignItems="center"
            p="2"
            style={{
              color: token.var(`colors.${item.gray}.12`),
              background: token.var(`colors.${item.gray}.6`),
            }}
          >
            <Text textTransform="capitalize" textStyle="sm">
              {item.gray}
            </Text>
          </Flex>
          <HStack gap="1" flexWrap="wrap">
            {item.accentcolors.map((color) => (
              <Flex
                key={color}
                flex="1"
                justifyContent="center"
                alignItems="center"
                p="2"
                style={{
                  background: token.var(`colors.${color}.9`),
                }}
              >
                <Text
                  textTransform="capitalize"
                  fontWeight="medium"
                  textStyle="sm"
                  style={{
                    color: token.var(
                      match<string, Token>(color)
                        .with(
                          'amber',
                          'lime',
                          'mint',
                          'sky',
                          'yellow',
                          () => `colors.${color}.solid.fg`,
                        )
                        .otherwise(() => 'colors.white'),
                    ),
                  }}
                >
                  {color}
                </Text>
              </Flex>
            ))}
          </HStack>
        </Stack>
      ))}
    </Stack>
  )
}
