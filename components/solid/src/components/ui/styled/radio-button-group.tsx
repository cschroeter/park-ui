import { type Assign, RadioGroup } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type RadioButtonGroupVariantProps, radioButtonGroup } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(radioButtonGroup)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, RadioGroup.RootProps>, RadioButtonGroupVariantProps>
>(RadioGroup.Root, 'root')

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, RadioGroup.IndicatorProps>>(
  RadioGroup.Indicator,
  'indicator',
)

export const ItemControl = withContext<Assign<HTMLStyledProps<'div'>, RadioGroup.ItemControlProps>>(
  RadioGroup.ItemControl,
  'itemControl',
)

export const Item = withContext<Assign<HTMLStyledProps<'label'>, RadioGroup.ItemProps>>(
  RadioGroup.Item,
  'item',
)

export const ItemText = withContext<Assign<HTMLStyledProps<'span'>, RadioGroup.ItemTextProps>>(
  RadioGroup.ItemText,
  'itemText',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, RadioGroup.LabelProps>>(
  RadioGroup.Label,
  'label',
)

export {
  RadioGroupContext as Context,
  RadioGroupItemHiddenInput as ItemHiddenInput,
} from '@ark-ui/solid'
