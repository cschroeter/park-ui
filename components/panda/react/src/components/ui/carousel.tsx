import type { Assign } from '@ark-ui/react'
import { Carousel } from '@ark-ui/react/carousel'
import { type CarouselVariantProps, carousel } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(carousel)

export interface RootProps
  extends Assign<JsxStyleProps, Carousel.RootProps>,
    CarouselVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Carousel.Root, 'root')

export interface ControlProps extends Assign<JsxStyleProps, Carousel.ControlProps> {}
export const Control = withContext<HTMLDivElement, ControlProps>(Carousel.Control, 'control')

export interface IndicatorGroupProps extends Assign<JsxStyleProps, Carousel.IndicatorGroupProps> {}
export const IndicatorGroup = withContext<HTMLDivElement, IndicatorGroupProps>(
  Carousel.IndicatorGroup,
  'indicatorGroup',
)

export interface IndicatorProps extends Assign<JsxStyleProps, Carousel.IndicatorProps> {}
export const Indicator = withContext<HTMLButtonElement, IndicatorProps>(
  Carousel.Indicator,
  'indicator',
)

export interface ItemGroupProps extends Assign<JsxStyleProps, Carousel.ItemGroupProps> {}
export const ItemGroup = withContext<HTMLDivElement, ItemGroupProps>(
  Carousel.ItemGroup,
  'itemGroup',
)

export interface ItemProps extends Assign<JsxStyleProps, Carousel.ItemProps> {}
export const Item = withContext<HTMLDivElement, ItemProps>(Carousel.Item, 'item')

export interface NextTriggerProps extends Assign<JsxStyleProps, Carousel.NextTriggerProps> {}
export const NextTrigger = withContext<HTMLButtonElement, NextTriggerProps>(
  Carousel.NextTrigger,
  'nextTrigger',
)

export interface PrevTriggerProps extends Assign<JsxStyleProps, Carousel.PrevTriggerProps> {}
export const PrevTrigger = withContext<HTMLButtonElement, PrevTriggerProps>(
  Carousel.PrevTrigger,
  'prevTrigger',
)

export interface ViewportProps extends Assign<JsxStyleProps, Carousel.ViewportProps> {}
export const Viewport = withContext<HTMLDivElement, ViewportProps>(Carousel.Viewport, 'viewport')

export {
  CarouselContext as Context,
  type CarouselContextProps as ContextProps,
} from '@ark-ui/react/carousel'
