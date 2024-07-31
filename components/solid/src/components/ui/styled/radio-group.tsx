import { type Assign, RadioGroup } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type RadioGroupVariantProps, radioGroup } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(radioGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, RadioGroup.RootProviderBaseProps>, RadioGroupVariantProps>
>(RadioGroup.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, RadioGroup.RootBaseProps>, RadioGroupVariantProps>
>(RadioGroup.Root, 'root')

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, RadioGroup.IndicatorBaseProps>>(
  RadioGroup.Indicator,
  'indicator',
)

export const ItemControl = withContext<
  Assign<HTMLStyledProps<'div'>, RadioGroup.ItemControlBaseProps>
>(RadioGroup.ItemControl, 'itemControl')

export const Item = withContext<Assign<HTMLStyledProps<'label'>, RadioGroup.ItemBaseProps>>(
  RadioGroup.Item,
  'item',
)

export const ItemText = withContext<Assign<HTMLStyledProps<'span'>, RadioGroup.ItemTextBaseProps>>(
  RadioGroup.ItemText,
  'itemText',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, RadioGroup.LabelBaseProps>>(
  RadioGroup.Label,
  'label',
)

export {
  RadioGroupContext as Context,
  RadioGroupItemHiddenInput as ItemHiddenInput,
} from '@ark-ui/solid'
