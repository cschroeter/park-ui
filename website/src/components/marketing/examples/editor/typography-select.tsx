import { Portal } from '@ark-ui/react'
import { type Editor } from '@tiptap/react'
import { BiCheck, BiExpandVertical } from 'react-icons/bi'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

type Props = {
  editor: Editor
}

type Item = { value: string; label: string; level?: number }

export const TypographySelect = (props: Props) => {
  const { editor } = props

  const items: Item[] = [
    { value: 'paragraph', label: 'Paragraph' },
    { value: 'h1', label: 'Heading 1', level: 1 },
    { value: 'h2', label: 'Heading 2', level: 2 },
    { value: 'h3', label: 'Heading 3', level: 3 },
  ]

  const value = [
    editor.isActive('paragraph') ? 'paragraph' : '',
    editor.isActive('heading', { level: 1 }) ? 'h1' : '',
    editor.isActive('heading', { level: 2 }) ? 'h2' : '',
    editor.isActive('heading', { level: 3 }) ? 'h3' : '',
  ].filter(Boolean)

  return (
    <Select
      items={items}
      value={value}
      positioning={{ sameWidth: true }}
      size="sm"
      width="32"
      variant="ghost"
      onChange={(e) => {
        const foo = e.items[0] as { value: string; label: string; level?: number }
        if (foo.value === 'paragraph') {
          editor.chain().focus().setParagraph().run()
        } else {
          // @ts-expect-error
          editor.chain().focus().toggleHeading({ level: foo.level }).run()
        }
      }}
    >
      <SelectTrigger>
        <SelectValue />
        <BiExpandVertical />
      </SelectTrigger>
      <Portal>
        <SelectPositioner>
          <SelectContent>
            {items.map((item, id) => (
              <SelectItem key={id} item={item}>
                <SelectItemText>{item.label}</SelectItemText>
                <SelectItemIndicator>
                  <BiCheck />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectContent>
        </SelectPositioner>
      </Portal>
    </Select>
  )
}
