import { type Assign, Tooltip } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type TooltipVariantProps, tooltip } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withRootProvider, withContext } = createStyleContext(tooltip)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withRootProvider<
  Assign<Tooltip.RootProviderProps, TooltipVariantProps>
>(Tooltip.RootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<Tooltip.RootProps, TooltipVariantProps>>(Tooltip.Root)

export const Arrow = withContext<Assign<HTMLStyledProps<'div'>, Tooltip.ArrowBaseProps>>(
  Tooltip.Arrow,
  'arrow',
)

export const ArrowTip = withContext<Assign<HTMLStyledProps<'div'>, Tooltip.ArrowTipBaseProps>>(
  Tooltip.ArrowTip,
  'arrowTip',
)

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Tooltip.ContentBaseProps>>(
  Tooltip.Content,
  'content',
)

export const Positioner = withContext<Assign<HTMLStyledProps<'div'>, Tooltip.PositionerBaseProps>>(
  Tooltip.Positioner,
  'positioner',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Tooltip.TriggerBaseProps>>(
  Tooltip.Trigger,
  'trigger',
)

export { TooltipContext as Context } from '@ark-ui/solid'
