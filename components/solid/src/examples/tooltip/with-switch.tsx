import { createUniqueId } from 'solid-js'
import { Switch, Tooltip } from '@/components/ui'

export const App = () => {
  const id = createUniqueId()
  return (
    <Tooltip ids={{ trigger: id }} content="This is a tooltip">
      <Switch.Root ids={{ root: id }}>
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>Switch with tooltip</Switch.Label>
      </Switch.Root>
    </Tooltip>
  )
}
