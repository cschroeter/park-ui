'use client'
import { Circle, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { RadioCardGroup, Text } from '@/components/ui'
import { type AccentColor, accentColors } from '~/lib/theme'

interface Props {
  accentColor: AccentColor
  onValueChange: (value: AccentColor) => void
}

export const AccentColorPicker = (props: Props) => {
  const { accentColor, onValueChange } = props
  return (
    <Stack gap="1.5" width="full">
      <Text textStyle="sm" fontWeight="medium">
        Accent Color
      </Text>

      <RadioCardGroup.Root
        value={accentColor}
        variant="outline"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        onValueChange={(e) => onValueChange(e.value as AccentColor)}
      >
        {accentColors.map((accent, id) => (
          <RadioCardGroup.Item key={id} value={accent} py="0" h="9" justifyContent="flex-start">
            <Circle
              size="3.5"
              style={{
                background: token.var(`colors.${accent}.solid.bg`),
              }}
            />
            <RadioCardGroup.ItemText textTransform="capitalize">{accent}</RadioCardGroup.ItemText>
            <RadioCardGroup.ItemHiddenInput />
          </RadioCardGroup.Item>
        ))}
      </RadioCardGroup.Root>
    </Stack>
  )
}
