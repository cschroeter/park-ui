import type { Assign } from '@ark-ui/react'
import { Tooltip } from '@ark-ui/react/tooltip'
import { type TooltipVariantProps, tooltip } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(tooltip)

export interface RootProps extends Assign<JsxStyleProps, Tooltip.RootProps>, TooltipVariantProps {}
export const Root = withRootProvider<RootProps>(Tooltip.Root)

export interface ArrowProps extends Assign<JsxStyleProps, Tooltip.ArrowProps> {}
export const Arrow = withContext<HTMLDivElement, ArrowProps>(Tooltip.Arrow, 'arrow')

export interface ArrowTipProps extends Assign<JsxStyleProps, Tooltip.ArrowTipProps> {}
export const ArrowTip = withContext<HTMLDivElement, ArrowTipProps>(Tooltip.ArrowTip, 'arrowTip')

export interface ContentProps extends Assign<JsxStyleProps, Tooltip.ContentProps> {}
export const Content = withContext<HTMLDivElement, ContentProps>(Tooltip.Content, 'content')

export interface PositionerProps extends Assign<JsxStyleProps, Tooltip.PositionerProps> {}
export const Positioner = withContext<HTMLDivElement, PositionerProps>(
  Tooltip.Positioner,
  'positioner',
)

export interface TriggerProps extends Assign<JsxStyleProps, Tooltip.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(Tooltip.Trigger, 'trigger')

export {
  TooltipContext as Context,
  type TooltipContextProps as ContextProps,
} from '@ark-ui/react/tooltip'
