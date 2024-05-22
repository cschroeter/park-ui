import type { Assign } from '@ark-ui/react'
import { Popover } from '@ark-ui/react/popover'
import { type PopoverVariantProps, popover } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(popover)

export interface RootProps extends Assign<JsxStyleProps, Popover.RootProps>, PopoverVariantProps {}
export const Root = withRootProvider<RootProps>(Popover.Root)

export interface AnchorProps extends Assign<JsxStyleProps, Popover.AnchorProps> {}
export const Anchor = withContext<HTMLDivElement, AnchorProps>(Popover.Anchor, 'anchor')

export interface ArrowProps extends Assign<JsxStyleProps, Popover.ArrowProps> {}
export const Arrow = withContext<HTMLDivElement, ArrowProps>(Popover.Arrow, 'arrow')

export interface ArrowTipProps extends Assign<JsxStyleProps, Popover.ArrowTipProps> {}
export const ArrowTip = withContext<HTMLDivElement, ArrowTipProps>(Popover.ArrowTip, 'arrowTip')

export interface CloseTriggerProps extends Assign<JsxStyleProps, Popover.CloseTriggerProps> {}
export const CloseTrigger = withContext<HTMLButtonElement, CloseTriggerProps>(
  Popover.CloseTrigger,
  'closeTrigger',
)

export interface ContentProps extends Assign<JsxStyleProps, Popover.ContentProps> {}
export const Content = withContext<HTMLDivElement, ContentProps>(Popover.Content, 'content')

export interface DescriptionProps extends Assign<JsxStyleProps, Popover.DescriptionProps> {}
export const Description = withContext<HTMLParagraphElement, DescriptionProps>(
  Popover.Description,
  'description',
)

export interface IndicatorProps extends Assign<JsxStyleProps, Popover.IndicatorProps> {}
export const Indicator = withContext<HTMLDivElement, IndicatorProps>(Popover.Indicator, 'indicator')

export interface PositionerProps extends Assign<JsxStyleProps, Popover.PositionerProps> {}
export const Positioner = withContext<HTMLDivElement, PositionerProps>(
  Popover.Positioner,
  'positioner',
)

export interface TitleProps extends Assign<JsxStyleProps, Popover.TitleProps> {}
export const Title = withContext<HTMLDivElement, TitleProps>(Popover.Title, 'title')

export interface TriggerProps extends Assign<JsxStyleProps, Popover.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(Popover.Trigger, 'trigger')

export {
  PopoverContext as Context,
  type PopoverContextProps as ContextProps,
} from '@ark-ui/react/popover'
