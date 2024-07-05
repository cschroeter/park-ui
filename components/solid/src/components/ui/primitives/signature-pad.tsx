import { SignaturePad, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type SignaturePadVariantProps, signaturePad } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(signaturePad)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, SignaturePad.RootProviderProps>, SignaturePadVariantProps>
>(SignaturePad.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, SignaturePad.RootProps>, SignaturePadVariantProps>
>(SignaturePad.Root, 'root')

export const ClearTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, SignaturePad.ClearTriggerProps>
>(SignaturePad.ClearTrigger, 'clearTrigger')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, SignaturePad.ControlProps>>(
  SignaturePad.Control,
  'control',
)

export const Guide = withContext<Assign<HTMLStyledProps<'div'>, SignaturePad.GuideProps>>(
  SignaturePad.Guide,
  'guide',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, SignaturePad.LabelProps>>(
  SignaturePad.Label,
  'label',
)

export const Segment = withContext<Assign<HTMLStyledProps<'svg'>, SignaturePad.SegmentProps>>(
  SignaturePad.Segment,
  'segment',
)

export {
  SignaturePadContext as Context,
  SignaturePadHiddenInput as HiddenInput,
} from '@ark-ui/solid'
