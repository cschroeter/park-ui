import { Carousel as ArkCarousel } from '@ark-ui/solid'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
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

export interface CarouselProps extends HTMLStyledProps<typeof Carousel> {}
export interface CarouselControlProps extends HTMLStyledProps<typeof CarouselControl> {}
export interface CarouselIndicatorProps extends HTMLStyledProps<typeof CarouselIndicator> {}
export interface CarouselIndicatorGroupProps
  extends HTMLStyledProps<typeof CarouselIndicatorGroup> {}
export interface CarouselItemProps extends HTMLStyledProps<typeof CarouselItem> {}
export interface CarouselItemGroupProps extends HTMLStyledProps<typeof CarouselItemGroup> {}
export interface CarouselNextTriggerProps extends HTMLStyledProps<typeof CarouselNextTrigger> {}
export interface CarouselPrevTriggerProps extends HTMLStyledProps<typeof CarouselPrevTrigger> {}
export interface CarouselViewportProps extends HTMLStyledProps<typeof CarouselViewport> {}
