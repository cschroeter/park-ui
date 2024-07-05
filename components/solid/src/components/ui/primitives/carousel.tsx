import { Carousel, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type CarouselVariantProps, carousel } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(carousel)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Carousel.RootProviderProps>, CarouselVariantProps>
>(Carousel.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Carousel.RootProps>, CarouselVariantProps>
>(Carousel.Root, 'root')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Carousel.ControlProps>>(
  Carousel.Control,
  'control',
)

export const IndicatorGroup = withContext<
  Assign<HTMLStyledProps<'div'>, Carousel.IndicatorGroupProps>
>(Carousel.IndicatorGroup, 'indicatorGroup')

export const Indicator = withContext<Assign<HTMLStyledProps<'button'>, Carousel.IndicatorProps>>(
  Carousel.Indicator,
  'indicator',
)

export const ItemGroup = withContext<Assign<HTMLStyledProps<'div'>, Carousel.ItemGroupProps>>(
  Carousel.ItemGroup,
  'itemGroup',
)

export const Item = withContext<Assign<HTMLStyledProps<'div'>, Carousel.ItemProps>>(
  Carousel.Item,
  'item',
)

export const NextTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Carousel.NextTriggerProps>
>(Carousel.NextTrigger, 'nextTrigger')

export const PrevTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Carousel.PrevTriggerProps>
>(Carousel.PrevTrigger, 'prevTrigger')

export const Viewport = withContext<Assign<HTMLStyledProps<'div'>, Carousel.ViewportProps>>(
  Carousel.Viewport,
  'viewport',
)

export { CarouselContext as Context } from '@ark-ui/solid'
