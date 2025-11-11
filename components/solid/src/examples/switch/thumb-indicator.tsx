import { CheckIcon, XIcon } from 'lucide-solid'
import { Switch } from '@/components/ui'

export const App = () => {
  return (
    <Switch.Root>
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb>
          <Switch.ThumbIndicator fallback={<XIcon />}>
            <CheckIcon />
          </Switch.ThumbIndicator>
        </Switch.Thumb>
      </Switch.Control>
      <Switch.Label>Label</Switch.Label>
    </Switch.Root>
  )
}
