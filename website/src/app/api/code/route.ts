import { NextResponse } from 'next/server'
import { highlight } from '~/lib/shiki'
// @ts-expect-error
import { getBorderRadiiTokens } from '~/lib/get-border-raddii-tokens'
import template from './config.hbs'

export async function POST(request: Request) {
  const body = await request.json()
  const { colorPlaette, borderRadii } = body

  const radii = getBorderRadiiTokens(borderRadii)

  const config = template({
    colorPalette: colorPlaette.value,
    radii,
    curlyOpen: '{',
    curlyClose: '}',
  })
  const code = await highlight({ code: config, lang: 'tsx' })

  return NextResponse.json({ ok: 'true', data: { code, config } })
}
