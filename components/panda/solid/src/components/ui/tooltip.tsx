import { Tooltip as ArkTooltip } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { tooltip } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tooltip)

export const TooltipRoot = withProvider(ArkTooltip.Root)
export const TooltipArrow = withContext(styled(ArkTooltip.Arrow), 'arrow')
export const TooltipArrowTip = withContext(styled(ArkTooltip.ArrowTip), 'arrowTip')
export const TooltipContent = withContext(styled(ArkTooltip.Content), 'content')
export const TooltipPositioner = withContext(styled(ArkTooltip.Positioner), 'positioner')
export const TooltipTrigger = withContext(styled(ArkTooltip.Trigger), 'trigger')

export const Tooltip = Object.assign(TooltipRoot, {
  Root: TooltipRoot,
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Trigger: TooltipTrigger,
})

export type TooltipProps = typeof TooltipRoot
export type TooltipArrowProps = typeof TooltipArrow
export type TooltipArrowTipProps = typeof TooltipArrowTip
export type TooltipContentProps = typeof TooltipContent
export type TooltipPositionerProps = typeof TooltipPositioner
export type TooltipTriggerProps = typeof TooltipTrigger
