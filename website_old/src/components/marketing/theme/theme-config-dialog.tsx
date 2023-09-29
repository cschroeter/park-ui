import { Portal } from '@ark-ui/react'
import { XIcon } from 'lucide-react'
import { Box, Flex, Stack } from 'styled-system/jsx'
import { CopyCodeButton } from '~/components/docs/copy-code-button'
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '~/components/ui/dialog'
import { IconButton } from '~/components/ui/icon-button'
import { useThemeGenerator } from '~/lib/use-theme-generator'

type Props = {
  open: boolean
  onClose: () => void
}

export const ThemeConfigDialog = (props: Props) => {
  const { themeConfig } = useThemeGenerator()

  return (
    <Dialog {...props}>
      <Portal>
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
              <Box
                className="dark"
                position="relative"
                bg="bg.subtle"
                borderRadius="l2"
                borderWidth="1px"
              >
                <Box position="absolute" top="2" right="2" zIndex={1}>
                  <CopyCodeButton content={themeConfig.config} />
                </Box>
                <Flex overflow="auto" p="4" width="lg" maxH="lg" minH="md">
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: themeConfig.code,
                    }}
                  />
                </Flex>
              </Box>
            </Stack>
            <DialogCloseTrigger asChild position="absolute" top="2" right="2">
              <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
                <XIcon />
              </IconButton>
            </DialogCloseTrigger>
          </DialogContent>
        </DialogContainer>
      </Portal>
    </Dialog>
  )
}
