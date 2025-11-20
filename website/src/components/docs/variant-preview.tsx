'use client'
import { cva } from 'styled-system/css'
import { Grid, Stack, styled } from 'styled-system/jsx'
import { useTheme } from '~/lib/use-theme'

type Variant = 'solid' | 'subtle' | 'surface' | 'outline' | 'plain'

interface Props {
  variant: Variant
}

export const VariantPreview = (props: Props) => {
  const { variant } = props
  const { accentColor } = useTheme()

  const colors = [accentColor, 'gray'] as const
  const states = ['base', 'hover', 'active', 'disabled'] as const

  return (
    <Stack key={variant} mb="8" direction={{ base: 'row', sm: 'column' }}>
      {colors.map((color) => (
        <Grid
          key={color}
          gridTemplateColumns={{ base: '1fr', sm: 'repeat(4, 1fr)' }}
          colorPalette={color}
          width="full"
        >
          {states.map((state) => (
            <VariantBox key={state} variant={variant} data-state={state} textTransform="capitalize">
              {state === 'base' ? color : `_${state}`}
            </VariantBox>
          ))}
        </Grid>
      ))}
    </Stack>
  )
}

const styles = cva({
  base: {
    alignItems: 'end',
    borderRadius: 'l2',
    display: 'inline-flex',
    fontFamily: 'code',
    fontWeight: 'medium',
    h: '12',
    justifyContent: 'start',
    pb: '1',
    ps: '2',
    textStyle: 'xs',
    transition: 'colors',
    userSelect: 'none',
    "&[data-state='disabled']": {
      layerStyle: 'disabled',
    },
  },
  variants: {
    variant: {
      solid: {
        bg: 'colorPalette.solid.bg',
        color: 'colorPalette.solid.fg',
        "&[data-state='hover']": {
          bg: 'colorPalette.solid.bg.hover',
        },
      },
      subtle: {
        bg: 'colorPalette.subtle.bg',
        color: 'colorPalette.subtle.fg',
        "&[data-state='hover']": {
          bg: 'colorPalette.subtle.bg.hover',
        },
        "&[data-state='active']": {
          bg: 'colorPalette.subtle.bg.active',
        },
      },
      surface: {
        bg: 'colorPalette.surface.bg',
        borderColor: 'colorPalette.surface.border',
        borderWidth: '1px',
        color: 'colorPalette.surface.fg',
        "&[data-state='hover']": {
          borderColor: 'colorPalette.surface.border.hover',
        },
        "&[data-state='active']": {
          bg: 'colorPalette.surface.bg.active',
        },
      },
      outline: {
        borderColor: 'colorPalette.outline.border',
        borderWidth: '1px',
        color: 'colorPalette.outline.fg',
        "&[data-state='hover']": {
          bg: 'colorPalette.outline.bg.hover',
        },
        "&[data-state='active']": {
          bg: 'colorPalette.outline.bg.active',
        },
      },
      plain: {
        color: 'colorPalette.plain.fg',
        "&[data-state='hover']": {
          bg: 'colorPalette.plain.bg.hover',
        },
        "&[data-state='active']": {
          bg: 'colorPalette.plain.bg.active',
        },
      },
    },
  },
})

const VariantBox = styled('div', styles)
