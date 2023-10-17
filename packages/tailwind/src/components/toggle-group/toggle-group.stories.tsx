import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from 'lucide-react'
import { Toggle, ToggleGroup } from './snippet'

export const Demo = (props) => {
  return (
    <div className="flex flex-row gap-3 bg-gray-100 rounded-lg border-1 border-gray-200 p-1">
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
    </div>
  )
}
