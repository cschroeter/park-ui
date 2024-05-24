import { type Assign, type HTMLArkProps, ark } from '@ark-ui/solid'
import { type CardVariantProps, card } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(card)

export interface RootProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>>, CardVariantProps {}
export const Root = withProvider<RootProps>(ark.div, 'root')

export const Body = withContext<Assign<JsxStyleProps, HTMLArkProps<'div'>>>(ark.div, 'body')

export const Description = withContext<Assign<JsxStyleProps, HTMLArkProps<'div'>>>(
  ark.div,
  'description',
)

export const Footer = withContext<Assign<JsxStyleProps, HTMLArkProps<'div'>>>(ark.footer, 'footer')

export const Header = withContext<Assign<JsxStyleProps, HTMLArkProps<'div'>>>(ark.div, 'header')

export const Title = withContext<Assign<JsxStyleProps, HTMLArkProps<'h3'>>>(ark.h3, 'title')
