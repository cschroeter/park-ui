import { RadioGroup } from '@ark-ui/react/radio-group'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const radioButtonGroup = tv(
  {
    base: 'radioButtonGroup',
    defaultVariants: { size: 'md', variant: 'solid' },
    slots: {
      root: 'radioButtonGroup__root',
      label: 'radioButtonGroup__label',
      item: 'radioButtonGroup__item',
      itemText: 'radioButtonGroup__itemText',
      itemControl: 'radioButtonGroup__itemControl',
      indicator: 'radioButtonGroup__indicator',
    },
    variants: {
      variant: {
        solid: {
          root: 'radioButtonGroup__root--variant_solid',
          label: 'radioButtonGroup__label--variant_solid',
          item: 'radioButtonGroup__item--variant_solid',
          itemText: 'radioButtonGroup__itemText--variant_solid',
          itemControl: 'radioButtonGroup__itemControl--variant_solid',
          indicator: 'radioButtonGroup__indicator--variant_solid',
        },
        outline: {
          root: 'radioButtonGroup__root--variant_outline',
          label: 'radioButtonGroup__label--variant_outline',
          item: 'radioButtonGroup__item--variant_outline',
          itemText: 'radioButtonGroup__itemText--variant_outline',
          itemControl: 'radioButtonGroup__itemControl--variant_outline',
          indicator: 'radioButtonGroup__indicator--variant_outline',
        },
      },
      size: {
        sm: {
          root: 'radioButtonGroup__root--size_sm',
          label: 'radioButtonGroup__label--size_sm',
          item: 'radioButtonGroup__item--size_sm',
          itemText: 'radioButtonGroup__itemText--size_sm',
          itemControl: 'radioButtonGroup__itemControl--size_sm',
          indicator: 'radioButtonGroup__indicator--size_sm',
        },
        md: {
          root: 'radioButtonGroup__root--size_md',
          label: 'radioButtonGroup__label--size_md',
          item: 'radioButtonGroup__item--size_md',
          itemText: 'radioButtonGroup__itemText--size_md',
          itemControl: 'radioButtonGroup__itemControl--size_md',
          indicator: 'radioButtonGroup__indicator--size_md',
        },
        lg: {
          root: 'radioButtonGroup__root--size_lg',
          label: 'radioButtonGroup__label--size_lg',
          item: 'radioButtonGroup__item--size_lg',
          itemText: 'radioButtonGroup__itemText--size_lg',
          itemControl: 'radioButtonGroup__itemControl--size_lg',
          indicator: 'radioButtonGroup__indicator--size_lg',
        },
        xl: {
          root: 'radioButtonGroup__root--size_xl',
          label: 'radioButtonGroup__label--size_xl',
          item: 'radioButtonGroup__item--size_xl',
          itemText: 'radioButtonGroup__itemText--size_xl',
          itemControl: 'radioButtonGroup__itemControl--size_xl',
          indicator: 'radioButtonGroup__indicator--size_xl',
        },
      },
    },
  },
  { twMerge: false },
)

const { withProvider, withContext } = createStyleContext(radioButtonGroup)

export interface RootProps extends RadioGroup.RootProps, VariantProps<typeof radioButtonGroup> {}
export const Root = withProvider<HTMLDivElement, RootProps>(RadioGroup.Root, 'root')

export const Indicator = withContext<HTMLDivElement, RadioGroup.IndicatorProps>(
  RadioGroup.Indicator,
  'indicator',
)

export const ItemControl = withContext<HTMLDivElement, RadioGroup.ItemControlProps>(
  RadioGroup.ItemControl,
  'itemControl',
)

export const Item = withContext<HTMLLabelElement, RadioGroup.ItemProps>(RadioGroup.Item, 'item')

export const ItemText = withContext<HTMLSpanElement, RadioGroup.ItemTextProps>(
  RadioGroup.ItemText,
  'itemText',
)

export const Label = withContext<HTMLLabelElement, RadioGroup.LabelProps>(RadioGroup.Label, 'label')

export {
  RadioGroupContext as Context,
  type RadioGroupContextProps as ContextProps,
} from '@ark-ui/react/radio-group'
