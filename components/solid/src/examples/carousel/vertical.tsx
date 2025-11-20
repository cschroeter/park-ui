import { ChevronDownIcon, ChevronUpIcon } from 'lucide-solid'
import { Center } from 'styled-system/jsx'
import { Carousel, IconButton, Text } from '@/components/ui'

export const App = () => {
  const slides = 5

  return (
    <Carousel.Root slideCount={slides} orientation="vertical">
      <Carousel.ItemGroup>
        {Array.from({ length: slides }, (_, index) => (
          <Carousel.Item index={index}>
            <Center bg="colorPalette.subtle.bg" borderRadius="l2" height="full" flex="1">
              <Text textStyle="3xl" fontWeight="semibold" color="colorPalette.subtle.fg">
                {index + 1}
              </Text>
            </Center>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
      <Carousel.Control>
        <Carousel.PrevTrigger
          asChild={(triggerProps) => (
            <IconButton size="sm" variant="plain" {...triggerProps()}>
              <ChevronUpIcon />
            </IconButton>
          )}
        />
        <Carousel.IndicatorGroup />
        <Carousel.NextTrigger
          asChild={(triggerProps) => (
            <IconButton size="sm" variant="plain" {...triggerProps()}>
              <ChevronDownIcon />
            </IconButton>
          )}
        />
      </Carousel.Control>
    </Carousel.Root>
  )
}
