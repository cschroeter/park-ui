'use client'
import { ark } from '@ark-ui/react/factory'
import { Slider, useSliderContext } from '@ark-ui/react/slider'
import { type ComponentProps, forwardRef } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { slider } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(slider)

export const Root = withProvider(Slider.Root, 'root')
export const Control = withContext(Slider.Control, 'control')
export const DraggingIndicator = withContext(Slider.DraggingIndicator, 'draggingIndicator')
export const Label = withContext(Slider.Label, 'label')
export const Marker = withContext(Slider.Marker, 'marker')
export const MarkerIndicator = withContext(ark.div, 'markerIndicator')
export const MarkerGroup = withContext(Slider.MarkerGroup, 'markerGroup')
export const Range = withContext(Slider.Range, 'range')
export const Thumb = withContext(Slider.Thumb, 'thumb')
export const Track = withContext(Slider.Track, 'track')
export const ValueText = withContext(Slider.ValueText, 'valueText')
export const HiddenInput = Slider.HiddenInput

export { SliderContext as Context } from '@ark-ui/react/slider'

export type RootProps = ComponentProps<typeof Root>
export type MarkerGroupProps = ComponentProps<typeof MarkerGroup>
export type ThumbProps = ComponentProps<typeof Thumb>

export interface MarksProps extends MarkerGroupProps {
  marks?: Array<number | { value: number; label: React.ReactNode }> | undefined
}

export const Marks = forwardRef<HTMLDivElement, MarksProps>(function Marks(props, ref) {
  const { marks, ...rest } = props
  if (!marks?.length) return null

  return (
    <MarkerGroup ref={ref} {...rest}>
      {marks.map((mark, index) => {
        const value = typeof mark === 'number' ? mark : mark.value
        const label = typeof mark === 'number' ? undefined : mark.label
        return (
          <Marker key={index} value={value}>
            <MarkerIndicator />
            {label != null && <span>{label}</span>}
          </Marker>
        )
      })}
    </MarkerGroup>
  )
})

export const Thumbs = (props: Omit<ThumbProps, 'index'>) => {
  const slider = useSliderContext()
  return slider.value.map((_, index) => (
    <Thumb key={index} index={index} {...props}>
      <HiddenInput />
    </Thumb>
  ))
}
