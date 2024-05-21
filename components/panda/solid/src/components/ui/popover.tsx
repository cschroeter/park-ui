import { Popover } from '@ark-ui/solid'
import { type PopoverVariantProps, popover } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(popover)

export interface RootProps extends Popover.RootProps, PopoverVariantProps {}
export const Root = withRootProvider<RootProps>(Popover.Root)

export interface TriggerProps extends Assign<JsxStyleProps, Popover.TriggerProps> {}
export const Trigger = withContext<TriggerProps>(Popover.Trigger, 'trigger')

export interface AnchorProps extends Assign<JsxStyleProps, Popover.AnchorProps> {}
export const Anchor = withContext<AnchorProps>(Popover.Anchor, 'anchor')

export interface ArrowProps extends Assign<JsxStyleProps, Popover.ArrowProps> {}
export const Arrow = withContext<ArrowProps>(Popover.Arrow, 'arrow')

export interface ArrowTipProps extends Assign<JsxStyleProps, Popover.ArrowTipProps> {}
export const ArrowTip = withContext<ArrowTipProps>(Popover.ArrowTip, 'arrowTip')

export interface CloseTriggerProps extends Assign<JsxStyleProps, Popover.CloseTriggerProps> {}
export const CloseTrigger = withContext<CloseTriggerProps>(Popover.CloseTrigger, 'closeTrigger')

export interface ContentProps extends Assign<JsxStyleProps, Popover.ContentProps> {}
export const Content = withContext<ContentProps>(Popover.Content, 'content')

export interface DescriptionProps extends Assign<JsxStyleProps, Popover.DescriptionProps> {}
export const Description = withContext<DescriptionProps>(Popover.Description, 'description')

export interface IndicatorProps extends Assign<JsxStyleProps, Popover.IndicatorProps> {}
export const Indicator = withContext<IndicatorProps>(Popover.Indicator, 'indicator')

export interface PositionerProps extends Assign<JsxStyleProps, Popover.PositionerProps> {}
export const Positioner = withContext<PositionerProps>(Popover.Positioner, 'positioner')

export interface TitleProps extends Assign<JsxStyleProps, Popover.TitleProps> {}
export const Title = withContext<TitleProps>(Popover.Title, 'title')
