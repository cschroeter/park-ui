/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface IconVariant {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

type IconVariantMap = {
  [key in keyof IconVariant]: Array<IconVariant[key]>
}

export type IconVariantProps = {
  [key in keyof IconVariant]?: ConditionalValue<IconVariant[key]>
}

export interface IconRecipe {
  __type: IconVariantProps
  (props?: IconVariantProps): string
  raw: (props?: IconVariantProps) => IconVariantProps
  variantMap: IconVariantMap
  variantKeys: Array<keyof IconVariant>
  splitVariantProps<Props extends IconVariantProps>(
    props: Props,
  ): [IconVariantProps, Pretty<DistributiveOmit<Props, keyof IconVariantProps>>]
}

export declare const icon: IconRecipe
