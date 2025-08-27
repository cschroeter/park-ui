import { Box, Grid, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { Text } from '@/components/ui'
import {
  type AccentColor,
  accentColors,
  type GrayColor,
  grayColors,
  type Shade,
} from '~/lib/colors'

interface Props {
  type: 'gray' | 'accent'
}

export const ColorGrid = (props: Props) => {
  const { type } = props
  const colors = type === 'gray' ? grayColors : accentColors

  return (
    <Stack gap="5" className="not-prose">
      {colors.map((color) => (
        <Stack key={color} gap="1.5">
          <Text textStyle="sm" textTransform="capitalize" color="fg.default">
            {color}
          </Text>
          <ColorPalette color={color} />
        </Stack>
      ))}
    </Stack>
  )
}

interface ColorPaletteProps {
  color: GrayColor | AccentColor
  withLegend?: boolean
}

const ColorPalette = (props: ColorPaletteProps) => {
  const { color, withLegend } = props
  return (
    <Grid columns={{ base: 6, sm: 12 }} gap="1">
      {Array.from({ length: 12 }, (_, i) => (i + 1) as Shade).map((shade) => (
        <Stack key={shade} gap="1">
          <Box
            width="full"
            aspectRatio={1}
            maxH="12"
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
