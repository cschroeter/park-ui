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

export const AccentColorPicker = () => {
  const { currentAccentColor, accentColors, updateAccentColor } = useThemeGenerator()

  return (
    <Stack gap="1.5">
      <Text textStyle="sm" fontWeight="medium">
        Accent
      </Text>
      <RadioButtonGroup
        value={currentAccentColor}
        size="sm"
        variant="outline"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        onChange={(e) => {
          updateAccentColor(accentColors.find((accent) => accent === e.value) ?? currentAccentColor)
        }}
      >
        {accentColors.map((accent, id) => (
          <Radio key={id} value={accent} justifyContent="flex-start">
            <RadioControl />
            <RadioLabel textTransform="capitalize">
              <Circle
                size="3.5"
                style={{
                  background: token.var(`colors.${accent}.9`),
                }}
              />
              {accent}
            </RadioLabel>
          </Radio>
        ))}
      </RadioButtonGroup>
    </Stack>
  )
}
