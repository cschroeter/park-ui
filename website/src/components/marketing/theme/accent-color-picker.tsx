import { useEffect } from 'react'
import { Circle, Grid, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { useLocalStorage } from 'usehooks-ts'
import { Button } from '~/components/ui/button'
import { Typography } from '~/components/ui/typography'
import { accentColors, updateAccentColor, type AccentColor } from '~/lib/update-accent-color'
import { useColorMode } from '~/lib/use-color-mode'

export const AccentColorPicker = () => {
  const { colorMode } = useColorMode()
  const [option, setOption] = useLocalStorage<AccentColor>('park-ui-color', accentColors[0])

  const handleOnClick = (option: AccentColor) => {
    setOption(option)
  }

  useEffect(() => {
    updateAccentColor(option, colorMode)
  }, [option, colorMode])

  return (
    <Stack gap="1.5">
      <Typography textStyle="sm" fontWeight="semibold">
        Color
      </Typography>
      <Grid columns={3}>
        {accentColors.map((accentColor, id) => (
          <Button
            key={id}
            variant="secondary"
            size="sm"
            justifyContent="start"
            onClick={() => handleOnClick(accentColor)}
            {...(option.value === accentColor.value ? { 'data-selected': 'true' } : {})}
            _selected={{
              background: 'initial',
              color: 'fg.default',
              borderColor: 'border.accent',
              boxShadow: 'accent',
            }}
          >
            <Circle
              width="3.5"
              height="3.5"
              style={{
                background: token.var(
                  `colors.${accentColor.value}.${colorMode === 'light' ? '600' : '300'}`,
                ),
              }}
            />
            {accentColor.label}
          </Button>
        ))}
      </Grid>
    </Stack>
  )
}
