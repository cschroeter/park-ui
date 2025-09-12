import { defineLayerStyles, defineStyles } from '@pandacss/dev'

const solid = defineStyles({
  background: 'colorPalette.solid.bg',
  color: 'colorPalette.solid.fg',
  borderColor: 'transparent',
})

const surface = defineStyles({
  '--border-color': '{colors.colorPalette.surface.border}',
  background: 'colorPalette.surface.bg',
  color: 'colorPalette.surface.fg',
  boxShadow: 'inset 0 0 0px 1px var(--border-color)',
})

const subtle = defineStyles({
  background: 'colorPalette.subtle.bg',
  color: 'colorPalette.subtle.fg',
})

const outline = defineStyles({
  '--border-color': '{colors.colorPalette.outline.border}',
  background: 'colorPalette.outline.bg',
  boxShadow: 'inset 0 0 0px 1px var(--border-color)',
  color: 'colorPalette.outline.fg',
})

const plain = defineStyles({
  background: 'colorPalette.plain.bg',
  color: 'colorPalette.plain.fg',
})

const createInteractiveVariant = (base: any, variant: string) => ({
  ...base,
  _hover: {
    '--border-color': `{colors.colorPalette.${variant}.border.hover}`,
    background: `colorPalette.${variant}.bg.hover`,
  },
  _active: {
    '--border-color': `{colors.colorPalette.${variant}.border.active}`,
    background: `colorPalette.${variant}.bg.active`,
  },
})

export const layerStyles = defineLayerStyles({
  solid: { value: solid },
  surface: { value: surface },
  subtle: { value: subtle },
  outline: { value: outline },
  plain: { value: plain },

  'solid.interactive': { value: createInteractiveVariant(solid, 'solid') },
  'surface.interactive': { value: createInteractiveVariant(surface, 'surface') },
  'subtle.interactive': { value: createInteractiveVariant(subtle, 'subtle') },
  'outline.interactive': { value: createInteractiveVariant(outline, 'outline') },
  'plain.interactive': { value: createInteractiveVariant(plain, 'plain') },

  disabled: {
    value: {
      cursor: 'not-allowed',
      opacity: '0.67',
      filter: 'grayscale(100%)',
    },
  },
})
