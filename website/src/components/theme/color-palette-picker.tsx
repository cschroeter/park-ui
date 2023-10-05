import { Circle, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import {
  Radio,
  RadioButtonGroup,
  RadioControl,
  RadioLabel,
} from '~/components/ui/radio-button-group'
import { Text } from '~/components/ui/text'
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const ColorPalettePicker = () => {
  const { currentColorPalette, colorPalettes, updateColorPalette } = useThemeGenerator()

  return (
    <Stack gap="1.5">
      <Text textStyle="sm" fontWeight="semibold">
        Color
      </Text>
      <RadioButtonGroup
        value={currentColorPalette}
        size="sm"
        variant="outline"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        onChange={(e) => {
          updateColorPalette(
            colorPalettes.find((colorPalette) => colorPalette === e.value) ?? currentColorPalette,
          )
        }}
      >
        {colorPalettes.map((colorPalette, id) => (
          <Radio key={id} value={colorPalette} justifyContent="flex-start">
            <RadioControl />
            <RadioLabel textTransform="capitalize">
              <Circle
                size="3.5"
                style={{
                  background: token.var(`colors.${colorPalette}.9`),
                }}
              />
              {colorPalette}
            </RadioLabel>
          </Radio>
        ))}
      </RadioButtonGroup>
    </Stack>
  )
}
