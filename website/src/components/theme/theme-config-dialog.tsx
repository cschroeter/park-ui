import { CopyIcon, XIcon } from 'lucide-react'
import { Box, Stack } from 'styled-system/jsx'
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
import { CodePreviewTabs } from '../code-preview-tabs'
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
        <Button>
          <CopyIcon />
          Copy Config
        </Button>
      </DialogTrigger>
      <DialogBackdrop />
      <DialogContainer>
        <DialogContent bg="bg.surface" maxW="md" width="full">
          <Stack gap="6" p="6">
            <Stack gap="1">
              <DialogTitle>Make it yours</DialogTitle>
              <DialogDescription>
                Copy and paste the following code into your Panda or Tailwind config file.
              </DialogDescription>
            </Stack>
            <Box borderRadius="l3" overflow="hidden" borderWidth="1px">
              <CodePreviewTabs
                tabs={{
                  panda: {
                    label: 'Panda',
                    code: pandaConfig
                      .replace('__ACCENT_COLOR__', currentAccentColor)
                      .replace('__GRAY_COLOR__', currentGrayColor)
                      .replace('__BORDER_RADIUS__', currentBorderRadius),
                    children: (
                      <div
                        dangerouslySetInnerHTML={{
                          // @ts-expect-error TODO fix later
                          __html: props.panda.props.value
                            .replace('__ACCENT_COLOR__', currentAccentColor)
                            .replace('__GRAY_COLOR__', currentGrayColor)
                            .replace('__BORDER_RADIUS__', currentBorderRadius),
                        }}
                      />
                    ),
                  },
                  tailwind: {
                    label: 'Tailwind',
                    code: tailwindConfig
                      .replace('__ACCENT_COLOR__', currentAccentColor)
                      .replace('__GRAY_COLOR__', currentGrayColor)
                      .replace('__BORDER_RADIUS__', currentBorderRadius),
                    children: (
                      <div
                        dangerouslySetInnerHTML={{
                          // @ts-expect-error TODO fix later
                          __html: props.tailwind.props.value
                            .replace('__ACCENT_COLOR__', currentAccentColor)
                            .replace('__GRAY_COLOR__', currentGrayColor)
                            .replace('__BORDER_RADIUS__', currentBorderRadius),
                        }}
                      />
                    ),
                  },
                }}
              />
            </Box>
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
