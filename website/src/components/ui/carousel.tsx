import { Carousel as ArkCarousel } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { carousel } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(carousel)

export const CarouselRoot = withProvider(styled(ArkCarousel.Root), 'root')
export const CarouselControl = withContext(styled(ArkCarousel.Control), 'control')
export const CarouselIndicator = withContext(styled(ArkCarousel.Indicator), 'indicator')
export const CarouselIndicatorGroup = withContext(
  styled(ArkCarousel.IndicatorGroup),
  'indicatorGroup',
)
export const CarouselItem = withContext(styled(ArkCarousel.Item), 'item')
export const CarouselItemGroup = withContext(styled(ArkCarousel.ItemGroup), 'itemGroup')
export const CarouselNextTrigger = withContext(styled(ArkCarousel.NextTrigger), 'nextTrigger')
export const CarouselPrevTrigger = withContext(styled(ArkCarousel.PrevTrigger), 'prevTrigger')
export const CarouselViewport = withContext(styled(ArkCarousel.Viewport), 'viewport')

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

export type CarouselProps = typeof CarouselRoot
export type CarouselControlProps = typeof CarouselControl
export type CarouselIndicatorProps = typeof CarouselIndicator
export type CarouselIndicatorGroupProps = typeof CarouselIndicatorGroup
export type CarouselItemProps = typeof CarouselItem
export type CarouselItemGroupProps = typeof CarouselItemGroup
export type CarouselNextTriggerProps = typeof CarouselNextTrigger
export type CarouselPrevTriggerProps = typeof CarouselPrevTrigger
export type CarouselViewportProps = typeof CarouselViewport
