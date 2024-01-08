import { CopyIcon, XIcon } from 'lucide-react'
import { Box, Stack } from 'styled-system/jsx'
import { Button, Dialog, IconButton } from '~/components/ui'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import { CodePreviewTabs } from '../code-preview-tabs'

interface Props {
  panda?: JSX.Element
  tailwind?: JSX.Element
}

export const ThemeConfigDialog = (props: Props) => {
  const {
    currentAccentColor,
    currentGrayColor,
    currentBorderRadius,
    currentJsxFramework,
    pandaConfig,
    tailwindConfig,
  } = useThemeGenerator()

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
        <Dialog.Content bg="bg.surface" maxW="md" width="full">
          <Stack gap="6" p="6">
            <Stack gap="1">
              <Dialog.Title>Make it yours</Dialog.Title>
              <Dialog.Description>
                Copy and paste the following code into your Panda or Tailwind config file.
              </Dialog.Description>
            </Stack>
            <Box borderRadius="l3" overflow="hidden" borderWidth="1px">
              <CodePreviewTabs
                tabs={{
                  panda: {
                    label: 'Panda',
                    code: pandaConfig
                      .replace('__ACCENT_COLOR__', currentAccentColor)
                      .replace('__GRAY_COLOR__', currentGrayColor)
                      .replace('__BORDER_RADIUS__', currentBorderRadius)
                      .replace('__JSX_FRAMEWORK__', currentJsxFramework.toLowerCase()),
                    children: (
                      <div
                        dangerouslySetInnerHTML={{
                          // @ts-expect-error TODO fix later
                          __html: props.panda.props.value
                            .replace('__ACCENT_COLOR__', currentAccentColor)
                            .replace('__GRAY_COLOR__', currentGrayColor)
                            .replace('__BORDER_RADIUS__', currentBorderRadius)
                            .replace('__JSX_FRAMEWORK__', currentJsxFramework.toLowerCase()),
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
