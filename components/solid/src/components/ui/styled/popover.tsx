import { type Assign, Popover } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type PopoverVariantProps, popover } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withRootProvider, withContext } = createStyleContext(popover)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withRootProvider<
  Assign<Popover.RootProviderProps, PopoverVariantProps>
>(Popover.RootProvider)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<Popover.RootProps, PopoverVariantProps>>(Popover.Root)

export const Anchor = withContext<Assign<HTMLStyledProps<'div'>, Popover.AnchorBaseProps>>(
  Popover.Anchor,
  'anchor',
)

export const Arrow = withContext<Assign<HTMLStyledProps<'div'>, Popover.ArrowBaseProps>>(
  Popover.Arrow,
  'arrow',
)

export const ArrowTip = withContext<Assign<HTMLStyledProps<'div'>, Popover.ArrowTipBaseProps>>(
  Popover.ArrowTip,
  'arrowTip',
)

export const CloseTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Popover.CloseTriggerBaseProps>
>(Popover.CloseTrigger, 'closeTrigger')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Popover.ContentBaseProps>>(
  Popover.Content,
  'content',
)

export const Description = withContext<
  Assign<HTMLStyledProps<'div'>, Popover.DescriptionBaseProps>
>(Popover.Description, 'description')

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, Popover.IndicatorBaseProps>>(
  Popover.Indicator,
  'indicator',
)

export const Positioner = withContext<Assign<HTMLStyledProps<'div'>, Popover.PositionerBaseProps>>(
  Popover.Positioner,
  'positioner',
)

export const Title = withContext<Assign<HTMLStyledProps<'div'>, Popover.TitleBaseProps>>(
  Popover.Title,
  'title',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Popover.TriggerBaseProps>>(
  Popover.Trigger,
  'trigger',
)

export { PopoverContext as Context } from '@ark-ui/solid'
