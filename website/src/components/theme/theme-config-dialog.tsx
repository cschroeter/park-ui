import { CopyIcon, XIcon } from 'lucide-react'
import { type PropsWithChildren } from 'react'
import { Stack } from 'styled-system/jsx'
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { IconButton } from '~/components/ui/icon-button'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import { CodePreview } from '../code-preview'
import { Button } from '../ui'

export const ThemeConfigDialog = (props: PropsWithChildren) => {
  const { currentAccentColor, currentGrayColor, currentBorderRadius } = useThemeGenerator()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="solid">
          <CopyIcon />
          Copy Config
        </Button>
      </DialogTrigger>
      <DialogBackdrop />
      <DialogContainer>
        <DialogContent>
          <Stack gap="8" p="6">
            <Stack gap="1">
              <DialogTitle>Make it yours</DialogTitle>
              <DialogDescription>
                Copy and paste the following code into your Panda config.
              </DialogDescription>
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
          <DialogCloseTrigger asChild position="absolute" top="2" right="2">
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <XIcon />
            </IconButton>
          </DialogCloseTrigger>
        </DialogContent>
      </DialogContainer>
    </Dialog>
  )
}
