import { type AccordionVariantProps, card } from 'styled-system/recipes'
import type { Assign, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(card)

export interface RootProps extends Assign<HTMLStyledProps<'div'>, AccordionVariantProps> {}
export const Root = withProvider<RootProps>('div', 'root')

export const Header = withContext<HTMLStyledProps<'div'>>('div', 'header')
export const Body = withContext<HTMLStyledProps<'div'>>('div', 'body')
export const Footer = withContext<HTMLStyledProps<'div'>>('div', 'footer')
export const Title = withContext<HTMLStyledProps<'h3'>>('h3', 'title')
export const Description = withContext<HTMLStyledProps<'div'>>('div', 'description')
