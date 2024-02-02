import { Carousel } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
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
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Carousel.Root, 'root')
export const Control = withContext(Carousel.Control, 'control')
export const Indicator = withContext(Carousel.Indicator, 'indicator')
export const IndicatorGroup = withContext(Carousel.IndicatorGroup, 'indicatorGroup')
export const Item = withContext(Carousel.Item, 'item')
export const ItemGroup = withContext(Carousel.ItemGroup, 'itemGroup')
export const NextTrigger = withContext(Carousel.NextTrigger, 'nextTrigger')
export const PrevTrigger = withContext(Carousel.PrevTrigger, 'prevTrigger')
export const Viewport = withContext(Carousel.Viewport, 'viewport')

export type RootProps = ComponentProps<typeof Root>
export interface ControlProps extends ComponentProps<typeof Control> {}
export interface IndicatorProps extends ComponentProps<typeof Indicator> {}
export interface IndicatorGroupProps extends ComponentProps<typeof IndicatorGroup> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
export interface ItemGroupProps extends ComponentProps<typeof ItemGroup> {}
export interface NextTriggerProps extends ComponentProps<typeof NextTrigger> {}
export interface PrevTriggerProps extends ComponentProps<typeof PrevTrigger> {}
export interface ViewportProps extends ComponentProps<typeof Viewport> {}
