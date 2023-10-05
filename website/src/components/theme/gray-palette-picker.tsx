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

export const GrayPalettePicker = () => {
  const { currentGrayPalette, grayPalettes, updateGrayPalette } = useThemeGenerator()

  return (
    <Stack gap="1.5">
      <Text textStyle="sm" fontWeight="semibold">
        Gray Palette
      </Text>
      <RadioButtonGroup
        value={currentGrayPalette}
        size="sm"
        variant="outline"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        onChange={(e) => {
          updateGrayPalette(
            grayPalettes.find((grayPalette) => grayPalette === e.value) ?? currentGrayPalette,
          )
        }}
      >
        {grayPalettes.map((grayPalette, id) => (
          <Radio
            key={id}
            value={grayPalette}
            _checked={{ borderColor: 'border.outline', boxShadow: 'outline' }}
            justifyContent="flex-start"
          >
            <RadioControl />
            <RadioLabel textTransform="capitalize">
              <Circle
                size="3.5"
                style={{
                  background: token.var(`colors.${grayPalette}.9`),
                }}
              />
              {grayPalette}
            </RadioLabel>
          </Radio>
        ))}
      </RadioButtonGroup>
    </Stack>
  )
}
