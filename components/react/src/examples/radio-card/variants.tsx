import { HStack, Stack } from 'styled-system/jsx'
import { RadioCard } from '@/components/ui'

export const App = () => {
  const variants = ['surface', 'subtle', 'outline', 'solid'] as const
  return (
    <Stack gap="8" colorPalette="red">
      {variants.map((variant) => (
        <RadioCard.Root key={variant} variant={variant} defaultValue="next">
          <HStack>
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
      ))}
    </Stack>
  )
}

const items = [
  { value: 'next', title: 'Next.js' },
  { value: 'vite', title: 'Vite' },
  { value: 'astro', title: 'Astro' },
]
