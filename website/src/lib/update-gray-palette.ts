import { token } from 'styled-system/tokens'

export const updateGrayPalette = (color: GrayPalette) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  const hues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const
  if (root) {
    hues.map((value) => {
      console.log(
        'set property',
        `--colors-gray-palette-${value}`,
        token.var(`colors.${color.value}.${value}`),
      )
      root.style.setProperty(
        `--colors-gray-palette-${value}`,
        token.var(`colors.${color.value}.${value}`),
      )
    })
  }
}

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never

export type GrayPalette = ElementType<typeof grayPalettes>

export const grayPalettes = [
  { label: 'Neutral', value: 'neutral' },
  { label: 'Stone', value: 'stone' },
  { label: 'Zinc', value: 'zinc' },
  { label: 'Gray', value: 'gray' },
  { label: 'Slate', value: 'slate' },
] as const
