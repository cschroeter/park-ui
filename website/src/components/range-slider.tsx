import {
  RangeSlider as ArkRangeSlider,
  type RangeSliderProps as ArkRangeSliderProps,
} from '@ark-ui/react/range-slider'
import { styled } from 'styled-system/jsx'
import { slider, type SliderVariantProps } from 'styled-system/recipes'
export * from '@ark-ui/react/range-slider'

export type RangeSliderProps = SliderVariantProps & ArkRangeSliderProps
export const RangeSlider = styled(ArkRangeSlider, slider)
