/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface LinkVariant {
  variant: 'text' | 'toc' | 'navbar'
}

type LinkVariantMap = {
  [key in keyof LinkVariant]: Array<LinkVariant[key]>
}

export type LinkVariantProps = {
  [key in keyof LinkVariant]?: ConditionalValue<LinkVariant[key]>
}

export interface LinkRecipe {
  __type: LinkVariantProps
  (props?: LinkVariantProps): string
  raw: (props?: LinkVariantProps) => LinkVariantProps
  variantMap: LinkVariantMap
  variantKeys: Array<keyof LinkVariant>
  splitVariantProps<Props extends LinkVariantProps>(
    props: Props,
  ): [LinkVariantProps, Pretty<DistributiveOmit<Props, keyof LinkVariantProps>>]
}

export declare const link: LinkRecipe
