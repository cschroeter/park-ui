import { Tooltip as ArkTooltip } from '@ark-ui/react/tooltip'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('Tooltip')

const Tooltip = withProvider(ArkTooltip.Root)
const TooltipArrow = withContext(chakra(ArkTooltip.Arrow), 'arrow')
const TooltipArrowTip = withContext(chakra(ArkTooltip.ArrowTip), 'arrowTip')
const TooltipContent = withContext(chakra(ArkTooltip.Content), 'content')
const TooltipPositioner = withContext(chakra(ArkTooltip.Positioner), 'positioner')
const TooltipTrigger = withContext(chakra(ArkTooltip.Trigger), 'trigger')

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

export interface TooltipProps extends HTMLChakraProps<typeof Tooltip> {}
export interface TooltipArrowProps extends HTMLChakraProps<typeof TooltipArrow> {}
export interface TooltipArrowTipProps extends HTMLChakraProps<typeof TooltipArrowTip> {}
export interface TooltipContentProps extends HTMLChakraProps<typeof TooltipContent> {}
export interface TooltipPositionerProps extends HTMLChakraProps<typeof TooltipPositioner> {}
export interface TooltipTriggerProps extends HTMLChakraProps<typeof TooltipTrigger> {}
