'use client'
import { CopyIcon, XIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Button, Dialog, IconButton } from '~/components/ui'
// import { pandaConfigPre } from '~/configs/panda-config'
// import { tailwindConfigPre } from '~/configs/tailwind-config'
import { useThemeGenerator } from '~/lib/use-theme-generator'
// import { CodePreview } from '../code-preview'

export const ThemeConfigDialog = () => {
  const {
    currentAccentColor,
    currentBorderRadius,
    currentCSSFramework,
    currentGrayColor,
    currentJSFramework,
    getConfig,
  } = useThemeGenerator()

  const html = (currentCSSFramework === 'panda' ? 'panda' : 'tw')
    .replace('__ACCENT_COLOR__', currentAccentColor)
    .replace('__GRAY_COLOR__', currentGrayColor)
    .replace('__BORDER_RADIUS__', currentBorderRadius)
    .replace('__JS_FRAMEWORK__', currentJSFramework)

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
        <Dialog.Content bg={{ base: 'white', _dark: 'gray.1' }} width="fit-content">
          <Stack gap="6" p="6">
            <Stack gap="1">
              <Dialog.Title>Make it yours</Dialog.Title>
              <Dialog.Description>
                Copy and paste the following code into your config file.
              </Dialog.Description>
            </Stack>
            {/* <CodePreview code={getConfig()} html={html} /> */}
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
