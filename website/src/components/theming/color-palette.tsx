import { Box, Grid, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens/index.mjs'
import { Text } from '~/components/ui/text'
import type { AccentColor, GrayColor } from './theme-options'

interface Props {
  color: GrayColor | AccentColor
  withLegend?: boolean
}

export const ColorPalette = (props: Props) => {
  const { color, withLegend } = props
  return (
    <Grid className="not-prose" columns={{ base: 6, sm: 12 }} gap="1">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((shade) => (
        <Stack key={shade} gap="1">
          <Box
            width="full"
            maxH="12"
            borderRadius="l2"
            boxShadow="xs"
            aspectRatio={1}
            style={{
              background: token.var(`colors.${color}.${shade}`),
            }}
          />
          {withLegend && (
            <Text textStyle="xs" textAlign="center">
              {shade}
            </Text>
          )}
        </Stack>
      ))}
    </Grid>
  )
}
