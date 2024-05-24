import { Tooltip } from '@ark-ui/react/tooltip'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const tooltip = tv(
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
const { withRootProvider, withContext } = createStyleContext(tooltip)

export interface RootProps extends Tooltip.RootProps, VariantProps<typeof tooltip> {}
export const Root = withRootProvider<RootProps>(Tooltip.Root)

export const Arrow = withContext<HTMLDivElement, Tooltip.ArrowProps>(Tooltip.Arrow, 'arrow')

export const ArrowTip = withContext<HTMLDivElement, Tooltip.ArrowTipProps>(
  Tooltip.ArrowTip,
  'arrowTip',
)

export const Content = withContext<HTMLDivElement, Tooltip.ContentProps>(Tooltip.Content, 'content')

export const Positioner = withContext<HTMLDivElement, Tooltip.PositionerProps>(
  Tooltip.Positioner,
  'positioner',
)

export const Trigger = withContext<HTMLButtonElement, Tooltip.TriggerProps>(
  Tooltip.Trigger,
  'trigger',
)

export {
  TooltipContext as Context,
  type TooltipContextProps as ContextProps,
} from '@ark-ui/react/tooltip'
