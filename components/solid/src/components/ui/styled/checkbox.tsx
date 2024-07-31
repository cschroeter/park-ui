import { type Assign, Checkbox } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type CheckboxVariantProps, checkbox } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(checkbox)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'label'>, Checkbox.RootProviderBaseProps>, CheckboxVariantProps>
>(Checkbox.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'label'>, Checkbox.RootBaseProps>, CheckboxVariantProps>
>(Checkbox.Root, 'root')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Checkbox.ControlBaseProps>>(
  Checkbox.Control,
  'control',
)

export const Group = withContext<Assign<HTMLStyledProps<'div'>, Checkbox.GroupBaseProps>>(
  Checkbox.Group,
  'group',
)

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, Checkbox.IndicatorBaseProps>>(
  Checkbox.Indicator,
  'indicator',
)

export const Label = withContext<Assign<HTMLStyledProps<'span'>, Checkbox.LabelBaseProps>>(
  Checkbox.Label,
  'label',
)

export {
  CheckboxContext as Context,
  CheckboxHiddenInput as HiddenInput,
} from '@ark-ui/solid'
