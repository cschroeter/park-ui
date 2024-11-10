import { Slider } from '~/components/ui/slider'
import { type BorderRadius, borderRadii } from './theme-options'

interface Props {
  radius: BorderRadius
  onValueChange: (value: BorderRadius) => void
}

export const BorderRadiusSlider = (props: Props) => {
  const { radius, onValueChange } = props

  return (
    <Slider
      min={0}
      max={borderRadii.length - 1}
      value={[borderRadii.indexOf(radius)]}
      onValueChange={(e) => onValueChange(borderRadii[e.value[0]])}
      marks={borderRadii.map((borderRadius) => ({
        value: borderRadii.indexOf(borderRadius),
      }))}
    >
      Radius: {radius}
    </Slider>
  )
}
