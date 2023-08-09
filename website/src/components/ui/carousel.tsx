import * as Ark from '@ark-ui/react/carousel'
import { styled } from 'styled-system/jsx'
import { carousel, type CarouselVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/carousel'

const { withProvider, withContext } = createStyleContext(carousel)

export type CarouselProps = Ark.CarouselProps & CarouselVariantProps

const CarouselRoot = withProvider(styled(Ark.Carousel.Root), 'root')
const CarouselControl = withContext(styled(Ark.Carousel.Control), 'control')
const CarouselIndicator = withContext(styled(Ark.Carousel.Indicator), 'indicator')
const CarouselIndicatorGroup = withContext(styled(Ark.Carousel.IndicatorGroup), 'indicatorGroup')
const CarouselNextSlideTrigger = withContext(
  styled(Ark.Carousel.NextSlideTrigger),
  'nextSlideTrigger',
)
const CarouselPrevSlideTrigger = withContext(
  styled(Ark.Carousel.PrevSlideTrigger),
  'prevSlideTrigger',
)
const CarouselSlide = withContext(styled(Ark.Carousel.Slide), 'slide')
const CarouselSlideGroup = withContext(styled(Ark.Carousel.SlideGroup), 'slideGroup')
const CarouselViewport = withContext(styled(Ark.Carousel.Viewport), 'viewport')

const Carousel = Object.assign(CarouselRoot, {
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

export {
  Carousel,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselNextSlideTrigger,
  CarouselPrevSlideTrigger,
  CarouselSlide,
  CarouselSlideGroup,
  CarouselViewport,
}
