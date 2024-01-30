import { Carousel as ArkCarousel } from '@ark-ui/react/carousel'
import type { ComponentProps } from 'react'
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

export const Carousel = {
  Root: CarouselRoot,
  Control: CarouselControl,
  Indicator: CarouselIndicator,
  IndicatorGroup: CarouselIndicatorGroup,
  Item: CarouselItem,
  ItemGroup: CarouselItemGroup,
  NextTrigger: CarouselNextTrigger,
  PrevTrigger: CarouselPrevTrigger,
  Viewport: CarouselViewport,
}

export interface CarouselRootProps extends ComponentProps<typeof CarouselRoot> {}
export interface CarouselControlProps extends ComponentProps<typeof CarouselControl> {}
export interface CarouselIndicatorProps extends ComponentProps<typeof CarouselIndicator> {}
export interface CarouselIndicatorGroupProps
  extends ComponentProps<typeof CarouselIndicatorGroup> {}
export interface CarouselItemProps extends ComponentProps<typeof CarouselItem> {}
export interface CarouselItemGroupProps extends ComponentProps<typeof CarouselItemGroup> {}
export interface CarouselNextTriggerProps extends ComponentProps<typeof CarouselNextTrigger> {}
export interface CarouselPrevTriggerProps extends ComponentProps<typeof CarouselPrevTrigger> {}
export interface CarouselViewportProps extends ComponentProps<typeof CarouselViewport> {}
