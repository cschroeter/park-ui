import { type Assign, NumberInput } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type NumberInputVariantProps, numberInput } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(numberInput)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, NumberInput.RootProviderBaseProps>, NumberInputVariantProps>
>(NumberInput.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, NumberInput.RootBaseProps>, NumberInputVariantProps>
>(NumberInput.Root, 'root')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, NumberInput.ControlBaseProps>>(
  NumberInput.Control,
  'control',
)

export const DecrementTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, NumberInput.DecrementTriggerBaseProps>
>(NumberInput.DecrementTrigger, 'decrementTrigger')

export const IncrementTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, NumberInput.IncrementTriggerBaseProps>
>(NumberInput.IncrementTrigger, 'incrementTrigger')

export const Input = withContext<Assign<HTMLStyledProps<'input'>, NumberInput.InputBaseProps>>(
  NumberInput.Input,
  'input',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, NumberInput.LabelBaseProps>>(
  NumberInput.Label,
  'label',
)

export const Scrubber = withContext<Assign<HTMLStyledProps<'div'>, NumberInput.ScrubberBaseProps>>(
  NumberInput.Scrubber,
  'scrubber',
)

export const ValueText = withContext<Assign<HTMLStyledProps<'span'>, NumberInput.ValueTextProps>>(
  NumberInput.ValueText,
  'valueText',
)

export { NumberInputContext as Context } from '@ark-ui/solid'
