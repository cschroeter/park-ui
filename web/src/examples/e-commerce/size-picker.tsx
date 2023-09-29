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
import { product } from './data'

export const SizePicker = () => {
  return (
    <Stack gap="3">
      <Stack gap="1.5">
        <Text textStyle="sm" color="fg.emphasized" fontWeight="medium">
          Size
        </Text>
        <RadioButtonGroup size="xl">
          {product.sizes.map((option, id) => (
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

      <HStack gap="2">
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
