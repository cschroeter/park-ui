import { useLayoutEffect } from 'react'
import { token, type Token } from 'styled-system/tokens'
import { match } from 'ts-pattern'
import { useLocalStorage } from 'usehooks-ts'
import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from '~/components/ui/slider'

export const BorderRadiusSlider = () => {
  const [option, setOption] = useLocalStorage('park-ui-radii', 1)

  useLayoutEffect(() => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (root) {
      const radii = match<number, Token>(option)
        .with(0, () => 'radii.none')
        .with(1, () => 'radii.sm')
        .with(2, () => 'radii.md')
        .with(3, () => 'radii.lg')
        .with(4, () => 'radii.xl')
        .otherwise(() => 'radii.none')
      root.style.setProperty('--radii-default', token.var(radii))
    }
  }, [option])

  return (
    <Slider min={0} max={4} value={option} onChange={(e) => setOption(e.value)}>
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
