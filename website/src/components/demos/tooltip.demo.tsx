import { Portal } from '@ark-ui/react'
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
  type TooltipProps,
} from '~/components/ui/tooltip'

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
