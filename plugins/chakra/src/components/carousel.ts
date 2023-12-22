import { Carousel as ArkCarousel } from '@ark-ui/react/carousel'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('Carousel')

const Carousel = withProvider(chakra(ArkCarousel.Root), 'root')
const CarouselControl = withContext(chakra(ArkCarousel.Control), 'control')
const CarouselIndicator = withContext(chakra(ArkCarousel.Indicator), 'indicator')
const CarouselIndicatorGroup = withContext(chakra(ArkCarousel.IndicatorGroup), 'indicatorGroup')
const CarouselItem = withContext(chakra(ArkCarousel.Item), 'item')
const CarouselItemGroup = withContext(chakra(ArkCarousel.ItemGroup), 'itemGroup')
const CarouselNextTrigger = withContext(chakra(ArkCarousel.NextTrigger), 'nextTrigger')
const CarouselPrevTrigger = withContext(chakra(ArkCarousel.PrevTrigger), 'prevTrigger')
const CarouselViewport = withContext(chakra(ArkCarousel.Viewport), 'viewport')

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

export interface CarouselProps extends HTMLChakraProps<typeof Carousel> {}
export interface CarouselControlProps extends HTMLChakraProps<typeof CarouselControl> {}
export interface CarouselIndicatorProps extends HTMLChakraProps<typeof CarouselIndicator> {}
export interface CarouselIndicatorGroupProps
  extends HTMLChakraProps<typeof CarouselIndicatorGroup> {}
export interface CarouselItemProps extends HTMLChakraProps<typeof CarouselItem> {}
export interface CarouselItemGroupProps extends HTMLChakraProps<typeof CarouselItemGroup> {}
export interface CarouselNextTriggerProps extends HTMLChakraProps<typeof CarouselNextTrigger> {}
export interface CarouselPrevTriggerProps extends HTMLChakraProps<typeof CarouselPrevTrigger> {}
export interface CarouselViewportProps extends HTMLChakraProps<typeof CarouselViewport> {}
