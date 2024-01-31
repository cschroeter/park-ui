import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { alert } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(alert)

const Root = withProvider(styled(ark.div), 'root')
const Content = withContext(styled(ark.div), 'content')
const Description = withContext(styled(ark.p), 'description')
const Icon = withContext(styled(ark.svg), 'icon')
const Title = withContext(styled(ark.h5), 'title')

export { Content, Description, Icon, Root, Title }

export interface AlertRootProps extends ComponentProps<typeof Root> {}
export interface AlertContentProps extends ComponentProps<typeof Content> {}
export interface AlertDescriptionProps extends ComponentProps<typeof Description> {}
export interface AlertIconProps extends ComponentProps<typeof Icon> {}
export interface AlertTitleProps extends ComponentProps<typeof Title> {}
