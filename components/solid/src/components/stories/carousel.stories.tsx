import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-solid'
import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Carousel } from '~/components/ui/carousel'
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
    <Carousel.Root slideCount={images.length}>
      <Carousel.ItemGroup>
        <Index each={images}>
          {(image, index) => (
            <Carousel.Item index={index}>
              <img
                src={image()}
                alt={`Slide ${index}`}
                style={{ height: '398px', width: '100%', 'object-fit': 'cover' }}
              />
            </Carousel.Item>
          )}
        </Index>
      </Carousel.ItemGroup>
      <Carousel.Control>
        <Carousel.PrevTrigger
          asChild={(props) => <IconButton {...props()} size="sm" variant="link" />}
          aria-label="Previous Slide"
        >
          <ChevronLeftIcon />
        </Carousel.PrevTrigger>
        <Carousel.IndicatorGroup>
          <Index each={images}>
            {(_, index) => (
              <Carousel.Indicator index={index} aria-label={`Goto slide ${index + 1}`} />
            )}
          </Index>
        </Carousel.IndicatorGroup>
        <Carousel.NextTrigger
          asChild={(props) => <IconButton {...props()} size="sm" variant="link" />}
          aria-label="Next Slide"
        >
          <ChevronRightIcon />
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}
