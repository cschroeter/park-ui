import { Slider } from '@/components/ui'
import { type BorderRadius, radii } from '~/lib/theme'

interface Props {
  radius: BorderRadius
  onValueChange: (value: BorderRadius) => void
}

export const BorderRadiusSlider = (props: Props) => {
  const { radius, onValueChange } = props

  return (
    <Slider.Root
      min={0}
      max={radii.length - 1}
      value={[radii.indexOf(radius)]}
      onValueChange={(e) => onValueChange(radii[e.value[0]])}
    >
      <Slider.Label>Radius</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
        <Slider.Marks marks={radii.map((label, value) => ({ label, value }))} />
      </Slider.Control>
    </Slider.Root>
  )
}
