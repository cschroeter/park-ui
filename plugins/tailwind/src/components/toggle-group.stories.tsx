import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from 'lucide-react'
import { ToggleGroup } from '~/components/ui/toggle-group'

export const Demo = () => {
  const orientation = 'horizontal'
  const variant = 'ghost'
  const size = 'md'

  return (
    <div
      className={`flex flex-${
        orientation === 'horizontal' ? 'row' : 'col'
      } gap-3 rounded-lg border-${variant === 'ghost' ? '1' : '0'} p-${
        variant === 'ghost' ? '1' : '0'
      }}`}
    >
      <ToggleGroup.Root multiple orientation={orientation} size={size}>
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
      <ToggleGroup.Root defaultValue={['left']} size={size} orientation={orientation}>
        <ToggleGroup.Item value="left" aria-label="Align Left">
          <AlignLeftIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="center" aria-label="Align Center">
          <AlignCenterIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="right" aria-label="Align Right">
          <AlignRightIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="justify" aria-label="Align Justify">
          <AlignJustifyIcon />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  )
}
