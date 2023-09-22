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

export const GrayPalettePicker = () => {
  const { colorMode } = useColorMode()
  const { currentGrayPalette, grayPalettes, updateGrayPalette } = useThemeGenerator()

  return (
    <Stack gap="1.5">
      <Typography textStyle="sm" fontWeight="medium">
        Gray Palette
      </Typography>
      <RadioButtonGroup
        value={currentGrayPalette.value}
        size="sm"
        variant="outline"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        onChange={(e) => {
          updateGrayPalette(
            grayPalettes.find((grayPalette) => grayPalette.value === e.value) ?? currentGrayPalette,
          )
        }}
      >
        {grayPalettes.map((grayPalette, id) => (
          <Radio
            key={id}
            value={grayPalette.value}
            _checked={{ borderColor: 'border.outline', boxShadow: 'outline' }}
            justifyContent="flex-start"
          >
            <RadioControl />
            <RadioLabel>
              <Circle
                size="3.5"
                style={{
                  background: token.var(
                    `colors.${grayPalette.value}.${colorMode === 'dark' ? '500' : '400'}`,
                  ),
                }}
              />
              {grayPalette.label}
            </RadioLabel>
          </Radio>
        ))}
      </RadioButtonGroup>
    </Stack>
  )
}
