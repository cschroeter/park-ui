import { type Assign, Clipboard } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type ClipboardVariantProps, clipboard } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(clipboard)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Clipboard.RootProviderBaseProps>, ClipboardVariantProps>
>(Clipboard.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Clipboard.RootBaseProps>, ClipboardVariantProps>
>(Clipboard.Root, 'root')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Clipboard.ControlBaseProps>>(
  Clipboard.Control,
  'control',
)

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, Clipboard.IndicatorBaseProps>>(
  Clipboard.Indicator,
  'indicator',
)

export const Input = withContext<Assign<HTMLStyledProps<'input'>, Clipboard.InputBaseProps>>(
  Clipboard.Input,
  'input',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, Clipboard.LabelBaseProps>>(
  Clipboard.Label,
  'label',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Clipboard.TriggerBaseProps>>(
  Clipboard.Trigger,
  'trigger',
)

export { ClipboardContext as Context } from '@ark-ui/solid'
