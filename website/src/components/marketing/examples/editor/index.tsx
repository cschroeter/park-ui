import TextAlign from '@tiptap/extension-text-align'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { RotateCcwIcon, Share2Icon } from 'lucide-react'
import { Box, Container, HStack } from 'styled-system/jsx'
import { article } from 'styled-system/recipes'
import { Button } from '~/components/ui/button'
import { content } from './content'
import { Logo } from './logo'
import { MenuBar } from './menu-bar'

const extensions = [
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  StarterKit,
]

export const Editor = () => {
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: article(),
      },
    },
  })

  return (
    <Box bg="bg.subtle" borderWidth="1px" borderRadius="l3" overflow="hidden">
      <Box bg="bg.default" py="2" className="dark">
        <Container>
          <HStack justify="space-between">
            <Box color="fg.default">
              <Logo />
            </Box>
            <Box>Center</Box>
            <HStack gap="3">
              <Button size="sm" variant="ghost">
                <RotateCcwIcon />
                Reset
              </Button>
              <Button size="sm">
                <Share2Icon />
                Share
              </Button>
            </HStack>
          </HStack>
        </Container>
      </Box>
      <Box bg="bg.default" borderBottomWidth="1px">
        <Container py="1.5" display="flex" justifyContent="center">
          <MenuBar editor={editor} />
        </Container>
      </Box>
      <Container maxW="3xl" py="5">
        <Box bg="bg.default" borderWidth="1px" minH="3xl" p={{ base: '6', md: '12' }}>
          <EditorContent editor={editor} />
        </Box>
      </Container>
    </Box>
  )
}
