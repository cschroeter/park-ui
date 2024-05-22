import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { card } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(card)

export interface RootProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>> {}
export const Root = withProvider<HTMLDivElement, RootProps>(ark.div, 'root')

export interface BodyProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>> {}
export const Body = withContext<HTMLDivElement, BodyProps>(ark.div, 'body')

export interface DescriptionProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>> {}
export const Description = withContext<HTMLDivElement, DescriptionProps>(ark.div, 'description')

export interface FooterProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>> {}
export const Footer = withContext<HTMLDivElement, FooterProps>(ark.footer, 'footer')

export interface HeaderProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>> {}
export const Header = withContext<HTMLDivElement, HeaderProps>(ark.div, 'header')

export interface TitleProps extends Assign<JsxStyleProps, HTMLArkProps<'h3'>> {}
export const Title = withContext<HTMLHeadingElement, TitleProps>(ark.h3, 'title')
