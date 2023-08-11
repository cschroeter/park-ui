import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from '~/components/ui/slider'

export const BorderRadiusSlider = () => {
  return (
    <Slider min={1} max={4} defaultValue={3}>
      <SliderLabel>Radius</SliderLabel>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb />
      </SliderControl>
    </Slider>
  )
}
