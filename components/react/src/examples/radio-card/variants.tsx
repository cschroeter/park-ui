import { HStack, Stack } from 'styled-system/jsx'
import { RadioCard } from '@/components/ui'

export const App = () => {
  const variants = ['solid', 'surface', 'subtle', 'outline'] as const
  return (
    <Stack gap="4">
      {variants.map((variant) => (
        <RadioCard.Root key={variant} variant={variant} defaultValue="react">
          <HStack>
            {items.map((item) => (
              <RadioCard.Item key={item.value} value={item.value}>
                <RadioCard.ItemHiddenInput />
                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                <RadioCard.ItemControl />
              </RadioCard.Item>
            ))}
          </HStack>
        </RadioCard.Root>
      ))}
    </Stack>
  )
}

const items = [
  { value: 'react', title: 'React' },
  { value: 'solid', title: 'Solid' },
  { value: 'vue', title: 'Vue' },
]
