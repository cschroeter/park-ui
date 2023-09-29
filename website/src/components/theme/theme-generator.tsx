import { useState } from 'react'
import { Box } from 'styled-system/jsx'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  type CardProps,
} from '../ui/card'
import { BorderRadiusSlider } from './border-radius-slider'
import { ColorPalettePicker } from './color-palette-picker'
import { FontFamilySelect } from './font-family-select'
import { GrayPalettePicker } from './gray-palette-picker'
import { ThemeConfigDialog } from './theme-config-dialog'
import { ThemeContextMenu } from './theme-context-menu'

interface Props extends CardProps {
  hideContextMenu?: boolean
  onCopy?: () => void
}

export const ThemeGenerator = (props: Props) => {
  const { hideContextMenu, onCopy, ...rest } = props
  const { reset, generateConfig } = useThemeGenerator()
  const [isOpen, setIsOpen] = useState(false)

  const handleCopy = () => {
    generateConfig()
    setIsOpen(true)
    onCopy?.()
  }

  return (
    <Card width="sm" {...rest}>
      <ThemeConfigDialog open={isOpen} onClose={() => setIsOpen(false)} />
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
