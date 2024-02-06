import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { alert } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(alert)

export const Root = withProvider(styled(ark.div), 'root')
export const Content = withContext(styled(ark.div), 'content')
export const Description = withContext(styled(ark.div), 'description')
export const Icon = withContext(styled(ark.svg), 'icon')
export const Title = withContext(styled(ark.h5), 'title')

export interface RootProps extends ComponentProps<typeof Root> {}
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface DescriptionProps extends ComponentProps<typeof Description> {}
export interface IconProps extends ComponentProps<typeof Icon> {}
export interface TitleProps extends ComponentProps<typeof Title> {}
