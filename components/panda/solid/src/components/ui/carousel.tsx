import { Carousel as ArkCarousel } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { carousel } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(carousel)

const Carousel = withProvider(styled(ArkCarousel.Root), 'root')
const CarouselControl = withContext(styled(ArkCarousel.Control), 'control')
const CarouselIndicator = withContext(styled(ArkCarousel.Indicator), 'indicator')
const CarouselIndicatorGroup = withContext(styled(ArkCarousel.IndicatorGroup), 'indicatorGroup')
const CarouselItem = withContext(styled(ArkCarousel.Item), 'item')
const CarouselItemGroup = withContext(styled(ArkCarousel.ItemGroup), 'itemGroup')
const CarouselNextTrigger = withContext(styled(ArkCarousel.NextTrigger), 'nextTrigger')
const CarouselPrevTrigger = withContext(styled(ArkCarousel.PrevTrigger), 'prevTrigger')
const CarouselViewport = withContext(styled(ArkCarousel.Viewport), 'viewport')

const Root = Carousel
const Control = CarouselControl
const Indicator = CarouselIndicator
const IndicatorGroup = CarouselIndicatorGroup
const Item = CarouselItem
const ItemGroup = CarouselItemGroup
const NextTrigger = CarouselNextTrigger
const PrevTrigger = CarouselPrevTrigger
const Viewport = CarouselViewport

export {
  Carousel,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselItemGroup,
  CarouselNextTrigger,
  CarouselPrevTrigger,
  CarouselViewport,
  Control,
  Indicator,
  IndicatorGroup,
  Item,
  ItemGroup,
  NextTrigger,
  PrevTrigger,
  Root,
  Viewport,
}

export interface CarouselProps extends ComponentProps<typeof Carousel> {}
export interface CarouselControlProps extends ComponentProps<typeof CarouselControl> {}
export interface CarouselIndicatorProps extends ComponentProps<typeof CarouselIndicator> {}
export interface CarouselIndicatorGroupProps
  extends ComponentProps<typeof CarouselIndicatorGroup> {}
export interface CarouselItemProps extends ComponentProps<typeof CarouselItem> {}
export interface CarouselItemGroupProps extends ComponentProps<typeof CarouselItemGroup> {}
export interface CarouselNextTriggerProps extends ComponentProps<typeof CarouselNextTrigger> {}
export interface CarouselPrevTriggerProps extends ComponentProps<typeof CarouselPrevTrigger> {}
export interface CarouselViewportProps extends ComponentProps<typeof CarouselViewport> {}
