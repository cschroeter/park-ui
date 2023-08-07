'use client'
import { Box, Flex, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { Typography } from '~/components/typography'
import type { ColorToken } from '~/lib/get-color-tokens'
import { useColorMode } from '~/lib/use-color-mode'

export const ColorTokenSwatch = (props: ColorToken) => {
  const { name, value, color, background } = props
  const { colorMode } = useColorMode()
  return (
    <Flex
      aspectRatio={5 / 3}
      borderRadius="lg"
      boxShadow="sm"
      p="4"
      style={{
        color: token.var(color),
        background: token.var(background),
      }}
    >
      <Stack justify="space-between" width="full">
        <Box />
        <Box>
          <Typography textStyle="sm" fontWeight="bold">
            {name}
          </Typography>
          <Typography textStyle="xs">{colorMode === 'light' ? value.base : value._dark}</Typography>
        </Box>
      </Stack>
    </Flex>
  )
}
