import { Portal } from '@ark-ui/react'
import { Tooltip, type TooltipProps } from './snippet'

export const Demo = (props: TooltipProps) => (
  <Tooltip.Root {...props}>
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Arrow>
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>
        <Tooltip.Content>I am a Tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
)
