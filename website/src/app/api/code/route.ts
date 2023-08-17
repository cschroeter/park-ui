import { NextResponse } from 'next/server'
import { getBorderRadiiTokens } from '~/lib/get-border-raddii-tokens'
import { highlight } from '~/lib/shiki'
import type { BorderRadii, ColorPalette, GrayPalette } from '~/lib/use-theme-generator'
// @ts-expect-error
import template from './config.hbs'

export async function POST(request: Request) {
  const body = await request.json()
  const radii = getBorderRadiiTokens(body.borderRadii)
  const grayPalette = getGrayPalette(body.grayPalette)

  const isGrayPaletteDifferent = isDifferentGrayPalette(body.grayPalette)
  const isColorPaletteDifferent = isDifferentAccentColor(body.colorPalette)
  const isRadiiDifferent = isDifferentRadii(body.borderRadii)

  const config = template({
    colorPalette: body.colorPalette.value,
    grayPalette,
    radii,
    curlyOpen: '{',
    curlyClose: '}',

    isGrayPaletteDifferent: isGrayPaletteDifferent,
    isRadiiDifferent: isRadiiDifferent,
    isColorPaletteDifferent: isColorPaletteDifferent,
    areSemanticTokensDifferent: isRadiiDifferent || isColorPaletteDifferent,
    isThemeDifferent: isRadiiDifferent || isColorPaletteDifferent || isGrayPaletteDifferent,
  })

  const code = await highlight({ code: config, lang: 'tsx' })
  return NextResponse.json({ ok: 'true', data: { code, config } })
}

const isDifferentRadii = (borderRadii: BorderRadii) => borderRadii !== 2
const isDifferentAccentColor = (colorPalette: ColorPalette) => colorPalette.value !== 'neutral'
const isDifferentGrayPalette = (grayPalette: GrayPalette) => grayPalette.value !== 'neutral'

const getGrayPalette = (grayPalette: GrayPalette) => {
  const hues = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const
  return hues.reduce((acc, hue) => {
    return {
      ...acc,
      [hue]: `{colors.${grayPalette.value}.${hue}}`,
    }
  }, {})
}
