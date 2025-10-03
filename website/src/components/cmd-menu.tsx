import { CommandIcon, SearchIcon } from 'lucide-react'
import { Button, Icon, Kbd, Span } from '@/components/ui'

export const CommandMenu = () => {
  return (
    <Button variant="subtle" colorPalette="gray" size="sm" minW="64">
      <Icon color="text.muted" size="sm">
        <SearchIcon />
      </Icon>
      <Span
        fontWeight="normal"
        flex="1"
        minW="0"
        textAlign="start"
        textOverflow="ellipsis"
        overflow="hidden"
      >
        Search...
      </Span>
      <Kbd variant="surface" size="sm" gap="0.5">
        <Icon boxSize="3">
          <CommandIcon />
        </Icon>
        K
      </Kbd>
    </Button>
  )
}
