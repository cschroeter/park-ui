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
export const CarouselNextSlideTrigger = withContext(
  Ark.Carousel.NextSlideTrigger,
  'nextSlideTrigger',
)
export const CarouselPrevSlideTrigger = withContext(
  Ark.Carousel.PrevSlideTrigger,
  'prevSlideTrigger',
)
export const CarouselSlide = withContext(Ark.Carousel.Slide, 'slide')
export const CarouselSlideGroup = withContext(Ark.Carousel.SlideGroup, 'slideGroup')
export const CarouselViewport = withContext(Ark.Carousel.Viewport, 'viewport')

export const Carousel = Object.assign(CarouselRoot, {
  Root: CarouselRoot,
  Control: CarouselControl,
  Indicator: CarouselIndicator,
  IndicatorGroup: CarouselIndicatorGroup,
  NextSlideTrigger: CarouselNextSlideTrigger,
  PrevSlideTrigger: CarouselPrevSlideTrigger,
  Slide: CarouselSlide,
  SlideGroup: CarouselSlideGroup,
  Viewport: CarouselViewport,
})
