import { Box, Flex, Grid, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { type AccentColor, accentColors, type GrayColor, grayColors, type Shade } from '~/lib/theme'

interface Props {
  type: 'gray' | 'accent'
}

export const ColorGrid = (props: Props) => {
  const { type } = props
  const colors = type === 'gray' ? grayColors : accentColors

  return (
    <Stack gap={{ base: '6', sm: '1' }} className="not-prose">
      {colors.map((color) => (
        <ColorPalette key={color} color={color} />
      ))}
    </Stack>
  )
}

interface ColorPaletteProps {
  color: GrayColor | AccentColor
}

const ColorPalette = (props: ColorPaletteProps) => {
  const { color } = props
  return (
    <Stack direction={{ base: 'column', sm: 'row' }} gap="1.5">
      <Flex
        alignItems="center"
        textTransform="capitalize"
        w="20"
        textStyle="sm"
        fontWeight="medium"
        color="fg.muted"
      >
        {color}
      </Flex>
      <Grid columns={{ base: 6, sm: 12 }} gap="1" width="full">
        {Array.from({ length: 12 }, (_, i) => (i + 1) as Shade).map((shade) => (
          <Box
            key={shade}
            aspectRatio={8 / 7}
            minW="10"
            style={{
              background: token.var(`colors.${color}.${shade}`),
            }}
          />
        ))}
      </Grid>
    </Stack>
  )
}
