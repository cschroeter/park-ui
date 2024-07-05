import { Popover, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type PopoverVariantProps, popover } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(popover)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withRootProvider<
  Assign<Popover.RootProviderProps, PopoverVariantProps>
>(Popover.RootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<Popover.RootProps, PopoverVariantProps>>(Popover.Root)

export const Anchor = withContext<Assign<HTMLStyledProps<'div'>, Popover.AnchorProps>>(
  Popover.Anchor,
  'anchor',
)

export const Arrow = withContext<Assign<HTMLStyledProps<'div'>, Popover.ArrowProps>>(
  Popover.Arrow,
  'arrow',
)

export const ArrowTip = withContext<Assign<HTMLStyledProps<'div'>, Popover.ArrowTipProps>>(
  Popover.ArrowTip,
  'arrowTip',
)

export const CloseTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Popover.CloseTriggerProps>
>(Popover.CloseTrigger, 'closeTrigger')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Popover.ContentProps>>(
  Popover.Content,
  'content',
)

export const Description = withContext<Assign<HTMLStyledProps<'div'>, Popover.DescriptionProps>>(
  Popover.Description,
  'description',
)

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, Popover.IndicatorProps>>(
  Popover.Indicator,
  'indicator',
)

export const Positioner = withContext<Assign<HTMLStyledProps<'div'>, Popover.PositionerProps>>(
  Popover.Positioner,
  'positioner',
)

export const Title = withContext<Assign<HTMLStyledProps<'div'>, Popover.TitleProps>>(
  Popover.Title,
  'title',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Popover.TriggerProps>>(
  Popover.Trigger,
  'trigger',
)

export { PopoverContext as Context } from '@ark-ui/solid'
