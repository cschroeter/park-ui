import { HoverCard } from '@ark-ui/react/hover-card'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const hoverCard = tv(
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
const { withRootProvider, withContext } = createStyleContext(hoverCard)

export interface RootProps extends HoverCard.RootProps, VariantProps<typeof hoverCard> {}
export const Root = withRootProvider<RootProps>(HoverCard.Root)

export const Arrow = withContext<HTMLDivElement, HoverCard.ArrowProps>(HoverCard.Arrow, 'arrow')

export const ArrowTip = withContext<HTMLDivElement, HoverCard.ArrowTipProps>(
  HoverCard.ArrowTip,
  'arrowTip',
)

export const Content = withContext<HTMLDivElement, HoverCard.ContentProps>(
  HoverCard.Content,
  'content',
)

export const Positioner = withContext<HTMLDivElement, HoverCard.PositionerProps>(
  HoverCard.Positioner,
  'positioner',
)

export const Trigger = withContext<HTMLButtonElement, HoverCard.TriggerProps>(
  HoverCard.Trigger,
  'trigger',
)

export {
  HoverCardContext as Context,
  type HoverCardContextProps as ContextProps,
} from '@ark-ui/react/hover-card'
