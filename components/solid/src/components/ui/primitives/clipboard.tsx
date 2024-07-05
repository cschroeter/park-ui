import { Clipboard, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type ClipboardVariantProps, clipboard } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(clipboard)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Clipboard.RootProviderProps>, ClipboardVariantProps>
>(Clipboard.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Clipboard.RootProps>, ClipboardVariantProps>
>(Clipboard.Root, 'root')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Clipboard.ControlProps>>(
  Clipboard.Control,
  'control',
)

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, Clipboard.IndicatorProps>>(
  Clipboard.Indicator,
  'indicator',
)

export const Input = withContext<Assign<HTMLStyledProps<'input'>, Clipboard.InputProps>>(
  Clipboard.Input,
  'input',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, Clipboard.LabelProps>>(
  Clipboard.Label,
  'label',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Clipboard.TriggerProps>>(
  Clipboard.Trigger,
  'trigger',
)

export { ClipboardContext as Context } from '@ark-ui/solid'
