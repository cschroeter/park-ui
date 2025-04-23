import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-solid'
import { For } from 'solid-js'
import { Carousel } from '~/components/ui/carousel'
import { IconButton } from '~/components/ui/icon-button'

export const Demo = (props: Carousel.RootProps) => {
  const images = [
    'https://tinyurl.com/5b6ka8jd',
    'https://tinyurl.com/7rmccdn5',
    'https://tinyurl.com/59jxz9uu',
    'https://tinyurl.com/6jurv23t',
    'https://tinyurl.com/yp4rfum7',
  ]
  return (
    <Carousel.Root {...props}>
      <Carousel.ItemGroup>
        <For each={images}>
          {(image, index) => (
            <Carousel.Item index={index()}>
              <img
                src={image}
                alt={`Slide ${index()}`}
                style={{ height: '398px', width: '100%', 'object-fit': 'cover' }}
              />
            </Carousel.Item>
          )}
        </For>
      </Carousel.ItemGroup>
      <Carousel.Control>
        <Carousel.PrevTrigger
          asChild={(triggerProps) => (
            <IconButton {...triggerProps()} size="sm" variant="link" aria-label="Previous Slide">
              <ChevronLeftIcon />
            </IconButton>
          )}
        />
        <Carousel.IndicatorGroup>
          <For each={images}>
            {(_, index) => (
              <Carousel.Indicator index={index()} aria-label={`Goto slide ${index() + 1}`} />
            )}
          </For>
        </Carousel.IndicatorGroup>
        <Carousel.NextTrigger
          asChild={(triggerProps) => (
            <IconButton {...triggerProps()} size="sm" variant="link" aria-label="Next Slide">
              <ChevronRightIcon />
            </IconButton>
          )}
        />
      </Carousel.Control>
    </Carousel.Root>
  )
}
