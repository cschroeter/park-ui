import type { Meta } from '@storybook/react'
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
  type TooltipProps,
} from '~/components/ui/tooltip'

const meta: Meta<TooltipProps> = {
  title: 'Tooltip',
  component: Tooltip,
}

export default meta

export const Basic = () => (
  <Tooltip>
    <TooltipTrigger>Hover Me</TooltipTrigger>
    <TooltipPositioner>
      <TooltipArrow>
        <TooltipArrowTip />
      </TooltipArrow>
      <TooltipContent>I am a Tooltip!</TooltipContent>
    </TooltipPositioner>
  </Tooltip>
)
