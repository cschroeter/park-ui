import { Slider } from '~/components/ui/slider'
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const BorderRadiusSlider = () => {
  const { currentBorderRadius, borderRadii, updateBorderRadius } = useThemeGenerator()

  return (
    <Slider.Root
      min={0}
      max={borderRadii.length - 1}
      value={borderRadii.indexOf(currentBorderRadius)}
      onChange={(e) => updateBorderRadius(borderRadii[e.value])}
    >
      <Slider.Label>Radius: {currentBorderRadius}</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb />
      </Slider.Control>
      <Slider.MarkerGroup>
        {borderRadii.map((borderRadius, i) => (
          <Slider.Marker key={borderRadius} value={i} />
        ))}
      </Slider.MarkerGroup>
    </Slider.Root>
  )
}
