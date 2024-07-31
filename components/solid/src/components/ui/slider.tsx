import { Index, type JSX, Show, children, splitProps } from 'solid-js'
import * as StyledSlider from './styled/slider'

export interface SliderProps extends StyledSlider.RootProps {
  marks?: {
    value: number
    label?: JSX.Element
  }[]
}

export const Slider = (props: SliderProps) => {
  const [localProps, rootProps] = splitProps(props, ['children', 'marks'])
  const getChildren = children(() => localProps.children)

  return (
    <StyledSlider.Root {...rootProps}>
      <StyledSlider.Context>
        {(slider) => (
          <>
            <Show when={getChildren()}>
              <StyledSlider.Label>{getChildren()}</StyledSlider.Label>
            </Show>
            <StyledSlider.Control>
              <StyledSlider.Track>
                <StyledSlider.Range />
              </StyledSlider.Track>
              <Index each={slider().value}>
                {(_, index) => (
                  <StyledSlider.Thumb index={index}>
                    <StyledSlider.HiddenInput />
                  </StyledSlider.Thumb>
                )}
              </Index>
            </StyledSlider.Control>
            <Show when={localProps.marks}>
              <StyledSlider.MarkerGroup>
                <Index each={localProps.marks}>
                  {(mark) => (
                    <StyledSlider.Marker value={mark().value}>{mark().label}</StyledSlider.Marker>
                  )}
                </Index>
              </StyledSlider.MarkerGroup>
            </Show>
          </>
        )}
      </StyledSlider.Context>
    </StyledSlider.Root>
  )
}
