'use client'
import { CopyIcon, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Box, Stack } from 'styled-system/jsx'
import { Button, Code, Dialog, IconButton } from '~/components/ui'
import { highlight } from '~/lib/shiki'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import { CodePreview } from '../code-preview'

export const ThemeConfigDialog = () => {
  const { getConfig } = useThemeGenerator()
  const [html, setHtml] = useState('')

  useEffect(() => {
    const highlightConfig = async () => {
      const html = await highlight(getConfig())
      setHtml(html)
    }
    highlightConfig()
  }, [getConfig])

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>
          <CopyIcon />
          Copy Config
        </Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content bg={{ base: 'white', _dark: 'gray.1' }} width="fit-content" maxW="lg">
          <Stack gap="6" p="6">
            <Stack gap="1">
              <Dialog.Title>Make it yours</Dialog.Title>
              <Dialog.Description>
                Copy and paste the following code into your <Code size="sm">panda.config.ts</Code>{' '}
                and update if needed.
              </Dialog.Description>
            </Stack>
            <Box borderWidth="1px" borderRadius="l3" overflow="hidden">
              <CodePreview code={getConfig()} html={html} />
            </Box>
          </Stack>
          <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <XIcon />
            </IconButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}
