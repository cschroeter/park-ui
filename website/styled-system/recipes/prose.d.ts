/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface ProseVariant {
  size: 'base'
}

type ProseVariantMap = {
  [key in keyof ProseVariant]: Array<ProseVariant[key]>
}

export type ProseVariantProps = {
  [key in keyof ProseVariant]?: ConditionalValue<ProseVariant[key]>
}

export interface ProseRecipe {
  __type: ProseVariantProps
  (props?: ProseVariantProps): string
  raw: (props?: ProseVariantProps) => ProseVariantProps
  variantMap: ProseVariantMap
  variantKeys: Array<keyof ProseVariant>
  splitVariantProps<Props extends ProseVariantProps>(
    props: Props,
  ): [ProseVariantProps, Pretty<DistributiveOmit<Props, keyof ProseVariantProps>>]
}

/** Generated using 🐼 pandacss-preset-typography */
export declare const prose: ProseRecipe
