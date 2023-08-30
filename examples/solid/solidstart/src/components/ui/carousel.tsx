import * as Ark from '@ark-ui/solid/carousel'
import { styled } from 'styled-system/jsx'
import { carousel, type CarouselVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(carousel)

export * from '@ark-ui/solid/carousel'
export type CarouselProps = Ark.CarouselProps & CarouselVariantProps

const CarouselRoot = withProvider(styled(Ark.Carousel), 'root')
export const CarouselControl = withContext(styled(Ark.CarouselControl), 'control')
export const CarouselIndicator = withContext(styled(Ark.CarouselIndicator), 'indicator')
export const CarouselIndicatorGroup = withContext(
  styled(Ark.CarouselIndicatorGroup),
  'indicatorGroup',
)
export const CarouselNextSlideTrigger = withContext(
  styled(Ark.CarouselNextSlideTrigger),
  'nextSlideTrigger',
)
export const CarouselPrevSlideTrigger = withContext(
  styled(Ark.CarouselPrevSlideTrigger),
  'prevSlideTrigger',
)
export const CarouselSlide = withContext(styled(Ark.CarouselSlide), 'slide')
export const CarouselSlideGroup = withContext(styled(Ark.CarouselSlideGroup), 'slideGroup')
export const CarouselViewport = withContext(styled(Ark.CarouselViewport), 'viewport')

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
