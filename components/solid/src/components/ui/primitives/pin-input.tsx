import { PinInput, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type PinInputVariantProps, pinInput } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(pinInput)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, PinInput.RootProviderProps>, PinInputVariantProps>
>(PinInput.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, PinInput.RootProps>, PinInputVariantProps>
>(PinInput.Root, 'root')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, PinInput.ControlProps>>(
  PinInput.Control,
  'control',
)

export const Input = withContext<Assign<HTMLStyledProps<'input'>, PinInput.InputProps>>(
  PinInput.Input,
  'input',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, PinInput.LabelProps>>(
  PinInput.Label,
  'label',
)

export {
  PinInputContext as Context,
  PinInputHiddenInput as HiddenInput,
} from '@ark-ui/solid'
