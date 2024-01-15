import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import * as Carousel from '~/components/ui/carousel'
import { IconButton } from '~/components/ui/icon-button'

const meta: Meta = {
  title: 'Components/Carousel',
}

export default meta

export const Base = () => {
  const images = [
    'https://tinyurl.com/5b6ka8jd',
    'https://tinyurl.com/7rmccdn5',
    'https://tinyurl.com/59jxz9uu',
    'https://tinyurl.com/6jurv23t',
    'https://tinyurl.com/yp4rfum7',
  ]
  return (
    <Carousel.Root>
      <Carousel.Viewport>
        <Carousel.ItemGroup>
          {images.map((image, index) => (
            <Carousel.Item index={index}>
              <img
                src={image}
                alt={`Slide Image ${index}`}
                style={{ height: '398px', width: '100%', 'object-fit': 'cover' }}
              />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
        <Carousel.Control>
          <Carousel.PrevTrigger asChild>
            <IconButton size="sm" variant="link" aria-label="Previous Slide">
              <ChevronLeftIcon />
            </IconButton>
          </Carousel.PrevTrigger>
          <Carousel.IndicatorGroup>
            {images.map((_, index) => (
              <Carousel.Indicator index={index} aria-label={`Goto slide ${index + 1}`} />
            ))}
          </Carousel.IndicatorGroup>
          <Carousel.NextTrigger asChild>
            <IconButton size="sm" variant="link" aria-label="Next Slide">
              <ChevronRightIcon />
            </IconButton>
          </Carousel.NextTrigger>
        </Carousel.Control>
      </Carousel.Viewport>
    </Carousel.Root>
  )
}
