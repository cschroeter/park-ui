import { Slider } from '~/components/ui/slider'
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const BorderRadiusSlider = () => {
  const { currentBorderRadius, borderRadii, updateBorderRadius } = useThemeGenerator()

  return (
    <Slider
      min={0}
      max={borderRadii.length - 1}
      value={[borderRadii.indexOf(currentBorderRadius)]}
      onValueChange={(e) => updateBorderRadius(borderRadii[e.value[0]])}
      marks={borderRadii.map((borderRadius) => ({
        value: borderRadii.indexOf(borderRadius),
      }))}
    >
      Radius: {currentBorderRadius}
    </Slider>
  )
}
