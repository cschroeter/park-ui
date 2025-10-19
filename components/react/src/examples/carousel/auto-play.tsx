import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Center } from 'styled-system/jsx'
import { Carousel, IconButton, Text } from '@/components/ui'

export const App = () => {
  const slides = 5

  return (
    <Carousel.Root slideCount={slides} autoplay={{ delay: 2000 }} loop>
      <Carousel.ItemGroup>
        {Array.from({ length: slides }, (_, index) => (
          <Carousel.Item key={index} index={index}>
            <Center bg="colorPalette.subtle.bg" height="40" borderRadius="l2">
              <Text textStyle="3xl" fontWeight="semibold" color="colorPalette.subtle.fg">
                {index + 1}
              </Text>
            </Center>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
      <Carousel.Control>
        <Carousel.PrevTrigger asChild>
          <IconButton size="sm" variant="plain">
            <ChevronLeftIcon />
          </IconButton>
        </Carousel.PrevTrigger>
        <Carousel.IndicatorGroup />
        <Carousel.NextTrigger asChild>
          <IconButton size="sm" variant="plain">
            <ChevronRightIcon />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}
