import { Slider as ArkSlider, type SliderProps as ArkSliderProps } from '@ark-ui/react/slider'
import { styled } from 'styled-system/jsx'
import { slider, type SliderVariantProps } from 'styled-system/recipes'
export * from '@ark-ui/react/slider'

export type SliderProps = SliderVariantProps & ArkSliderProps
export const Slider = styled(ArkSlider, slider)
