import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-solid'
import { For } from 'solid-js'
import { Carousel, IconButton, Image } from '@/components/ui'

export const App = () => {
  return (
    <Carousel.Root slideCount={images.length} inline>
      <Carousel.ItemGroup borderRadius="l3">
        <For each={images}>
          {(image, index) => (
            <Carousel.Item index={index()}>
              <Image src={image} width="full" height="80" />
            </Carousel.Item>
          )}
        </For>
      </Carousel.ItemGroup>
      <Carousel.Control>
        <Carousel.PrevTrigger
          asChild={(triggerProps) => (
            <IconButton size="xs" variant="plain" {...triggerProps()}>
              <ChevronLeftIcon />
            </IconButton>
          )}
        />
        <Carousel.IndicatorGroup />
        <Carousel.NextTrigger
          asChild={(triggerProps) => (
            <IconButton size="xs" variant="plain" {...triggerProps()}>
              <ChevronRightIcon />
            </IconButton>
          )}
        />
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
