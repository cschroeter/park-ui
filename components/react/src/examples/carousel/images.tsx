import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Carousel, IconButton, Image } from '@/components/ui'

export const App = () => {
  return (
    <Carousel.Root slideCount={images.length} inline>
      <Carousel.ItemGroup borderRadius="l3">
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index}>
            <Image src={image} width="full" height="80" />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
      <Carousel.Control>
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="plain">
            <ChevronLeftIcon />
          </IconButton>
        </Carousel.PrevTrigger>
        <Carousel.IndicatorGroup />
        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="plain">
            <ChevronRightIcon />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}

const images = [
  'https://tinyurl.com/5b6ka8jd',
  'https://tinyurl.com/7rmccdn5',
  'https://tinyurl.com/59jxz9uu',
  'https://tinyurl.com/6jurv23t',
  'https://tinyurl.com/yp4rfum7',
]
