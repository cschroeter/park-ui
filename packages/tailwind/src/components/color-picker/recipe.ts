import { tv } from 'tailwind-variants'

export const colorPickerStyles = tv({
  base: 'colorPicker',
  slots: {
    root: 'colorPicker__root',
    label: 'colorPicker__label',
    control: 'colorPicker__control',
    trigger: 'colorPicker__trigger',
    positioner: 'colorPicker__positioner',
    content: 'colorPicker__content',
    area: 'colorPicker__area',
    areaThumb: 'colorPicker__areaThumb',
    areaBackground: 'colorPicker__areaBackground',
    channelSlider: 'colorPicker__channelSlider',
    channelSliderTrack: 'colorPicker__channelSliderTrack',
    channelSliderThumb: 'colorPicker__channelSliderThumb',
    channelInput: 'colorPicker__channelInput',
    transparencyGrid: 'colorPicker__transparencyGrid',
    swatchGroup: 'colorPicker__swatchGroup',
    swatchTrigger: 'colorPicker__swatchTrigger',
    swatch: 'colorPicker__swatch',
    eyeDropperTrigger: 'colorPicker__eyeDropperTrigger',
    valueText: 'colorPicker__valueText',
  },
  variants: {},
})
