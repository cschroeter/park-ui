import { Circle, Grid, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { Button } from '~/components/ui/button'
import { Typography } from '~/components/ui/typography'
import { useColorMode } from '~/lib/use-color-mode'
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const GrayPalettePicker = () => {
  const { colorMode } = useColorMode()
  const { currentGrayPalette, grayPalettes, updateGrayPalette } = useThemeGenerator()

  return (
    <Stack gap="1.5">
      <Typography textStyle="sm" fontWeight="semibold">
        Gray Palette
      </Typography>
      <Grid columns={3}>
        {grayPalettes.map((grayPalette, id) => (
          <Button
            key={id}
            variant="secondary"
            size="sm"
            justifyContent="start"
            onClick={() => updateGrayPalette(grayPalette)}
            {...(currentGrayPalette.value === grayPalette.value ? { 'data-selected': 'true' } : {})}
            _selected={{
              background: 'initial',
              color: 'fg.default',
              borderColor: 'border.outline',
              boxShadow: 'outline',
            }}
          >
            <Circle
              width="3.5"
              height="3.5"
              style={{
                background: token.var(
                  `colors.${grayPalette.value}.${colorMode === 'dark' ? '500' : '400'}`,
                ),
              }}
            />
            {grayPalette.label}
          </Button>
        ))}
      </Grid>
    </Stack>
  )
}
