import { Carousel as ArkCarousel } from '@ark-ui/react/carousel'
import type { ComponentProps } from 'react'
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

export interface CarouselRootProps extends ComponentProps<typeof Root> {}
export interface CarouselControlProps extends ComponentProps<typeof Control> {}
export interface CarouselIndicatorProps extends ComponentProps<typeof Indicator> {}
export interface CarouselIndicatorGroupProps extends ComponentProps<typeof IndicatorGroup> {}
export interface CarouselItemProps extends ComponentProps<typeof Item> {}
export interface CarouselItemGroupProps extends ComponentProps<typeof ItemGroup> {}
export interface CarouselNextTriggerProps extends ComponentProps<typeof NextTrigger> {}
export interface CarouselPrevTriggerProps extends ComponentProps<typeof PrevTrigger> {}
export interface CarouselViewportProps extends ComponentProps<typeof Viewport> {}
