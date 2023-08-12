import { Circle, Grid, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { Button } from '~/components/ui/button'
import { Typography } from '~/components/ui/typography'
import { useColorMode } from '~/lib/use-color-mode'
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const ColorPalettePicker = () => {
  const { colorMode } = useColorMode()
  const { currentColorPalete, colorPlaettes, updateColorPalette } = useThemeGenerator()

  return (
    <Stack gap="1.5">
      <Typography textStyle="sm" fontWeight="semibold">
        Color
      </Typography>
      <Grid columns={3}>
        {colorPlaettes.map((colorPalette, id) => (
          <Button
            key={id}
            variant="secondary"
            size="sm"
            justifyContent="start"
            onClick={() => updateColorPalette(colorPalette)}
            {...(currentColorPalete.value === colorPalette.value
              ? { 'data-selected': 'true' }
              : {})}
            _selected={{
              background: 'initial',
              color: 'fg.default',
              borderColor: 'border.accent',
              boxShadow: 'accent',
            }}
          >
            <Circle
              width="3.5"
              height="3.5"
              style={{
                background: token.var(
                  `colors.${colorPalette.value}.${colorMode === 'light' ? '600' : '300'}`,
                ),
              }}
            />
            {colorPalette.label}
          </Button>
        ))}
      </Grid>
    </Stack>
  )
}
