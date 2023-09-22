import { Circle, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import {
  Radio,
  RadioButtonGroup,
  RadioControl,
  RadioLabel,
} from '~/components/ui/radio-button-group'
import { Typography } from '~/components/ui/typography'
import { useColorMode } from '~/lib/use-color-mode'
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const ColorPalettePicker = () => {
  const { colorMode } = useColorMode()
  const { currentColorPalette, colorPalettes, updateColorPalette } = useThemeGenerator()

  return (
    <Stack gap="1.5">
      <Typography textStyle="sm" fontWeight="medium">
        Color
      </Typography>
      <RadioButtonGroup
        value={currentColorPalette.value}
        size="sm"
        variant="outline"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        onChange={(e) => {
          updateColorPalette(
            colorPalettes.find((colorPalette) => colorPalette.value === e.value) ??
              currentColorPalette,
          )
        }}
      >
        {colorPalettes.map((colorPalette, id) => (
          <Radio key={id} value={colorPalette.value} justifyContent="flex-start">
            <RadioControl />
            <RadioLabel>
              <Circle
                size="3.5"
                style={{
                  background: token.var(
                    `colors.${colorPalette.value}.${colorMode === 'light' ? '600' : '300'}`,
                  ),
                }}
              />
              {colorPalette.label}
            </RadioLabel>
          </Radio>
        ))}
      </RadioButtonGroup>
    </Stack>
  )
}
