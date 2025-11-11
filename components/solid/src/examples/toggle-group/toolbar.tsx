import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-solid'
import { ButtonGroup, IconButton, ToggleGroup } from '@/components/ui'

export const App = () => {
  return (
    <ToggleGroup.Root
      defaultValue={['left']}
      variant="outline"
      asChild={(props) => (
        <ButtonGroup variant="plain" size="sm" {...props()}>
          <ToggleGroup.Item
            value="left"
            asChild={(itemProps) => (
              <IconButton aria-label="Align Left" {...itemProps()}>
                <AlignLeftIcon />
              </IconButton>
            )}
          />
          <ToggleGroup.Item
            value="center"
            asChild={(itemProps) => (
              <IconButton aria-label="Align Center" {...itemProps()}>
                <AlignCenterIcon />
              </IconButton>
            )}
          />
          <ToggleGroup.Item
            value="right"
            asChild={(itemProps) => (
              <IconButton aria-label="Align Right" {...itemProps()}>
                <AlignRightIcon />
              </IconButton>
            )}
          />
          <ToggleGroup.Item
            value="justify"
            asChild={(itemProps) => (
              <IconButton aria-label="Align Justify" {...itemProps()}>
                <AlignJustifyIcon />
              </IconButton>
            )}
          />
        </ButtonGroup>
      )}
    />
  )
}
