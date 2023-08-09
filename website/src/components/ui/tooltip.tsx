import * as Ark from '@ark-ui/react/tooltip'
import { styled } from 'styled-system/jsx'
import { tooltip, type TooltipVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/tooltip'

const { withProvider, withContext } = createStyleContext(tooltip)

export type TooltipProps = Ark.TooltipProps & TooltipVariantProps

const TooltipRoot = withProvider(styled(Ark.Tooltip.Root), 'root')
const TooltipArrow = withContext(styled(Ark.Tooltip.Arrow), 'arrow')
const TooltipArrowTip = withContext(styled(Ark.Tooltip.ArrowTip), 'arrowTip')
const TooltipContent = withContext(styled(Ark.Tooltip.Content), 'content')
const TooltipPositioner = withContext(styled(Ark.Tooltip.Positioner), 'positioner')
const TooltipTrigger = withContext(styled(Ark.Tooltip.Trigger), 'trigger')

const Tooltip = Object.assign(TooltipRoot, {
  Root: TooltipRoot,
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Trigger: TooltipTrigger,
})

export { Tooltip, TooltipArrow, TooltipArrowTip, TooltipContent, TooltipPositioner, TooltipTrigger }
