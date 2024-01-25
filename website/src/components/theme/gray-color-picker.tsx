import { Circle, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { RadioButtonGroup, Text } from '~/components/ui'
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
        gap="1.5"
        gridTemplateColumns="repeat(3, 1fr)"
        onValueChange={(e) =>
          updateGrayColor(grayColors.find((gray) => gray === e.value) ?? currentGrayColor)
        }
      >
        {grayColors.map((gray) => (
          <RadioButtonGroup.Item
            key={gray}
            value={gray}
            _checked={{
              borderColor: 'border.outline',
              boxShadow: '0 0 0 1px var(--colors-border-outline)',
            }}
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
