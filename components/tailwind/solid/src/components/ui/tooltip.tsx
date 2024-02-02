import { Tooltip } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    base: 'tooltip',
    slots: {
      trigger: 'tooltip__trigger',
      arrow: 'tooltip__arrow',
      arrowTip: 'tooltip__arrowTip',
      positioner: 'tooltip__positioner',
      content: 'tooltip__content',
    },
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Tooltip.Root)
export const Arrow = withContext(Tooltip.Arrow, 'arrow')
export const ArrowTip = withContext(Tooltip.ArrowTip, 'arrowTip')
export const Content = withContext(Tooltip.Content, 'content')
export const Positioner = withContext(Tooltip.Positioner, 'positioner')
export const Trigger = withContext(Tooltip.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export interface ArrowProps extends ComponentProps<typeof Arrow> {}
export interface ArrowTipProps extends ComponentProps<typeof ArrowTip> {}
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface PositionerProps extends ComponentProps<typeof Positioner> {}
export interface TriggerProps extends ComponentProps<typeof Trigger> {}
