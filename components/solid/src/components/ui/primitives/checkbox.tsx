import { Checkbox, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type CheckboxVariantProps, checkbox } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(checkbox)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'label'>, Checkbox.RootProviderProps>, CheckboxVariantProps>
>(Checkbox.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'label'>, Checkbox.RootProps>, CheckboxVariantProps>
>(Checkbox.Root, 'root')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Checkbox.ControlProps>>(
  Checkbox.Control,
  'control',
)

export const Group = withContext<Assign<HTMLStyledProps<'div'>, Checkbox.GroupProps>>(
  Checkbox.Group,
  'group',
)

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, Checkbox.IndicatorProps>>(
  Checkbox.Indicator,
  'indicator',
)

export const Label = withContext<Assign<HTMLStyledProps<'span'>, Checkbox.LabelProps>>(
  Checkbox.Label,
  'label',
)

export {
  CheckboxContext as Context,
  CheckboxHiddenInput as HiddenInput,
} from '@ark-ui/solid'
