import { Carousel } from '@ark-ui/react/carousel'
import { styled } from 'styled-system/jsx'
import { carousel } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(carousel)

const Root = withProvider(styled(Carousel.Root), 'root')
const Control = withContext(styled(Carousel.Control), 'control')
const Indicator = withContext(styled(Carousel.Indicator), 'indicator')
const IndicatorGroup = withContext(styled(Carousel.IndicatorGroup), 'indicatorGroup')
const Item = withContext(styled(Carousel.Item), 'item')
const ItemGroup = withContext(styled(Carousel.ItemGroup), 'itemGroup')
const NextTrigger = withContext(styled(Carousel.NextTrigger), 'nextTrigger')
const PrevTrigger = withContext(styled(Carousel.PrevTrigger), 'prevTrigger')
const Viewport = withContext(styled(Carousel.Viewport), 'viewport')

export {
  Control,
  Indicator,
  IndicatorGroup,
  Item,
  ItemGroup,
  NextTrigger,
  PrevTrigger,
  Root,
  Viewport,
}
