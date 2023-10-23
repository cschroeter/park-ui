/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface LabelVariant {
  size: 'sm' | 'md' | 'lg' | 'xl'
}

type LabelVariantMap = {
  [key in keyof LabelVariant]: Array<LabelVariant[key]>
}

export type LabelVariantProps = {
  [key in keyof LabelVariant]?: ConditionalValue<LabelVariant[key]>
}

export interface LabelRecipe {
  __type: LabelVariantProps
  (props?: LabelVariantProps): string
  raw: (props?: LabelVariantProps) => LabelVariantProps
  variantMap: LabelVariantMap
  variantKeys: Array<keyof LabelVariant>
  splitVariantProps<Props extends LabelVariantProps>(
    props: Props,
  ): [LabelVariantProps, Pretty<DistributiveOmit<Props, keyof LabelVariantProps>>]
}

export declare const label: LabelRecipe
