import { Circle, Grid, Stack } from 'styled-system/jsx'
import { token } from 'styled-system/tokens'
import { Button } from '~/components/ui/button'
import { Typography } from '~/components/ui/typography'

export const ColorPicker = () => {
  const options = [
    { label: 'Neutral', bg: 'colors.neutral.950', value: 'default' },
    { label: 'Rose', bg: 'colors.rose.600', value: 'rose' },
    { label: 'Pink', bg: 'colors.pink.600', value: 'pink' },
    { label: 'Fuchsia', bg: 'colors.fuchsia.600', value: 'fuchsia' },
    { label: 'Purple', bg: 'colors.purple.600', value: 'purple' },
    { label: 'Violet', bg: 'colors.violet.600', value: 'violet' },
    { label: 'Indigo', bg: 'colors.indigo.600', value: 'indigo' },
    { label: 'Blue', bg: 'colors.blue.600', value: 'blue' },
    { label: 'Sky', bg: 'colors.sky.600', value: 'sky' },
    { label: 'Cyan', bg: 'colors.cyan.600', value: 'cyan' },
    { label: 'Teal', bg: 'colors.teal.600', value: 'teal' },
    { label: 'Green', bg: 'colors.green.600', value: 'green' },
  ] as const

  const handleOnClick = (value: string) => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (root) {
      // @ts-expect-error TODO
      root.style.setProperty('--colors-accent-default', token.var(`colors.${value}.600`))
      // @ts-expect-error TODO
      root.style.setProperty('--colors-accent-emphasized', token.var(`colors.${value}.700`))
      root.style.setProperty('--colors-accent-fg', token.var(`colors.white`))
      // @ts-expect-error TODO
      root.style.setProperty('--colors-border-accent', token.var(`colors.${value}.600`))
    }
  }

  return (
    <Stack gap="1.5">
      <Typography textStyle="sm" fontWeight="semibold">
        Color
      </Typography>
      <Grid columns={3}>
        {options.map((option, id) => (
          <Button
            key={id}
            variant="secondary"
            size="sm"
            justifyContent="start"
            onClick={() => handleOnClick(option.value)}
          >
            <Circle
              width="3.5"
              height="3.5"
              style={{
                background: token.var(option.bg),
              }}
            />
            {option.label}
          </Button>
        ))}
      </Grid>
    </Stack>
  )
}
