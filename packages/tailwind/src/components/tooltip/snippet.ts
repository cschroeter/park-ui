import * as Ark from '@ark-ui/react/tooltip'
import { createStyleContext } from '~/lib/create-style-context'
import { tooltipStyles } from './recipe'
export * from '@ark-ui/react/tooltip'

export type TooltipProps = React.ComponentProps<typeof Tooltip>

const { withProvider, withContext } = createStyleContext(tooltipStyles)

const TooltipRoot = withProvider(Ark.Tooltip.Root, 'root')
export const TooltipArrow = withContext(Ark.Tooltip.Arrow, 'arrow')
export const TooltipArrowTip = withContext(Ark.Tooltip.ArrowTip, 'arrowTip')
export const TooltipContent = withContext(Ark.Tooltip.Content, 'content')
export const TooltipPositioner = withContext(Ark.Tooltip.Positioner, 'positioner')
export const TooltipTrigger = withContext(Ark.Tooltip.Trigger, 'trigger')

export const Tooltip = Object.assign(TooltipRoot, {
  Root: TooltipRoot,
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Trigger: TooltipTrigger,
})
