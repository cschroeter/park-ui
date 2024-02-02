import { HoverCard } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    base: 'hoverCard',
    slots: {
      arrow: 'hoverCard__arrow',
      arrowTip: 'hoverCard__arrowTip',
      trigger: 'hoverCard__trigger',
      positioner: 'hoverCard__positioner',
      content: 'hoverCard__content',
    },
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(HoverCard.Root)
export const Arrow = withContext(HoverCard.Arrow, 'arrow')
export const ArrowTip = withContext(HoverCard.ArrowTip, 'arrowTip')
export const Content = withContext(HoverCard.Content, 'content')
export const Positioner = withContext(HoverCard.Positioner, 'positioner')
export const Trigger = withContext(HoverCard.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export interface ArrowProps extends ComponentProps<typeof Arrow> {}
export interface ArrowTipProps extends ComponentProps<typeof ArrowTip> {}
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface PositionerProps extends ComponentProps<typeof Positioner> {}
export interface TriggerProps extends ComponentProps<typeof Trigger> {}
