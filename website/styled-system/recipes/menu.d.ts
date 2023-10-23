/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface MenuVariant {
  size: 'xs' | 'sm' | 'md' | 'lg'
}

type MenuVariantMap = {
  [key in keyof MenuVariant]: Array<MenuVariant[key]>
}

export type MenuVariantProps = {
  [key in keyof MenuVariant]?: ConditionalValue<MenuVariant[key]>
}

export interface MenuRecipe {
  __type: MenuVariantProps
  (
    props?: MenuVariantProps,
  ): Pretty<
    Record<
      | 'contextTrigger'
      | 'trigger'
      | 'triggerItem'
      | 'positioner'
      | 'arrow'
      | 'arrowTip'
      | 'content'
      | 'separator'
      | 'item'
      | 'optionItem'
      | 'itemGroupLabel'
      | 'itemGroup',
      string
    >
  >
  raw: (props?: MenuVariantProps) => MenuVariantProps
  variantMap: MenuVariantMap
  variantKeys: Array<keyof MenuVariant>
  splitVariantProps<Props extends MenuVariantProps>(
    props: Props,
  ): [MenuVariantProps, Pretty<DistributiveOmit<Props, keyof MenuVariantProps>>]
}

export declare const menu: MenuRecipe
