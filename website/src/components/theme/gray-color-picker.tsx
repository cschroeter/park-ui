import { Circle, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { RadioButtonGroup } from '~/components/ui/radio-button-group'
import { Text } from '~/components/ui/text'
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const GrayColorPicker = () => {
  const { currentGrayColor, grayColors, updateGrayColor } = useThemeGenerator()

  return (
    <Stack gap="1.5">
      <Text textStyle="sm" fontWeight="medium">
        Gray Color
      </Text>
      <RadioButtonGroup.Root
        value={currentGrayColor}
        size="sm"
        variant="outline"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        onValueChange={(e) =>
          updateGrayColor(grayColors.find((gray) => gray === e.value) ?? currentGrayColor)
        }
      >
        {grayColors.map((gray, id) => (
          <RadioButtonGroup.Item
            key={id}
            value={gray}
            _checked={{ borderColor: 'border.outline', boxShadow: 'outline' }}
            justifyContent="flex-start"
          >
            <RadioButtonGroup.ItemControl />
            <RadioButtonGroup.ItemText textTransform="capitalize">
              <Circle
                size="3.5"
                style={{
                  background: token.var(`colors.${gray}.9`),
                }}
              />
              {gray}
            </RadioButtonGroup.ItemText>
          </RadioButtonGroup.Item>
        ))}
      </RadioButtonGroup.Root>
    </Stack>
  )
}
