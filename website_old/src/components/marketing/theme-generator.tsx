import { Box } from 'styled-system/jsx'
import { useBoolean, useIsClient } from 'usehooks-ts'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  type CardProps,
} from '../ui/card'
import { BorderRadiusSlider } from './theme/border-radius-slider'
import { ColorPalettePicker } from './theme/color-palette-picker'
import { FontFamilySelect } from './theme/font-family-select'
import { GrayPalettePicker } from './theme/gray-palette-picker'
import { ThemeConfigDialog } from './theme/theme-config-dialog'
import { ThemeContextMenu } from './theme/theme-context-menu'

type Props = { hideContextMenu?: boolean; onCopy?: () => void } & CardProps

export const ThemeGenerator = (props: Props) => {
  const { hideContextMenu, onCopy, ...rest } = props
  const { reset, generateConfig } = useThemeGenerator()
  const { value, setTrue, setFalse } = useBoolean(false)
  const isClient = useIsClient()

  if (!isClient) {
    return null
  }

  const handleCopy = () => {
    generateConfig()
    setTrue()
    onCopy?.()
  }

  return (
    <Card width="sm" {...rest}>
      <ThemeConfigDialog open={value} onClose={setFalse} />
      {!hideContextMenu && (
        <Box position="absolute" top="18px" right="2">
          <ThemeContextMenu onReset={reset} onCopy={handleCopy} />
        </Box>
      )}
      <CardHeader>
        <CardTitle>Make it yours</CardTitle>
        <CardDescription>
          Customize your theme and copy the config to use in your project.
        </CardDescription>
      </CardHeader>
      <CardContent gap="4">
        <FontFamilySelect />
        <GrayPalettePicker />
        <ColorPalettePicker />
        <BorderRadiusSlider />
      </CardContent>
    </Card>
  )
}
