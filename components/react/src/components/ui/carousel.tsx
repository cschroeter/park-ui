'use client'
import { Carousel } from '@ark-ui/react/carousel'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { carousel } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(carousel)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Carousel.Root, 'root')
export const AutoplayTrigger = withContext(Carousel.AutoplayTrigger, 'autoplayTrigger')
export const Control = withContext(Carousel.Control, 'control')
export const IndicatorGroup = withContext(Carousel.IndicatorGroup, 'indicatorGroup')
export const Indicator = withContext(Carousel.Indicator, 'indicator')
export const ItemGroup = withContext(Carousel.ItemGroup, 'itemGroup')
export const Item = withContext(Carousel.Item, 'item')
export const NextTrigger = withContext(Carousel.NextTrigger, 'nextTrigger')
export const PrevTrigger = withContext(Carousel.PrevTrigger, 'prevTrigger')

export { CarouselContext as Context } from '@ark-ui/react/carousel'
