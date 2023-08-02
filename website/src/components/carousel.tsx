import {
  Carousel as ArkCarousel,
  type CarouselProps as ArkCarouselProps,
} from '@ark-ui/react/carousel'
import { styled } from 'styled-system/jsx'
import { carousel, type CarouselVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/carousel'

export type CarouselProps = CarouselVariantProps & ArkCarouselProps
export const Carousel = styled(ArkCarousel, carousel)
