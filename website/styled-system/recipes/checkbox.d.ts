/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface CheckboxVariant {
  size: 'sm' | 'md' | 'lg'
}

type CheckboxVariantMap = {
  [key in keyof CheckboxVariant]: Array<CheckboxVariant[key]>
}

export type CheckboxVariantProps = {
  [key in keyof CheckboxVariant]?: ConditionalValue<CheckboxVariant[key]>
}

export interface CheckboxRecipe {
  __type: CheckboxVariantProps
  (props?: CheckboxVariantProps): Pretty<Record<'root' | 'label' | 'control', string>>
  raw: (props?: CheckboxVariantProps) => CheckboxVariantProps
  variantMap: CheckboxVariantMap
  variantKeys: Array<keyof CheckboxVariant>
  splitVariantProps<Props extends CheckboxVariantProps>(
    props: Props,
  ): [CheckboxVariantProps, Pretty<DistributiveOmit<Props, keyof CheckboxVariantProps>>]
}

export declare const checkbox: CheckboxRecipe
