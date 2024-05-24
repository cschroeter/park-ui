import { Popover } from '@ark-ui/react/popover'
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

export const Anchor = withContext<HTMLDivElement, Popover.AnchorProps>(Popover.Anchor, 'anchor')

export const Arrow = withContext<HTMLDivElement, Popover.ArrowProps>(Popover.Arrow, 'arrow')

export const ArrowTip = withContext<HTMLDivElement, Popover.ArrowTipProps>(
  Popover.ArrowTip,
  'arrowTip',
)

export const CloseTrigger = withContext<HTMLButtonElement, Popover.CloseTriggerProps>(
  Popover.CloseTrigger,
  'closeTrigger',
)

export const Content = withContext<HTMLDivElement, Popover.ContentProps>(Popover.Content, 'content')

export const Description = withContext<HTMLParagraphElement, Popover.DescriptionProps>(
  Popover.Description,
  'description',
)

export const Indicator = withContext<HTMLDivElement, Popover.IndicatorProps>(
  Popover.Indicator,
  'indicator',
)

export const Positioner = withContext<HTMLDivElement, Popover.PositionerProps>(
  Popover.Positioner,
  'positioner',
)

export const Title = withContext<HTMLDivElement, Popover.TitleProps>(Popover.Title, 'title')

export const Trigger = withContext<HTMLButtonElement, Popover.TriggerProps>(
  Popover.Trigger,
  'trigger',
)

export {
  PopoverContext as Context,
  type PopoverContextProps as ContextProps,
} from '@ark-ui/react/popover'
