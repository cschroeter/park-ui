import { Editor } from '@tiptap/react'
import {
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
  FiBold,
  FiCheckSquare,
  FiCode,
  FiCornerUpLeft,
  FiCornerUpRight,
  FiImage,
  FiItalic,
  FiLink,
  FiList,
  FiPenTool,
  FiUnderline,
  FiVideo,
} from 'react-icons/fi'
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
            variant="tertiary"
            size="sm"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <FiCornerUpLeft />
          </Button>
          <Button
            px="0"
            variant="tertiary"
            size="sm"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <FiCornerUpRight />
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
            <FiBold />
          </Toggle>
          <Toggle
            value="italic"
            aria-label="Toggle Italic"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <FiItalic />
          </Toggle>
          <Toggle
            value="underline"
            aria-label="Toggle Underline"
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <FiUnderline />
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
            <FiCode />
          </Toggle>
          <Toggle value="pen" aria-label="Align Left">
            <FiPenTool />
          </Toggle>
          <Toggle value="link" aria-label="Align Left">
            <FiLink />
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
        <Divider orientation="vertical" h="6" />
        <ToggleGroup size="sm" variant="ghost" multiple>
          <Toggle value="left" aria-label="Align Left">
            <FiList />
          </Toggle>
          <Toggle value="center" aria-label="Align Center">
            <FiCheckSquare />
          </Toggle>
        </ToggleGroup>
        <Divider orientation="vertical" h="6" />
        <ToggleGroup size="sm" variant="ghost" multiple>
          <Toggle value="left" aria-label="Align Left">
            <FiImage />
          </Toggle>
          <Toggle value="center" aria-label="Align Center">
            <FiVideo />
          </Toggle>
        </ToggleGroup>
      </Wrap>
    </>
  )
}
