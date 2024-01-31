import { Carousel as ArkCarousel } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { carousel } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(carousel)

const Root = withProvider(styled(ArkCarousel.Root), 'root')
const Control = withContext(styled(ArkCarousel.Control), 'control')
const Indicator = withContext(styled(ArkCarousel.Indicator), 'indicator')
const IndicatorGroup = withContext(styled(ArkCarousel.IndicatorGroup), 'indicatorGroup')
const Item = withContext(styled(ArkCarousel.Item), 'item')
const ItemGroup = withContext(styled(ArkCarousel.ItemGroup), 'itemGroup')
const NextTrigger = withContext(styled(ArkCarousel.NextTrigger), 'nextTrigger')
const PrevTrigger = withContext(styled(ArkCarousel.PrevTrigger), 'prevTrigger')
const Viewport = withContext(styled(ArkCarousel.Viewport), 'viewport')

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
