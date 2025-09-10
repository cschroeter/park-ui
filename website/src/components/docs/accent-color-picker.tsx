'use client'

import { Circle, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { RadioButtonGroup, Text } from '@/components/ui'
import { type AccentColor, accentColors } from '~/lib/theme'

interface Props {
  accentColor: AccentColor
  onValueChange: (value: AccentColor) => void
}

export const AccentColorPicker = (props: Props) => {
  const { accentColor, onValueChange } = props
  return (
    <Stack gap="1.5">
      <Text textStyle="sm" fontWeight="medium">
        Accent Color
      </Text>

      <RadioButtonGroup.Root
        value={accentColor}
        size="sm"
        variant="outline"
        display="grid"
        gap="1.5"
        gridTemplateColumns="repeat(3, 1fr)"
        onValueChange={(e) => onValueChange(e.value as AccentColor)}
      >
        {accentColors.map((accent, id) => (
          <RadioButtonGroup.Item key={id} value={accent} justifyContent="flex-start">
            <RadioButtonGroup.ItemControl />
            <RadioButtonGroup.ItemText textTransform="capitalize">
              <Circle
                size="3.5"
                style={{
                  background: token.var(`colors.${accent}.solid.bg`),
                }}
              />
              {accent}
            </RadioButtonGroup.ItemText>
            <RadioButtonGroup.ItemHiddenInput />
          </RadioButtonGroup.Item>
        ))}
      </RadioButtonGroup.Root>
    </Stack>
  )
}
