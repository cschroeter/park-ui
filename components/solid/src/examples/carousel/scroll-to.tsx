import { useCarouselContext } from '@ark-ui/solid'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-solid'
import { Center } from 'styled-system/jsx'
import { Button, Carousel, IconButton, Text } from '@/components/ui'

export const App = () => {
  const slides = 5

  return (
    <Carousel.Root slideCount={slides}>
      <ScrollToTrigger />
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

const ScrollToTrigger = () => {
  const carousel = useCarouselContext()

  return (
    <Button
      variant="outline"
      size="sm"
      alignSelf="start"
      onClick={() => carousel().scrollToIndex(3)}
    >
      Go to slide 4
    </Button>
  )
}
