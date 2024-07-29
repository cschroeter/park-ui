import type { Meta } from '@storybook/react'
import { Tooltip } from '~/components/ui/tooltip'

const meta: Meta = {
  title: 'Components/Tooltip',
}

export default meta

export const Base = () => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Arrow>
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>
        <Tooltip.Content>I am a Tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  )
}
