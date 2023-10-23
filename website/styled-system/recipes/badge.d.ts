/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface BadgeVariant {
  variant: 'solid' | 'subtle' | 'outline'
  size: 'sm' | 'md' | 'lg'
}

type BadgeVariantMap = {
  [key in keyof BadgeVariant]: Array<BadgeVariant[key]>
}

export type BadgeVariantProps = {
  [key in keyof BadgeVariant]?: ConditionalValue<BadgeVariant[key]>
}

export interface BadgeRecipe {
  __type: BadgeVariantProps
  (props?: BadgeVariantProps): string
  raw: (props?: BadgeVariantProps) => BadgeVariantProps
  variantMap: BadgeVariantMap
  variantKeys: Array<keyof BadgeVariant>
  splitVariantProps<Props extends BadgeVariantProps>(
    props: Props,
  ): [BadgeVariantProps, Pretty<DistributiveOmit<Props, keyof BadgeVariantProps>>]
}

export declare const badge: BadgeRecipe
