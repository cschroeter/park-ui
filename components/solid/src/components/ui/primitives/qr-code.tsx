import { QrCode, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type QrCodeVariantProps, qrCode } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(qrCode)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, QrCode.RootProviderProps>, QrCodeVariantProps>
>(QrCode.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, QrCode.RootProps>, QrCodeVariantProps>
>(QrCode.Root, 'root')

export const Frame = withContext<Assign<HTMLStyledProps<'svg'>, QrCode.FrameProps>>(
  QrCode.Frame,
  'frame',
)

export const Overlay = withContext<Assign<HTMLStyledProps<'div'>, QrCode.OverlayProps>>(
  QrCode.Overlay,
  'overlay',
)

export const Pattern = withContext<Assign<HTMLStyledProps<'path'>, QrCode.PatternProps>>(
  QrCode.Pattern,
  'pattern',
)

export { QrCodeContext as Context } from '@ark-ui/solid'
