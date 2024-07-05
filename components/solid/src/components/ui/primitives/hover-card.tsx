import { HoverCard, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type HoverCardVariantProps, hoverCard } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(hoverCard)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withRootProvider<
  Assign<HoverCard.RootProviderProps, HoverCardVariantProps>
>(HoverCard.RootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<HoverCard.RootProps, HoverCardVariantProps>>(
  HoverCard.Root,
)

export const Arrow = withContext<Assign<HTMLStyledProps<'div'>, HoverCard.ArrowProps>>(
  HoverCard.Arrow,
  'arrow',
)

export const ArrowTip = withContext<Assign<HTMLStyledProps<'div'>, HoverCard.ArrowTipProps>>(
  HoverCard.ArrowTip,
  'arrowTip',
)

export const Content = withContext<Assign<HTMLStyledProps<'div'>, HoverCard.ContentProps>>(
  HoverCard.Content,
  'content',
)

export const Positioner = withContext<Assign<HTMLStyledProps<'div'>, HoverCard.PositionerProps>>(
  HoverCard.Positioner,
  'positioner',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, HoverCard.TriggerProps>>(
  HoverCard.Trigger,
  'trigger',
)

export { HoverCardContext as Context } from '@ark-ui/solid'
