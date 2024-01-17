import { Carousel as ArkCarousel } from '@ark-ui/react/carousel'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'carousel',
  defaultVariants: { size: 'md' },
  slots: {
    root: 'carousel__root',
    viewport: 'carousel__viewport',
    itemGroup: 'carousel__itemGroup',
    item: 'carousel__item',
    nextTrigger: 'carousel__nextTrigger',
    prevTrigger: 'carousel__prevTrigger',
    indicatorGroup: 'carousel__indicatorGroup',
    indicator: 'carousel__indicator',
    control: 'carousel__control',
  },
  variants: {
    size: {
      sm: {
        root: 'carousel__root--size_sm',
        viewport: 'carousel__viewport--size_sm',
        itemGroup: 'carousel__itemGroup--size_sm',
        item: 'carousel__item--size_sm',
        nextTrigger: 'carousel__nextTrigger--size_sm',
        prevTrigger: 'carousel__prevTrigger--size_sm',
        indicatorGroup: 'carousel__indicatorGroup--size_sm',
        indicator: 'carousel__indicator--size_sm',
        control: 'carousel__control--size_sm',
      },
      md: {
        root: 'carousel__root--size_md',
        viewport: 'carousel__viewport--size_md',
        itemGroup: 'carousel__itemGroup--size_md',
        item: 'carousel__item--size_md',
        nextTrigger: 'carousel__nextTrigger--size_md',
        prevTrigger: 'carousel__prevTrigger--size_md',
        indicatorGroup: 'carousel__indicatorGroup--size_md',
        indicator: 'carousel__indicator--size_md',
        control: 'carousel__control--size_md',
      },
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

const Carousel = withProvider(ArkCarousel.Root, 'root')
const CarouselControl = withContext(ArkCarousel.Control, 'control')
const CarouselIndicator = withContext(ArkCarousel.Indicator, 'indicator')
const CarouselIndicatorGroup = withContext(ArkCarousel.IndicatorGroup, 'indicatorGroup')
const CarouselItem = withContext(ArkCarousel.Item, 'item')
const CarouselItemGroup = withContext(ArkCarousel.ItemGroup, 'itemGroup')
const CarouselNextTrigger = withContext(ArkCarousel.NextTrigger, 'nextTrigger')
const CarouselPrevTrigger = withContext(ArkCarousel.PrevTrigger, 'prevTrigger')
const CarouselViewport = withContext(ArkCarousel.Viewport, 'viewport')

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
