import type { Meta } from '@storybook/react'
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { ToggleGroup } from '~/components/ui/toggle-group'

const meta: Meta = {
  title: 'Components/Toggle Group',
}

export default meta

export const Base = () => {
  return (
    <Stack direction="row">
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
    </Stack>
  )
}
