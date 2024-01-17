import { Tooltip as ArkTooltip } from '@ark-ui/react/tooltip'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'tooltip',
  slots: {
    trigger: 'tooltip__trigger',
    arrow: 'tooltip__arrow',
    arrowTip: 'tooltip__arrowTip',
    positioner: 'tooltip__positioner',
    content: 'tooltip__content',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

const Tooltip = withProvider(ArkTooltip.Root)
const TooltipArrow = withContext(ArkTooltip.Arrow, 'arrow')
const TooltipArrowTip = withContext(ArkTooltip.ArrowTip, 'arrowTip')
const TooltipContent = withContext(ArkTooltip.Content, 'content')
const TooltipPositioner = withContext(ArkTooltip.Positioner, 'positioner')
const TooltipTrigger = withContext(ArkTooltip.Trigger, 'trigger')

const Root = Tooltip
const Arrow = TooltipArrow
const ArrowTip = TooltipArrowTip
const Content = TooltipContent
const Positioner = TooltipPositioner
const Trigger = TooltipTrigger

export {
  Arrow,
  ArrowTip,
  Content,
  Positioner,
  Root,
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
  Trigger,
}
