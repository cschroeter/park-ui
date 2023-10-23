/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface SliderVariant {
  size: 'md'
}

type SliderVariantMap = {
  [key in keyof SliderVariant]: Array<SliderVariant[key]>
}

export type SliderVariantProps = {
  [key in keyof SliderVariant]?: ConditionalValue<SliderVariant[key]>
}

export interface SliderRecipe {
  __type: SliderVariantProps
  (
    props?: SliderVariantProps,
  ): Pretty<
    Record<
      | 'root'
      | 'label'
      | 'thumb'
      | 'output'
      | 'track'
      | 'range'
      | 'control'
      | 'markerGroup'
      | 'marker',
      string
    >
  >
  raw: (props?: SliderVariantProps) => SliderVariantProps
  variantMap: SliderVariantMap
  variantKeys: Array<keyof SliderVariant>
  splitVariantProps<Props extends SliderVariantProps>(
    props: Props,
  ): [SliderVariantProps, Pretty<DistributiveOmit<Props, keyof SliderVariantProps>>]
}

export declare const slider: SliderRecipe
