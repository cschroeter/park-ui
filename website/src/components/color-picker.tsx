import {
  ColorPickerContent as ArkColorPickerContent,
  type ColorPickerContentProps as ArkColorPickerContentProps,
} from '@ark-ui/react/color-picker'
import { styled } from 'styled-system/jsx'
import { colorPicker } from 'styled-system/recipes'

export * from '@ark-ui/react/color-picker'

export type ColorPickerContentProps = ArkColorPickerContentProps
export const ColorPickerContent = styled(ArkColorPickerContent, colorPicker)
