import { type Assign, SignaturePad } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type SignaturePadVariantProps, signaturePad } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(signaturePad)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<
    Assign<HTMLStyledProps<'div'>, SignaturePad.RootProviderBaseProps>,
    SignaturePadVariantProps
  >
>(SignaturePad.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, SignaturePad.RootBaseProps>, SignaturePadVariantProps>
>(SignaturePad.Root, 'root')

export const ClearTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, SignaturePad.ClearTriggerBaseProps>
>(SignaturePad.ClearTrigger, 'clearTrigger')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, SignaturePad.ControlBaseProps>>(
  SignaturePad.Control,
  'control',
)

export const Guide = withContext<Assign<HTMLStyledProps<'div'>, SignaturePad.GuideBaseProps>>(
  SignaturePad.Guide,
  'guide',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, SignaturePad.LabelBaseProps>>(
  SignaturePad.Label,
  'label',
)

export const Segment = withContext<Assign<HTMLStyledProps<'svg'>, SignaturePad.SegmentBaseProps>>(
  SignaturePad.Segment,
  'segment',
)

export {
  SignaturePadContext as Context,
  SignaturePadHiddenInput as HiddenInput,
} from '@ark-ui/solid'
