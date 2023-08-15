import { Box, Stack, type BoxProps } from 'styled-system/jsx'
import { useBoolean, useIsClient } from 'usehooks-ts'
import { Heading, Typography } from '~/components/ui/typography'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import { BorderRadiusSlider } from './theme/border-radius-slider'
import { ColorPalettePicker } from './theme/color-palette-picker'
import { FontFamilySelect } from './theme/font-family-select'
import { GrayPalettePicker } from './theme/gray-palette-picker'
import { ThemeConfigDialog } from './theme/theme-config-dialog'
import { ThemeContextMenu } from './theme/theme-context-menu'

type Props = { hideContextMenu?: boolean } & BoxProps

export const ThemeGenerator = (props: Props) => {
  const { hideContextMenu, ...rest } = props
  const { reset, generateConfig } = useThemeGenerator()
  const { value, setTrue, setFalse } = useBoolean(false)
  const isClient = useIsClient()

  if (!isClient) {
    return null
  }

  const handleCopy = () => {
    generateConfig()
    setTrue()
  }

  return (
    <Box
      bg="bg.default"
      borderRadius="l3"
      borderWidth="1px"
      p="6"
      boxShadow="sm"
      width="sm"
      position="relative"
      {...rest}
    >
      <ThemeConfigDialog open={value} onClose={setFalse} />
      {!hideContextMenu && (
        <Box position="absolute" top="18px" right="2">
          <ThemeContextMenu onReset={reset} onCopy={handleCopy} />
        </Box>
      )}
      <Stack gap="4">
        <Stack gap="1">
          <Heading as="h3">Make it yours</Heading>
          <Typography color="fg.muted" textStyle="sm">
            Pick a style and color for your components.
          </Typography>
        </Stack>
        <FontFamilySelect />
        <GrayPalettePicker />
        <ColorPalettePicker />
        <BorderRadiusSlider />
      </Stack>
    </Box>
  )
}
