import { Popover } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    base: 'popover',
    slots: {
      arrow: 'popover__arrow',
      arrowTip: 'popover__arrowTip',
      anchor: 'popover__anchor',
      trigger: 'popover__trigger',
      indicator: 'popover__indicator',
      positioner: 'popover__positioner',
      content: 'popover__content',
      title: 'popover__title',
      description: 'popover__description',
      closeTrigger: 'popover__closeTrigger',
    },
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Popover.Root)
export const Anchor = withContext(Popover.Anchor, 'anchor')
export const Arrow = withContext(Popover.Arrow, 'arrow')
export const ArrowTip = withContext(Popover.ArrowTip, 'arrowTip')
export const CloseTrigger = withContext(Popover.CloseTrigger, 'closeTrigger')
export const Content = withContext(Popover.Content, 'content')
export const Description = withContext(Popover.Description, 'description')
export const Indicator = withContext(Popover.Indicator, 'indicator')
export const Positioner = withContext(Popover.Positioner, 'positioner')
export const Title = withContext(Popover.Title, 'title')
export const Trigger = withContext(Popover.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export interface AnchorProps extends ComponentProps<typeof Anchor> {}
export interface ArrowProps extends ComponentProps<typeof Arrow> {}
export interface ArrowTipProps extends ComponentProps<typeof ArrowTip> {}
export interface CloseTriggerProps extends ComponentProps<typeof CloseTrigger> {}
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface DescriptionProps extends ComponentProps<typeof Description> {}
export interface IndicatorProps extends ComponentProps<typeof Indicator> {}
export interface PositionerProps extends ComponentProps<typeof Positioner> {}
export interface TitleProps extends ComponentProps<typeof Title> {}
export interface TriggerProps extends ComponentProps<typeof Trigger> {}
