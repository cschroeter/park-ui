import type { TooltipProps } from '~/components/ui/tooltip'
import * as Tooltip from '~/components/ui/tooltip'

export const Demo = (props: TooltipProps) => (
  <Tooltip.Root {...props}>
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Arrow>
        <Tooltip.ArrowTip />
      </Tooltip.Arrow>
      <Tooltip.Content>I am a Tooltip!</Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip.Root>
)
