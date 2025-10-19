import { HStack } from 'styled-system/jsx'
import { RadioCard } from '@/components/ui'

export const App = () => {
  return (
    <RadioCard.Root defaultValue="next">
      <RadioCard.Label>Select framework</RadioCard.Label>
      <HStack alignItems="stretch">
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
              {/* <RadioCard.ItemIndicator /> */}
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      </HStack>
    </RadioCard.Root>
  )
}

const items = [
  { value: 'next', title: 'Next.js' },
  { value: 'vite', title: 'Vite' },
  { value: 'astro', title: 'Astro' },
]
