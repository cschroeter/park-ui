import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { ToggleGroup } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Toggle Group',
}

export default meta

export const Base = () => {
  return (
    <div class="flex gap-2.5 flex-row">
      <ToggleGroup.Root multiple>
        <ToggleGroup.Item value="bold" aria-label="Toggle Bold">
          <BoldIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="italic" aria-label="Toggle Italic">
          <ItalicIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="underline" aria-label="Toggle Underline">
          <UnderlineIcon />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  )
}
