import { useIsClient } from 'usehooks-ts'
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
  const { currentBorderRadii, updateBorderRadii } = useThemeGenerator()
  const isClient = useIsClient()
  // prevent false positive for server-side rendering
  if (!isClient) {
    return null
  }

  return (
    <Slider
      min={0}
      max={6}
      value={currentBorderRadii}
      // @ts-expect-error
      onChange={(e) => updateBorderRadii(Number(e.value))}
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
