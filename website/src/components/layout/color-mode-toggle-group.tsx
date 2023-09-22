import { Stack } from 'styled-system/jsx'
import {
  Radio,
  RadioButtonGroup,
  RadioControl,
  RadioLabel,
} from '~/components/ui/radio-button-group'
import { Typography } from '~/components/ui/typography'
import { useColorMode } from '~/lib/use-color-mode'

export const ColorModeButtonGroup = () => {
  const { colorMode, toggle } = useColorMode()

  return (
    <Stack gap="1.5">
      <Typography textStyle="sm" fontWeight="medium">
        Color Mode
      </Typography>
      <RadioButtonGroup
        value={colorMode}
        size="sm"
        variant="outline"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        onChange={toggle}
      >
        {['light', 'dark', 'system'].map((mode, id) => (
          <Radio key={id} value={mode} justifyContent="flex-start">
            <RadioControl />
            <RadioLabel>{mode}</RadioLabel>
          </Radio>
        ))}
      </RadioButtonGroup>
    </Stack>
  )
}
