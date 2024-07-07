'use client'
import { CopyIcon, XIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Button, Code, Dialog, IconButton } from '~/components/ui'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import { CodePreview } from '../code-preview'
import { pandaConfigPre } from './panda-config'

export const ThemeConfigDialog = () => {
  const { currentAccentColor, currentBorderRadius, currentGrayColor, getConfig } =
    useThemeGenerator()

  const html = pandaConfigPre
    .replace('__ACCENT_COLOR__', currentAccentColor)
    .replace('__GRAY_COLOR__', currentGrayColor)
    .replace('__BORDER_RADIUS__', currentBorderRadius)

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
            <CodePreview code={getConfig()} html={html} />
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
