import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from '~/components/ui/slider'
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const BorderRadiusSlider = () => {
  const { currentBorderRadii, borderRadii, updateBorderRadius } = useThemeGenerator()

  return (
    <Slider
      min={0}
      max={borderRadii.length - 1}
      value={borderRadii.indexOf(currentBorderRadii)}
      onChange={(e) => updateBorderRadius(borderRadii[e.value])}
    >
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
