'use client'
import { Circle, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { RadioCardGroup, Text } from '@/components/ui'
import { type GrayColor, grayColors } from '~/lib/theme'

interface Props {
  grayColor: GrayColor
  onValueChange: (value: GrayColor) => void
}

export const GrayColorPicker = (props: Props) => {
  const { grayColor, onValueChange } = props

  return (
    <Stack gap="1.5" width="full">
      <Text textStyle="sm" fontWeight="medium">
        Gray Color
      </Text>
      <RadioCardGroup.Root
        value={grayColor}
        variant="outline"
        display="grid"
        gap="1.5"
        gridTemplateColumns="repeat(3, 1fr)"
        onValueChange={(e) => onValueChange(e.value as GrayColor)}
      >
        {grayColors.map((gray, id) => (
          <RadioCardGroup.Item
            key={id}
            value={gray}
            py="0"
            h="9"
            justifyContent="flex-start"
            _checked={{
              boxShadowColor: 'gray.9',
              borderColor: 'gray.9',
            }}
          >
            <Circle
              size="3.5"
              style={{
                background: token.var(`colors.${gray}.9`),
              }}
            />
            <RadioCardGroup.ItemText textTransform="capitalize">{gray}</RadioCardGroup.ItemText>
            <RadioCardGroup.ItemHiddenInput />
          </RadioCardGroup.Item>
        ))}
      </RadioCardGroup.Root>
    </Stack>
  )
}
