import { CopyIcon, XIcon } from 'lucide-react'
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
import { CSSFrameworkTabs } from '../css-framework-tabs'
import { Button } from '../ui'

interface Props {
  panda?: JSX.Element
  tailwind?: JSX.Element
}

export const ThemeConfigDialog = (props: Props) => {
  const { currentAccentColor, currentGrayColor, currentBorderRadius, pandaConfig, tailwindConfig } =
    useThemeGenerator()

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
        <DialogContent bg="bg.surface" width="md">
          <Stack gap="8" p="6">
            <Stack gap="1">
              <DialogTitle>Make it yours</DialogTitle>
              <DialogDescription>
                Copy and paste the following code into your Panda config.
              </DialogDescription>
            </Stack>
            <CSSFrameworkTabs
              panda={
                <CodePreview
                  code={pandaConfig
                    .replace('__ACCENT_COLOR__', currentAccentColor)
                    .replace('__GRAY_COLOR__', currentGrayColor)
                    .replace('__BORDER_RADIUS__', currentBorderRadius)}
                  isAttached
                  expanded
                >
                  <div
                    dangerouslySetInnerHTML={{
                      // @ts-expect-error TODO fix later
                      __html: props.panda.props.value
                        .replace('__ACCENT_COLOR__', currentAccentColor)
                        .replace('__GRAY_COLOR__', currentGrayColor)
                        .replace('__BORDER_RADIUS__', currentBorderRadius),
                    }}
                  ></div>
                </CodePreview>
              }
              tailwind={
                <CodePreview
                  code={tailwindConfig
                    .replace('__ACCENT_COLOR__', currentAccentColor)
                    .replace('__GRAY_COLOR__', currentGrayColor)
                    .replace('__BORDER_RADIUS__', currentBorderRadius)}
                  isAttached
                  expanded
                >
                  <div
                    dangerouslySetInnerHTML={{
                      // @ts-expect-error TODO fix later
                      __html: props.tailwind.props.value
                        .replace('__ACCENT_COLOR__', currentAccentColor)
                        .replace('__GRAY_COLOR__', currentGrayColor)
                        .replace('__BORDER_RADIUS__', currentBorderRadius),
                    }}
                  ></div>
                </CodePreview>
              }
            />
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
