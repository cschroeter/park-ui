'use client'
import { type ReactNode, forwardRef } from 'react'
import * as StyledSlider from './styled/slider'

export interface SliderProps extends StyledSlider.RootProps {
  children?: ReactNode
  marks?: {
    value: number
    label?: ReactNode
  }[]
}

export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const { children, marks, ...rootProps } = props

  return (
    <StyledSlider.Root ref={ref} {...rootProps}>
      <StyledSlider.Context>
        {(api) => (
          <>
            {children && <StyledSlider.Label>{children}</StyledSlider.Label>}
            <StyledSlider.Control>
              <StyledSlider.Track>
                <StyledSlider.Range />
              </StyledSlider.Track>
              {api.value.map((_, index) => (
                <StyledSlider.Thumb key={index} index={index}>
                  <StyledSlider.HiddenInput />
                </StyledSlider.Thumb>
              ))}
            </StyledSlider.Control>
            {props.marks && (
              <StyledSlider.MarkerGroup>
                {props.marks.map((mark) => (
                  <StyledSlider.Marker key={mark.value} value={mark.value}>
                    {mark.label}
                  </StyledSlider.Marker>
                ))}
              </StyledSlider.MarkerGroup>
            )}
          </>
        )}
      </StyledSlider.Context>
    </StyledSlider.Root>
  )
})

Slider.displayName = 'Slider'
