import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-solid'
import { Center } from 'styled-system/jsx'
import { Carousel, IconButton, Text } from '@/components/ui'

export const App = () => {
  const slides = 10

  return (
    <Carousel.Root slideCount={slides} slidesPerPage={2}>
      <Carousel.ItemGroup>
        {Array.from({ length: slides }, (_, index) => (
          <Carousel.Item index={index}>
            <Center bg="colorPalette.subtle.bg" height="40" borderRadius="l2">
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
              <ChevronLeftIcon />
            </IconButton>
          )}
        />
        <Carousel.IndicatorGroup />
        <Carousel.NextTrigger
          asChild={(triggerProps) => (
            <IconButton size="sm" variant="plain" {...triggerProps()}>
              <ChevronRightIcon />
            </IconButton>
          )}
        />
      </Carousel.Control>
    </Carousel.Root>
  )
}
