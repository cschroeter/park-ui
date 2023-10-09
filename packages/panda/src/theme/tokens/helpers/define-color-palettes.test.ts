import { expect, test } from 'bun:test'
import { defineColorPalettes } from './define-color-palettes'

test('create color token test', () => {
  const colorPalettes = defineColorPalettes({ grayColor: 'neutral' })
  expect(colorPalettes).toMatchSnapshot()
})
