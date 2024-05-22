import type { Assign } from '@ark-ui/react'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { alert } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(alert)

export interface RootProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>> {}
export const Root = withProvider<HTMLDivElement, RootProps>(ark.div, 'root')

export interface ContentProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>> {}
export const Content = withContext<HTMLDivElement, ContentProps>(ark.div, 'content')

export interface DescriptionProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>> {}
export const Description = withContext<HTMLDivElement, DescriptionProps>(ark.div, 'description')

export interface IconProps extends Assign<JsxStyleProps, HTMLArkProps<'svg'>> {}
export const Icon = withContext<HTMLOrSVGElement, IconProps>(ark.svg, 'icon')

export interface TitleProps extends Assign<JsxStyleProps, HTMLArkProps<'h5'>> {}
export const Title = withContext<HTMLHeadingElement, TitleProps>(ark.h5, 'title')
