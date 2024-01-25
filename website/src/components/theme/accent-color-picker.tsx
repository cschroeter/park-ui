import { Circle, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { RadioButtonGroup, Text } from '~/components/ui'
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const AccentColorPicker = () => {
  const { currentAccentColor, accentColors, updateAccentColor } = useThemeGenerator()

  return (
    <Stack gap="1.5">
      <Text textStyle="sm" fontWeight="medium">
        Accent
      </Text>
      <RadioButtonGroup.Root
        value={currentAccentColor}
        size="sm"
        variant="outline"
        display="grid"
        gap="1.5"
        gridTemplateColumns="repeat(3, 1fr)"
        onValueChange={(e) =>
          updateAccentColor(accentColors.find((accent) => accent === e.value) ?? currentAccentColor)
        }
      >
        {accentColors.map((accent) => (
          <RadioButtonGroup.Item key={accent} value={accent} justifyContent="flex-start">
            <RadioButtonGroup.ItemControl />
            <RadioButtonGroup.ItemText textTransform="capitalize">
              <Circle
                size="3.5"
                style={{
                  background: token.var(`colors.${accent}.9`),
                }}
              />
              {accent}
            </RadioButtonGroup.ItemText>
          </RadioButtonGroup.Item>
        ))}
      </RadioButtonGroup.Root>
    </Stack>
  )
}
