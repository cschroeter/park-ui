import { Carousel } from '@ark-ui/solid'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const carousel = tv(
  {
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
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(carousel)

export interface RootProps extends Carousel.RootProps, VariantProps<typeof carousel> {}
export const Root = withProvider<RootProps>(Carousel.Root, 'root')

export const Control = withContext<Carousel.ControlProps>(Carousel.Control, 'control')

export const IndicatorGroup = withContext<Carousel.IndicatorGroupProps>(
  Carousel.IndicatorGroup,
  'indicatorGroup',
)

export const Indicator = withContext<Carousel.IndicatorProps>(Carousel.Indicator, 'indicator')

export const ItemGroup = withContext<Carousel.ItemGroupProps>(Carousel.ItemGroup, 'itemGroup')

export const Item = withContext<Carousel.ItemProps>(Carousel.Item, 'item')

export const NextTrigger = withContext<Carousel.NextTriggerProps>(
  Carousel.NextTrigger,
  'nextTrigger',
)

export const PrevTrigger = withContext<Carousel.PrevTriggerProps>(
  Carousel.PrevTrigger,
  'prevTrigger',
)

export const Viewport = withContext<Carousel.ViewportProps>(Carousel.Viewport, 'viewport')

export {
  CarouselContext as Context,
  type CarouselContextProps as ContextProps,
} from '@ark-ui/react'
