import { defineTokens } from '@pandacss/dev'
import type { PresetOptions } from '../../types'
import { defineColorPalettes } from './helpers/define-color-palettes'

export const defineColorTokens = (options: PresetOptions) => {
  const colorPalettes = defineColorPalettes(options)

  return defineTokens.colors({
    current: { value: 'currentColor' },
    black: { value: '#000' },
    white: { value: '#fff' },
    transparent: { value: 'rgb(0 0 0 / 0)' },
    ...colorPalettes,
  })
}
