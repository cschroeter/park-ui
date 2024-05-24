import { Popover } from '@ark-ui/solid'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const popover = tv(
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
const { withRootProvider, withContext } = createStyleContext(popover)

export interface RootProps extends Popover.RootProps, VariantProps<typeof popover> {}
export const Root = withRootProvider<RootProps>(Popover.Root)

export const Anchor = withContext<Popover.AnchorProps>(Popover.Anchor, 'anchor')

export const Arrow = withContext<Popover.ArrowProps>(Popover.Arrow, 'arrow')

export const ArrowTip = withContext<Popover.ArrowTipProps>(Popover.ArrowTip, 'arrowTip')

export const CloseTrigger = withContext<Popover.CloseTriggerProps>(
  Popover.CloseTrigger,
  'closeTrigger',
)

export const Content = withContext<Popover.ContentProps>(Popover.Content, 'content')

export const Description = withContext<Popover.DescriptionProps>(Popover.Description, 'description')

export const Indicator = withContext<Popover.IndicatorProps>(Popover.Indicator, 'indicator')

export const Positioner = withContext<Popover.PositionerProps>(Popover.Positioner, 'positioner')

export const Title = withContext<Popover.TitleProps>(Popover.Title, 'title')

export const Trigger = withContext<Popover.TriggerProps>(Popover.Trigger, 'trigger')

export { PopoverContext as Context, type PopoverContextProps as ContextProps } from '@ark-ui/solid'
