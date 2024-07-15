import { Index, type JSX, Show, children, splitProps } from 'solid-js'
import { Slider as ArkSlider } from '~/components/ui/primitives'

export interface SliderProps extends ArkSlider.RootProps {
  marks?: {
    value: number
    label?: JSX.Element
  }[]
}

export const Slider = (props: SliderProps) => {
  const [localProps, rootProps] = splitProps(props, ['children', 'marks'])
  const getChildren = children(() => localProps.children)

  return (
    <ArkSlider.Root {...rootProps}>
      <ArkSlider.Context>
        {(slider) => (
          <>
            <Show when={getChildren()}>
              <ArkSlider.Label>{getChildren()}</ArkSlider.Label>
            </Show>
            <ArkSlider.Control>
              <ArkSlider.Track>
                <ArkSlider.Range />
              </ArkSlider.Track>
              <Index each={slider().value}>
                {(_, index) => (
                  <ArkSlider.Thumb index={index}>
                    <ArkSlider.HiddenInput />
                  </ArkSlider.Thumb>
                )}
              </Index>
            </ArkSlider.Control>
            <Show when={localProps.marks}>
              <ArkSlider.MarkerGroup>
                <Index each={localProps.marks}>
                  {(mark) => (
                    <ArkSlider.Marker value={mark().value}>{mark().label}</ArkSlider.Marker>
                  )}
                </Index>
              </ArkSlider.MarkerGroup>
            </Show>
          </>
        )}
      </ArkSlider.Context>
    </ArkSlider.Root>
  )
}
