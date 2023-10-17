import { Portal } from '@ark-ui/react'
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
  type TooltipProps,
} from './snippet'

export const Demo = (props: TooltipProps) => (
  <Tooltip {...props}>
    <TooltipTrigger>Hover Me</TooltipTrigger>
    <Portal>
      <TooltipPositioner>
        <TooltipArrow>
          <TooltipArrowTip />
        </TooltipArrow>
        <TooltipContent>I am a Tooltip!</TooltipContent>
      </TooltipPositioner>
    </Portal>
  </Tooltip>
)
