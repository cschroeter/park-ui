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

export const GrayColorPicker = () => {
  const { currentGrayColor, grayColors, updateGrayColor } = useThemeGenerator()

  return (
    <Stack gap="1.5">
      <Text textStyle="sm" fontWeight="medium">
        Gray Color
      </Text>
      <RadioButtonGroup
        value={currentGrayColor}
        size="sm"
        variant="outline"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        onChange={(e) => {
          updateGrayColor(grayColors.find((gray) => gray === e.value) ?? currentGrayColor)
        }}
      >
        {grayColors.map((gray, id) => (
          <Radio
            key={id}
            value={gray}
            _checked={{ borderColor: 'border.outline', boxShadow: 'outline' }}
            justifyContent="flex-start"
          >
            <RadioControl />
            <RadioLabel textTransform="capitalize">
              <Circle
                size="3.5"
                style={{
                  background: token.var(`colors.${gray}.9`),
                }}
              />
              {gray}
            </RadioLabel>
          </Radio>
        ))}
      </RadioButtonGroup>
    </Stack>
  )
}
