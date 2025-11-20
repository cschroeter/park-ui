import { Carousel, useCarouselContext } from '@ark-ui/solid/carousel'
import { type ComponentProps, For } from 'solid-js'
import { createStyleContext } from 'styled-system/jsx'
import { carousel } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(carousel)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Carousel.Root, 'root', {
  forwardProps: ['page'],
  defaultProps: () => ({ spacing: '16px' }),
})
export const RootProvider = withProvider(Carousel.RootProvider, 'root')
export const AutoplayTrigger = withContext(Carousel.AutoplayTrigger, 'autoplayTrigger')
export const Control = withContext(Carousel.Control, 'control')
export const Indicator = withContext(Carousel.Indicator, 'indicator')
export const Item = withContext(Carousel.Item, 'item')
export const ItemGroup = withContext(Carousel.ItemGroup, 'itemGroup')
export const NextTrigger = withContext(Carousel.NextTrigger, 'nextTrigger')
export const PrevTrigger = withContext(Carousel.PrevTrigger, 'prevTrigger')

const StyledIndicatorGroup = withContext(Carousel.IndicatorGroup, 'indicatorGroup')
export const IndicatorGroup = (props: ComponentProps<typeof StyledIndicatorGroup>) => {
  const carousel = useCarouselContext()

  return (
    <StyledIndicatorGroup {...props}>
      <For each={carousel().pageSnapPoints}>{(_, index) => <Indicator index={index()} />}</For>
    </StyledIndicatorGroup>
  )
}

export { CarouselContext as Context } from '@ark-ui/solid/carousel'
