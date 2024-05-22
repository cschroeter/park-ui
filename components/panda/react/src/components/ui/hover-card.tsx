import type { Assign } from '@ark-ui/react'
import { HoverCard } from '@ark-ui/react/hover-card'
import { type HoverCardVariantProps, hoverCard } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(hoverCard)

export interface RootProps
  extends Assign<JsxStyleProps, HoverCard.RootProps>,
    HoverCardVariantProps {}
export const Root = withRootProvider<RootProps>(HoverCard.Root)

export interface ArrowProps extends Assign<JsxStyleProps, HoverCard.ArrowProps> {}
export const Arrow = withContext<HTMLDivElement, ArrowProps>(HoverCard.Arrow, 'arrow')

export interface ArrowTipProps extends Assign<JsxStyleProps, HoverCard.ArrowTipProps> {}
export const ArrowTip = withContext<HTMLDivElement, ArrowTipProps>(HoverCard.ArrowTip, 'arrowTip')

export interface ContentProps extends Assign<JsxStyleProps, HoverCard.ContentProps> {}
export const Content = withContext<HTMLDivElement, ContentProps>(HoverCard.Content, 'content')

export interface PositionerProps extends Assign<JsxStyleProps, HoverCard.PositionerProps> {}
export const Positioner = withContext<HTMLDivElement, PositionerProps>(
  HoverCard.Positioner,
  'positioner',
)

export interface TriggerProps extends Assign<JsxStyleProps, HoverCard.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(HoverCard.Trigger, 'trigger')

export {
  HoverCardContext as Context,
  type HoverCardContextProps as ContextProps,
} from '@ark-ui/react/hover-card'
