import { Editor } from '@tiptap/react'
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  BrushIcon,
  CheckSquareIcon,
  CodeIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  RedoIcon,
  StrikethroughIcon,
  UndoIcon,
  VideoIcon,
} from 'lucide-react'
import { Divider, HStack, Wrap } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Toggle, ToggleGroup } from '~/components/ui/toggle-group'
import { TypographySelect } from './typography-select'

type Props = {
  editor: Editor | null
}

export const MenuBar = (props: Props) => {
  const { editor } = props

  if (!editor) {
    return null
  }

  return (
    <>
      <Wrap gap="2.5" align="center">
        <HStack gap="1">
          <Button
            px="0"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <UndoIcon />
          </Button>
          <Button
            px="0"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <RedoIcon />
          </Button>
        </HStack>
        <Divider orientation="vertical" h="6" />
        <TypographySelect editor={editor} />
        <Divider orientation="vertical" h="6" />
        <ToggleGroup
          multiple
          size="sm"
          variant="ghost"
          value={[
            editor.isActive('bold') ? 'bold' : '',
            editor.isActive('italic') ? 'italic' : '',
            editor.isActive('strike') ? 'underline' : '',
          ]}
        >
          <Toggle
            value="bold"
            aria-label="Toggle Bold"
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <BoldIcon />
          </Toggle>
          <Toggle
            value="italic"
            aria-label="Toggle Italic"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <ItalicIcon />
          </Toggle>
          <Toggle
            value="underline"
            aria-label="Toggle Underline"
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <StrikethroughIcon />
          </Toggle>
        </ToggleGroup>
        <Divider orientation="vertical" h="6" />
        <ToggleGroup
          size="sm"
          variant="ghost"
          multiple
          value={[editor.isActive('code') ? 'code' : ''].filter(Boolean)}
        >
          <Toggle
            value="code"
            aria-label="Toggle Code"
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
          >
            <CodeIcon />
          </Toggle>
          <Toggle value="pen" aria-label="Align Left">
            <BrushIcon />
          </Toggle>
          <Toggle value="link" aria-label="Align Left">
            <LinkIcon />
          </Toggle>
        </ToggleGroup>
        <Divider orientation="vertical" h="6" />
        <ToggleGroup
          value={[
            editor.isActive({ textAlign: 'left' }) ? 'left' : '',
            editor.isActive({ textAlign: 'center' }) ? 'center' : '',
            editor.isActive({ textAlign: 'right' }) ? 'right' : '',
            editor.isActive({ textAlign: 'justify' }) ? 'justify' : '',
          ].filter(Boolean)}
          size="sm"
          variant="ghost"
          onChange={(e) =>
            editor
              .chain()
              .focus()
              .setTextAlign(e.value[0] ?? '')
              .run()
          }
        >
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
        <Divider orientation="vertical" h="6" />
        <ToggleGroup size="sm" variant="ghost" multiple>
          <Toggle value="left" aria-label="Align Left">
            <ListIcon />
          </Toggle>
          <Toggle value="center" aria-label="Align Center">
            <CheckSquareIcon />
          </Toggle>
        </ToggleGroup>
        <Divider orientation="vertical" h="6" />
        <ToggleGroup size="sm" variant="ghost" multiple>
          <Toggle value="left" aria-label="Align Left">
            <ImageIcon />
          </Toggle>
          <Toggle value="center" aria-label="Align Center">
            <VideoIcon />
          </Toggle>
        </ToggleGroup>
      </Wrap>
    </>
  )
}
