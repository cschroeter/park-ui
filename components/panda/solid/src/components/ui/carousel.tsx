import { type Assign, Carousel } from '@ark-ui/solid'
import { type CarouselVariantProps, carousel } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(carousel)

export interface RootProps
  extends Assign<JsxStyleProps, Carousel.RootProps>,
    CarouselVariantProps {}
export const Root = withProvider<RootProps>(Carousel.Root, 'root')

export const Control = withContext<Assign<JsxStyleProps, Carousel.ControlProps>>(
  Carousel.Control,
  'control',
)

export const IndicatorGroup = withContext<Assign<JsxStyleProps, Carousel.IndicatorGroupProps>>(
  Carousel.IndicatorGroup,
  'indicatorGroup',
)

export const Indicator = withContext<Assign<JsxStyleProps, Carousel.IndicatorProps>>(
  Carousel.Indicator,
  'indicator',
)

export const ItemGroup = withContext<Assign<JsxStyleProps, Carousel.ItemGroupProps>>(
  Carousel.ItemGroup,
  'itemGroup',
)

export const Item = withContext<Assign<JsxStyleProps, Carousel.ItemProps>>(Carousel.Item, 'item')

export const NextTrigger = withContext<Assign<JsxStyleProps, Carousel.NextTriggerProps>>(
  Carousel.NextTrigger,
  'nextTrigger',
)

export const PrevTrigger = withContext<Assign<JsxStyleProps, Carousel.PrevTriggerProps>>(
  Carousel.PrevTrigger,
  'prevTrigger',
)

export const Viewport = withContext<Assign<JsxStyleProps, Carousel.ViewportProps>>(
  Carousel.Viewport,
  'viewport',
)
export {
  CarouselContext as Context,
  type CarouselContextProps as ContextProps,
} from '@ark-ui/solid'
