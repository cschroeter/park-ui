import { type Assign, PinInput } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type PinInputVariantProps, pinInput } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(pinInput)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, PinInput.RootProviderBaseProps>, PinInputVariantProps>
>(PinInput.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, PinInput.RootBaseProps>, PinInputVariantProps>
>(PinInput.Root, 'root', { forwardProps: ['mask'] })

export const Control = withContext<Assign<HTMLStyledProps<'div'>, PinInput.ControlBaseProps>>(
  PinInput.Control,
  'control',
)

export const Input = withContext<Assign<HTMLStyledProps<'input'>, PinInput.InputBaseProps>>(
  PinInput.Input,
  'input',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, PinInput.LabelBaseProps>>(
  PinInput.Label,
  'label',
)

export {
  PinInputContext as Context,
  PinInputHiddenInput as HiddenInput,
} from '@ark-ui/solid'
