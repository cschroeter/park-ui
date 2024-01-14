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

export const TooltipRoot = withProvider(ArkTooltip.Root)
export const TooltipArrow = withContext(ArkTooltip.Arrow, 'arrow')
export const TooltipArrowTip = withContext(ArkTooltip.ArrowTip, 'arrowTip')
export const TooltipContent = withContext(ArkTooltip.Content, 'content')
export const TooltipPositioner = withContext(ArkTooltip.Positioner, 'positioner')
export const TooltipTrigger = withContext(ArkTooltip.Trigger, 'trigger')

export const Tooltip = Object.assign(TooltipRoot, {
  Root: TooltipRoot,
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Trigger: TooltipTrigger,
})
