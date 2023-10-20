import { CopyIcon, XIcon } from 'lucide-react'
import { type PropsWithChildren } from 'react'
import { Stack } from 'styled-system/jsx'
import { Dialog } from '~/components/ui/dialog'
import { IconButton } from '~/components/ui/icon-button'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import { CodePreview } from '../code-preview'
import { Button } from '../ui'

export const ThemeConfigDialog = (props: PropsWithChildren) => {
  const { currentAccentColor, currentGrayColor, currentBorderRadius } = useThemeGenerator()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="solid">
          <CopyIcon />
          Copy Config
        </Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content bg="bg.surface">
          <Stack gap="8" p="6">
            <Stack gap="1">
              <Dialog.Title>Make it yours</Dialog.Title>
              <Dialog.Description>
                Copy and paste the following code into your Panda config.
              </Dialog.Description>
            </Stack>
            <CodePreview code="console.log('foo')">
              <div
                dangerouslySetInnerHTML={{
                  // @ts-expect-error TODO fix later
                  __html: props.children.props.value
                    .replace('__ACCENT_COLOR__', currentAccentColor)
                    .replace('__GRAY_COLOR__', currentGrayColor)
                    .replace('__BORDER_RADIUS__', currentBorderRadius),
                }}
              ></div>
            </CodePreview>
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
