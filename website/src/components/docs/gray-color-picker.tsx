'use client'

import { Circle, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { RadioButtonGroup, Text } from '@/components/ui'
import { type GrayColor, grayColors } from '~/lib/theme'

interface Props {
  grayColor: GrayColor
  onValueChange: (value: GrayColor) => void
}

export const GrayColorPicker = (props: Props) => {
  const { grayColor, onValueChange } = props

  return (
    <Stack gap="1.5">
      <Text textStyle="sm" fontWeight="medium">
        Gray Color
      </Text>
      <RadioButtonGroup.Root
        value={grayColor}
        size="sm"
        variant="outline"
        display="grid"
        gap="1.5"
        gridTemplateColumns="repeat(3, 1fr)"
        onValueChange={(e) => onValueChange(e.value as GrayColor)}
      >
        {grayColors.map((gray, id) => (
          <RadioButtonGroup.Item
            key={id}
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
            <RadioButtonGroup.ItemHiddenInput />
          </RadioButtonGroup.Item>
        ))}
      </RadioButtonGroup.Root>
    </Stack>
  )
}
