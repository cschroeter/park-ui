import { RulerIcon } from 'lucide-react'
import { HStack, Stack } from 'styled-system/jsx'
import { Icon } from '~/components/ui/icon'
import {
  Radio,
  RadioButtonGroup,
  RadioControl,
  RadioLabel,
} from '~/components/ui/radio-button-group'
import { Text } from '~/components/ui/text'

export const SizePicker = () => {
  const sizes = [
    { size: '38' },
    { size: '39', disabled: true },
    { size: '40' },
    { size: '41' },
    { size: '42', disabled: true },
    { size: '43' },
    { size: '44' },
  ]
  return (
    <Stack gap="3">
      <Stack gap="1.5">
        <Text textStyle="sm" color="fg.emphasized" fontWeight="medium">
          Size
        </Text>
        <RadioButtonGroup>
          {sizes.map((option, id) => (
            <Radio
              key={id}
              value={option.size}
              disabled={option.disabled}
              px="0"
              _disabled={{
                backgroundImage:
                  'linear-gradient(315deg, transparent 49%, var(--colors-border-disabled) 49%, var(--colors-border-disabled) 51%, transparent 51%)',
              }}
            >
              <RadioControl />
              <RadioLabel>{option.size}</RadioLabel>
            </Radio>
          ))}
        </RadioButtonGroup>
      </Stack>

      <HStack gap="2" color="fg.muted">
        <Icon size="sm" color="fg.muted">
          <RulerIcon />
        </Icon>
        <Text textStyle="sm" textDecoration="underline">
          View size guide
        </Text>
      </HStack>
    </Stack>
  )
}
