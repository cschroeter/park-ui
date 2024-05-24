import { Select } from '@ark-ui/react/select'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const select = tv(
  {
    base: 'select',
    defaultVariants: { size: 'md', variant: 'outline' },
    slots: {
      label: 'select__label',
      positioner: 'select__positioner',
      trigger: 'select__trigger',
      indicator: 'select__indicator',
      clearTrigger: 'select__clearTrigger',
      item: 'select__item',
      itemText: 'select__itemText',
      itemIndicator: 'select__itemIndicator',
      itemGroup: 'select__itemGroup',
      itemGroupLabel: 'select__itemGroupLabel',
      content: 'select__content',
      root: 'select__root',
      control: 'select__control',
      valueText: 'select__valueText',
    },
    variants: {
      variant: {
        outline: {
          label: 'select__label--variant_outline',
          positioner: 'select__positioner--variant_outline',
          trigger: 'select__trigger--variant_outline',
          indicator: 'select__indicator--variant_outline',
          clearTrigger: 'select__clearTrigger--variant_outline',
          item: 'select__item--variant_outline',
          itemText: 'select__itemText--variant_outline',
          itemIndicator: 'select__itemIndicator--variant_outline',
          itemGroup: 'select__itemGroup--variant_outline',
          itemGroupLabel: 'select__itemGroupLabel--variant_outline',
          content: 'select__content--variant_outline',
          root: 'select__root--variant_outline',
          control: 'select__control--variant_outline',
          valueText: 'select__valueText--variant_outline',
        },
        ghost: {
          label: 'select__label--variant_ghost',
          positioner: 'select__positioner--variant_ghost',
          trigger: 'select__trigger--variant_ghost',
          indicator: 'select__indicator--variant_ghost',
          clearTrigger: 'select__clearTrigger--variant_ghost',
          item: 'select__item--variant_ghost',
          itemText: 'select__itemText--variant_ghost',
          itemIndicator: 'select__itemIndicator--variant_ghost',
          itemGroup: 'select__itemGroup--variant_ghost',
          itemGroupLabel: 'select__itemGroupLabel--variant_ghost',
          content: 'select__content--variant_ghost',
          root: 'select__root--variant_ghost',
          control: 'select__control--variant_ghost',
          valueText: 'select__valueText--variant_ghost',
        },
      },
      size: {
        sm: {
          label: 'select__label--size_sm',
          positioner: 'select__positioner--size_sm',
          trigger: 'select__trigger--size_sm',
          indicator: 'select__indicator--size_sm',
          clearTrigger: 'select__clearTrigger--size_sm',
          item: 'select__item--size_sm',
          itemText: 'select__itemText--size_sm',
          itemIndicator: 'select__itemIndicator--size_sm',
          itemGroup: 'select__itemGroup--size_sm',
          itemGroupLabel: 'select__itemGroupLabel--size_sm',
          content: 'select__content--size_sm',
          root: 'select__root--size_sm',
          control: 'select__control--size_sm',
          valueText: 'select__valueText--size_sm',
        },
        md: {
          label: 'select__label--size_md',
          positioner: 'select__positioner--size_md',
          trigger: 'select__trigger--size_md',
          indicator: 'select__indicator--size_md',
          clearTrigger: 'select__clearTrigger--size_md',
          item: 'select__item--size_md',
          itemText: 'select__itemText--size_md',
          itemIndicator: 'select__itemIndicator--size_md',
          itemGroup: 'select__itemGroup--size_md',
          itemGroupLabel: 'select__itemGroupLabel--size_md',
          content: 'select__content--size_md',
          root: 'select__root--size_md',
          control: 'select__control--size_md',
          valueText: 'select__valueText--size_md',
        },
        lg: {
          label: 'select__label--size_lg',
          positioner: 'select__positioner--size_lg',
          trigger: 'select__trigger--size_lg',
          indicator: 'select__indicator--size_lg',
          clearTrigger: 'select__clearTrigger--size_lg',
          item: 'select__item--size_lg',
          itemText: 'select__itemText--size_lg',
          itemIndicator: 'select__itemIndicator--size_lg',
          itemGroup: 'select__itemGroup--size_lg',
          itemGroupLabel: 'select__itemGroupLabel--size_lg',
          content: 'select__content--size_lg',
          root: 'select__root--size_lg',
          control: 'select__control--size_lg',
          valueText: 'select__valueText--size_lg',
        },
      },
    },
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(select)

export interface RootProps
  extends Select.RootProps<Select.CollectionItem>,
    VariantProps<typeof select> {}
export const Root = withProvider<undefined, RootProps>(Select.Root, 'root')

export const ClearTrigger = withContext<HTMLButtonElement, Select.ClearTriggerProps>(
  Select.ClearTrigger,
  'clearTrigger',
)

export const Content = withContext<HTMLDivElement, Select.ContentProps>(Select.Content, 'content')

export const Control = withContext<HTMLDivElement, Select.ControlProps>(Select.Control, 'control')

export const Indicator = withContext<HTMLDivElement, Select.IndicatorProps>(
  Select.Indicator,
  'indicator',
)

export const ItemGroupLabel = withContext<HTMLDivElement, Select.ItemGroupLabelProps>(
  Select.ItemGroupLabel,
  'itemGroupLabel',
)

export const ItemGroup = withContext<HTMLDivElement, Select.ItemGroupProps>(
  Select.ItemGroup,
  'itemGroup',
)

export const ItemIndicator = withContext<HTMLDivElement, Select.ItemIndicatorProps>(
  Select.ItemIndicator,
  'itemIndicator',
)

export const Item = withContext<HTMLDivElement, Select.ItemProps>(Select.Item, 'item')

export const ItemText = withContext<HTMLDivElement, Select.ItemTextProps>(
  Select.ItemText,
  'itemText',
)

export const Label = withContext<HTMLLabelElement, Select.LabelProps>(Select.Label, 'label')

export const Positioner = withContext<HTMLDivElement, Select.PositionerProps>(
  Select.Positioner,
  'positioner',
)

export const Trigger = withContext<HTMLButtonElement, Select.TriggerProps>(
  Select.Trigger,
  'trigger',
)

export const ValueText = withContext<HTMLSpanElement, Select.ValueTextProps>(
  Select.ValueText,
  'valueText',
)

export {
  SelectContext as Context,
  SelectHiddenSelect as HiddenSelect,
  type SelectContextProps as ContextProps,
  type SelectHiddenSelectProps as HiddenSelectProps,
} from '@ark-ui/react/select'
