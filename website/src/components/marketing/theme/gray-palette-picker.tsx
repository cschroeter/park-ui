import { useEffect } from 'react'
import { Circle, Grid, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { useLocalStorage } from 'usehooks-ts'
import { Button } from '~/components/ui/button'
import { Typography } from '~/components/ui/typography'
import { grayPalettes, updateGrayPalette, type GrayPalette } from '~/lib/update-gray-palette'
import { useColorMode } from '~/lib/use-color-mode'

export const GrayPalettePicker = () => {
  const [option, setOption] = useLocalStorage<GrayPalette>('park-ui-gray-palette', grayPalettes[0])
  const { colorMode } = useColorMode()

  const handleOnClick = (option: GrayPalette) => {
    setOption(option)
  }

  useEffect(() => {
    updateGrayPalette(option)
  }, [option])

  return (
    <Stack gap="1.5">
      <Typography textStyle="sm" fontWeight="semibold">
        Gray Palette
      </Typography>
      <Grid columns={3}>
        {grayPalettes.map((grayPalette, id) => (
          <Button
            key={id}
            variant="secondary"
            size="sm"
            justifyContent="start"
            onClick={() => handleOnClick(grayPalette)}
            {...(option.value === grayPalette.value ? { 'data-selected': 'true' } : {})}
            _selected={{
              background: 'initial',
              color: 'fg.default',
              borderColor: 'border.outline',
              boxShadow: 'outline',
            }}
          >
            <Circle
              width="3.5"
              height="3.5"
              style={{
                background: token.var(
                  `colors.${grayPalette.value}.${colorMode === 'dark' ? '500' : '400'}`,
                ),
              }}
            />
            {grayPalette.label}
          </Button>
        ))}
      </Grid>
    </Stack>
  )
}
