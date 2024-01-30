import { Tooltip as ArkTooltip } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
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

export const Tooltip = {
  Root: TooltipRoot,
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Trigger: TooltipTrigger,
}

export interface TooltipRootProps extends ComponentProps<typeof TooltipRoot> {}
export interface TooltipArrowProps extends ComponentProps<typeof TooltipArrow> {}
export interface TooltipArrowTipProps extends ComponentProps<typeof TooltipArrowTip> {}
export interface TooltipContentProps extends ComponentProps<typeof TooltipContent> {}
export interface TooltipPositionerProps extends ComponentProps<typeof TooltipPositioner> {}
export interface TooltipTriggerProps extends ComponentProps<typeof TooltipTrigger> {}
