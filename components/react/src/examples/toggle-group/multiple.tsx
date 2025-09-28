import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'
import { ButtonGroup, IconButton, ToggleGroup } from '@/components/ui'

export const App = () => {
  return (
    <ToggleGroup.Root defaultValue={['bold', 'underline']} multiple asChild>
      <ButtonGroup variant="outline" attached>
        <ToggleGroup.Item value="bold" asChild>
          <IconButton aria-label="Toggle Bold">
            <BoldIcon />
          </IconButton>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="italic" asChild>
          <IconButton aria-label="Toggle Italic">
            <ItalicIcon />
          </IconButton>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="underline" asChild>
          <IconButton aria-label="Toggle Underline">
            <UnderlineIcon />
          </IconButton>
        </ToggleGroup.Item>
      </ButtonGroup>
    </ToggleGroup.Root>
  )
}
