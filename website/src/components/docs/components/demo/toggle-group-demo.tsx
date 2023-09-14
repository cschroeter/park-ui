import {
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
  FiBold,
  FiItalic,
  FiUnderline,
} from 'react-icons/fi'
import { Stack } from 'styled-system/jsx'
import { Toggle, ToggleGroup, type ToggleGroupProps } from '~/components/ui/toggle-group'

export const ToggleGroupDemo = (props: ToggleGroupProps) => {
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
          <FiBold />
        </Toggle>
        <Toggle value="italic" aria-label="Toggle Italic">
          <FiItalic />
        </Toggle>
        <Toggle value="underline" aria-label="Toggle Underline">
          <FiUnderline />
        </Toggle>
      </ToggleGroup>
      <ToggleGroup defaultValue={['left']} {...props}>
        <Toggle value="left" aria-label="Align Left">
          <FiAlignLeft />
        </Toggle>
        <Toggle value="center" aria-label="Align Center">
          <FiAlignCenter />
        </Toggle>
        <Toggle value="right" aria-label="Align Right">
          <FiAlignRight />
        </Toggle>
        <Toggle value="justify" aria-label="Align Justify">
          <FiAlignJustify />
        </Toggle>
      </ToggleGroup>
    </Stack>
  )
}
