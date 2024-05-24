import { type Assign, Popover } from '@ark-ui/solid'
import { type PopoverVariantProps, popover } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(popover)

export interface RootProps extends Assign<JsxStyleProps, Popover.RootProps>, PopoverVariantProps {}
export const Root = withRootProvider<RootProps>(Popover.Root)

export const Anchor = withContext<Assign<JsxStyleProps, Popover.AnchorProps>>(
  Popover.Anchor,
  'anchor',
)

export const Arrow = withContext<Assign<JsxStyleProps, Popover.ArrowProps>>(Popover.Arrow, 'arrow')

export const ArrowTip = withContext<Assign<JsxStyleProps, Popover.ArrowTipProps>>(
  Popover.ArrowTip,
  'arrowTip',
)

export const CloseTrigger = withContext<Assign<JsxStyleProps, Popover.CloseTriggerProps>>(
  Popover.CloseTrigger,
  'closeTrigger',
)

export const Content = withContext<Assign<JsxStyleProps, Popover.ContentProps>>(
  Popover.Content,
  'content',
)

export const Description = withContext<Assign<JsxStyleProps, Popover.DescriptionProps>>(
  Popover.Description,
  'description',
)

export const Indicator = withContext<Assign<JsxStyleProps, Popover.IndicatorProps>>(
  Popover.Indicator,
  'indicator',
)

export const Positioner = withContext<Assign<JsxStyleProps, Popover.PositionerProps>>(
  Popover.Positioner,
  'positioner',
)

export const Title = withContext<Assign<JsxStyleProps, Popover.TitleProps>>(Popover.Title, 'title')

export const Trigger = withContext<Assign<JsxStyleProps, Popover.TriggerProps>>(
  Popover.Trigger,
  'trigger',
)

export { PopoverContext as Context, type PopoverContextProps as ContextProps } from '@ark-ui/solid'
