/* eslint-disable */
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface TabsVariant {
  variant: 'line' | 'outline'
  size: 'sm' | 'md' | 'lg'
}

type TabsVariantMap = {
  [key in keyof TabsVariant]: Array<TabsVariant[key]>
}

export type TabsVariantProps = {
  [key in keyof TabsVariant]?: TabsVariant[key]
}

export interface TabsRecipe {
  __type: TabsVariantProps
  (
    props?: TabsVariantProps,
  ): Pretty<Record<'root' | 'list' | 'trigger' | 'content' | 'indicator', string>>
  raw: (props?: TabsVariantProps) => TabsVariantProps
  variantMap: TabsVariantMap
  variantKeys: Array<keyof TabsVariant>
  splitVariantProps<Props extends TabsVariantProps>(
    props: Props,
  ): [TabsVariantProps, Pretty<DistributiveOmit<Props, keyof TabsVariantProps>>]
}

export declare const tabs: TabsRecipe
