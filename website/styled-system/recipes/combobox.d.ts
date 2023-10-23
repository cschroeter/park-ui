/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface ComboboxVariant {
  size: 'sm' | 'md' | 'lg'
}

type ComboboxVariantMap = {
  [key in keyof ComboboxVariant]: Array<ComboboxVariant[key]>
}

export type ComboboxVariantProps = {
  [key in keyof ComboboxVariant]?: ConditionalValue<ComboboxVariant[key]>
}

export interface ComboboxRecipe {
  __type: ComboboxVariantProps
  (
    props?: ComboboxVariantProps,
  ): Pretty<
    Record<
      | 'root'
      | 'label'
      | 'input'
      | 'positioner'
      | 'control'
      | 'trigger'
      | 'content'
      | 'clearTrigger'
      | 'item'
      | 'itemText'
      | 'itemIndicator'
      | 'itemGroup'
      | 'itemGroupLabel',
      string
    >
  >
  raw: (props?: ComboboxVariantProps) => ComboboxVariantProps
  variantMap: ComboboxVariantMap
  variantKeys: Array<keyof ComboboxVariant>
  splitVariantProps<Props extends ComboboxVariantProps>(
    props: Props,
  ): [ComboboxVariantProps, Pretty<DistributiveOmit<Props, keyof ComboboxVariantProps>>]
}

export declare const combobox: ComboboxRecipe
