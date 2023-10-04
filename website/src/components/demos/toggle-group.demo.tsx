import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Toggle, ToggleGroup, type ToggleGroupProps } from '~/components/ui/toggle-group'

export const Demo = (props: ToggleGroupProps) => {
  return (
    <Stack
      direction={props.orientation === 'horizontal' ? 'row' : 'column'}
      gap="3"
      bg="bg.default"
      borderRadius="l3"
      borderWidth={props.variant === 'ghost' ? '1px' : '0'}
      p={props.variant === 'ghost' ? '1' : '0'}
    >
      <ToggleGroup multiple {...props}>
        <Toggle value="bold" aria-label="Toggle Bold">
          <BoldIcon />
        </Toggle>
        <Toggle value="italic" aria-label="Toggle Italic">
          <ItalicIcon />
        </Toggle>
        <Toggle value="underline" aria-label="Toggle Underline">
          <UnderlineIcon />
        </Toggle>
      </ToggleGroup>
      <ToggleGroup defaultValue={['left']} {...props}>
        <Toggle value="left" aria-label="Align Left">
          <AlignLeftIcon />
        </Toggle>
        <Toggle value="center" aria-label="Align Center">
          <AlignCenterIcon />
        </Toggle>
        <Toggle value="right" aria-label="Align Right">
          <AlignRightIcon />
        </Toggle>
        <Toggle value="justify" aria-label="Align Justify">
          <AlignJustifyIcon />
        </Toggle>
      </ToggleGroup>
    </Stack>
  )
}
