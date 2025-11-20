import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react'
import { ButtonGroup, IconButton, ToggleGroup } from '@/components/ui'

export const App = () => {
  return (
    <ToggleGroup.Root defaultValue={['left']} asChild>
      <ButtonGroup variant="outline" attached>
        <ToggleGroup.Item value="left" asChild>
          <IconButton aria-label="Align Left">
            <AlignLeftIcon />
          </IconButton>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="center" asChild>
          <IconButton aria-label="Align Center">
            <AlignCenterIcon />
          </IconButton>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="right" asChild>
          <IconButton aria-label="Align Right">
            <AlignRightIcon />
          </IconButton>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="justify" asChild>
          <IconButton aria-label="Align Justify">
            <AlignJustifyIcon />
          </IconButton>
        </ToggleGroup.Item>
      </ButtonGroup>
    </ToggleGroup.Root>
  )
}
