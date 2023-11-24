import * as Ark from '@ark-ui/react/carousel'
import { createStyleContext } from '~/lib/create-style-context'
import { carouselStyles } from './recipe'
export * from '@ark-ui/react/carousel'

export type CarouselProps = React.ComponentProps<typeof Carousel>

const { withProvider, withContext } = createStyleContext(carouselStyles)

const CarouselRoot = withProvider(Ark.Carousel.Root, 'root')
export const CarouselControl = withContext(Ark.Carousel.Control, 'control')
export const CarouselIndicator = withContext(Ark.Carousel.Indicator, 'indicator')
export const CarouselIndicatorGroup = withContext(Ark.Carousel.IndicatorGroup, 'indicatorGroup')
export const CarouselItem = withContext(Ark.Carousel.Item, 'item')
export const CarouselItemGroup = withContext(Ark.Carousel.ItemGroup, 'itemGroup')
export const CarouselNextTrigger = withContext(Ark.Carousel.NextTrigger, 'nextTrigger')
export const CarouselPrevTrigger = withContext(Ark.Carousel.PrevTrigger, 'prevTrigger')
export const CarouselViewport = withContext(Ark.Carousel.Viewport, 'viewport')

export const Carousel = Object.assign(CarouselRoot, {
  Root: CarouselRoot,
  Control: CarouselControl,
  Indicator: CarouselIndicator,
  IndicatorGroup: CarouselIndicatorGroup,
  Item: CarouselItem,
  ItemGroup: CarouselItemGroup,
  NextTrigger: CarouselNextTrigger,
  PrevTrigger: CarouselPrevTrigger,
  Viewport: CarouselViewport,
})
