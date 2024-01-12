import { Tooltip as ArkTooltip } from '@ark-ui/react/tooltip'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { tooltip } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tooltip)

const Tooltip = withProvider(ArkTooltip.Root)
const TooltipArrow = withContext(styled(ArkTooltip.Arrow), 'arrow')
const TooltipArrowTip = withContext(styled(ArkTooltip.ArrowTip), 'arrowTip')
const TooltipContent = withContext(styled(ArkTooltip.Content), 'content')
const TooltipPositioner = withContext(styled(ArkTooltip.Positioner), 'positioner')
const TooltipTrigger = withContext(styled(ArkTooltip.Trigger), 'trigger')

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

export interface TooltipProps extends HTMLStyledProps<typeof Tooltip> {}
export interface TooltipArrowProps extends HTMLStyledProps<typeof TooltipArrow> {}
export interface TooltipArrowTipProps extends HTMLStyledProps<typeof TooltipArrowTip> {}
export interface TooltipContentProps extends HTMLStyledProps<typeof TooltipContent> {}
export interface TooltipPositionerProps extends HTMLStyledProps<typeof TooltipPositioner> {}
export interface TooltipTriggerProps extends HTMLStyledProps<typeof TooltipTrigger> {}
