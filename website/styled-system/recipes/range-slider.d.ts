/* eslint-disable */
import type { ConditionalValue } from '../types/index'
import type { DistributiveOmit, Pretty } from '../types/system-types'

interface RangeSliderVariant {
  size: 'md'
}

type RangeSliderVariantMap = {
  [key in keyof RangeSliderVariant]: Array<RangeSliderVariant[key]>
}

export type RangeSliderVariantProps = {
  [key in keyof RangeSliderVariant]?: ConditionalValue<RangeSliderVariant[key]>
}

export interface RangeSliderRecipe {
  __type: RangeSliderVariantProps
  (
    props?: RangeSliderVariantProps,
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
  raw: (props?: RangeSliderVariantProps) => RangeSliderVariantProps
  variantMap: RangeSliderVariantMap
  variantKeys: Array<keyof RangeSliderVariant>
  splitVariantProps<Props extends RangeSliderVariantProps>(
    props: Props,
  ): [RangeSliderVariantProps, Pretty<DistributiveOmit<Props, keyof RangeSliderVariantProps>>]
}

export declare const rangeSlider: RangeSliderRecipe
