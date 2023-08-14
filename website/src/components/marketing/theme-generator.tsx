import { BiUndo } from 'react-icons/bi'
import { Box, Stack } from 'styled-system/jsx'
import { Heading, Typography } from '~/components/ui/typography'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import { IconButton } from '../ui/icon-button'
import { BorderRadiusSlider } from './theme/border-radius-slider'
import { ColorPalettePicker } from './theme/color-palette-picker'
import { FontFamilySelect } from './theme/font-family-select'
import { GrayPalettePicker } from './theme/gray-palette-picker'

export const ThemeGenerator = () => {
  const { reset } = useThemeGenerator()

  return (
    <Box
      bg="bg.default"
      borderRadius="l3"
      borderWidth="1px"
      p="6"
      boxShadow="sm"
      width="sm"
      position="relative"
    >
      <Stack gap="5">
        <Box position="absolute" top="2" right="2">
          <IconButton
            aria-label="Reset styles"
            variant="tertiary"
            onClick={() => reset()}
            size="sm"
          >
            <BiUndo />
          </IconButton>
        </Box>
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
