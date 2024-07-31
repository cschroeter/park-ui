import { type Assign, Carousel } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type CarouselVariantProps, carousel } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(carousel)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Carousel.RootProviderBaseProps>, CarouselVariantProps>
>(Carousel.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Carousel.RootBaseProps>, CarouselVariantProps>
>(Carousel.Root, 'root')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Carousel.ControlBaseProps>>(
  Carousel.Control,
  'control',
)

export const IndicatorGroup = withContext<
  Assign<HTMLStyledProps<'div'>, Carousel.IndicatorGroupBaseProps>
>(Carousel.IndicatorGroup, 'indicatorGroup')

export const Indicator = withContext<
  Assign<HTMLStyledProps<'button'>, Carousel.IndicatorBaseProps>
>(Carousel.Indicator, 'indicator')

export const ItemGroup = withContext<Assign<HTMLStyledProps<'div'>, Carousel.ItemGroupBaseProps>>(
  Carousel.ItemGroup,
  'itemGroup',
)

export const Item = withContext<Assign<HTMLStyledProps<'div'>, Carousel.ItemBaseProps>>(
  Carousel.Item,
  'item',
)

export const NextTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Carousel.NextTriggerBaseProps>
>(Carousel.NextTrigger, 'nextTrigger')

export const PrevTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Carousel.PrevTriggerBaseProps>
>(Carousel.PrevTrigger, 'prevTrigger')

export const Viewport = withContext<Assign<HTMLStyledProps<'div'>, Carousel.ViewportBaseProps>>(
  Carousel.Viewport,
  'viewport',
)

export { CarouselContext as Context } from '@ark-ui/solid'
