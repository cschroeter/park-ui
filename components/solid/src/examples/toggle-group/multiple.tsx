import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-solid'
import { ButtonGroup, IconButton, ToggleGroup } from '@/components/ui'

export const App = () => {
  return (
    <ToggleGroup.Root
      defaultValue={['bold', 'underline']}
      multiple
      asChild={(props) => (
        <ButtonGroup variant="outline" attached {...props()}>
          <ToggleGroup.Item
            value="bold"
            asChild={(itemProps) => (
              <IconButton aria-label="Toggle Bold" {...itemProps()}>
                <BoldIcon />
              </IconButton>
            )}
          />
          <ToggleGroup.Item
            value="italic"
            asChild={(itemProps) => (
              <IconButton aria-label="Toggle Italic" {...itemProps()}>
                <ItalicIcon />
              </IconButton>
            )}
          />
          <ToggleGroup.Item
            value="underline"
            asChild={(itemProps) => (
              <IconButton aria-label="Toggle Underline" {...itemProps()}>
                <UnderlineIcon />
              </IconButton>
            )}
          />
        </ButtonGroup>
      )}
    />
  )
}
