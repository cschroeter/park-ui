'use client'
import { Circle, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { RadioButtonGroup } from '~/components/ui/radio-button-group'
import { Text } from '~/components/ui/text'
import { useTheme } from '~/lib/use-theme'
import { Button } from '../ui/button'

export const AccentColorPicker = () => {
  const { accentColor, syncAccentColor } = useTheme()

  return (
    <Stack gap="1.5">
      <Text textStyle="sm" fontWeight="medium">
        Accent: {accentColor}
      </Text>
      <Button onClick={() => syncAccentColor('amber')}>Change to Amber</Button>
      <Button onClick={() => syncAccentColor('red')}>Change to Red</Button>
      <Button onClick={() => syncAccentColor('blue')}>Change to Blue</Button>
      <Button onClick={() => syncAccentColor('neutral')}>Change to Neutral</Button>

      {/* <RadioButtonGroup.Root
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
        {accentColors.map((accent, id) => (
          <RadioButtonGroup.Item key={id} value={accent} justifyContent="flex-start">
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
            <RadioButtonGroup.ItemHiddenInput />
          </RadioButtonGroup.Item>
        ))}
      </RadioButtonGroup.Root> */}
    </Stack>
  )
}
