/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface HeadingVariant {}

type HeadingVariantMap = {
  [key in keyof HeadingVariant]: Array<HeadingVariant[key]>
}

export type HeadingVariantProps = {
  [key in keyof HeadingVariant]?: ConditionalValue<HeadingVariant[key]>
}

export interface HeadingRecipe {
  __type: HeadingVariantProps
  (props?: HeadingVariantProps): string
  raw: (props?: HeadingVariantProps) => HeadingVariantProps
  variantMap: HeadingVariantMap
  variantKeys: Array<keyof HeadingVariant>
  splitVariantProps<Props extends HeadingVariantProps>(
    props: Props,
  ): [HeadingVariantProps, Pretty<DistributiveOmit<Props, keyof HeadingVariantProps>>]
}

export declare const heading: HeadingRecipe
