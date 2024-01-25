import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { alert } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(alert)

const Alert = withProvider(styled(ark.div), 'root')
const AlertContent = withContext(styled(ark.div), 'content')
const AlertDescription = withContext(styled(ark.p), 'description')
const AlertIcon = withContext(styled(ark.svg), 'icon')
const AlertTitle = withContext(styled(ark.h5), 'title')

const Root = Alert
const Content = AlertContent
const Description = AlertDescription
const Icon = AlertIcon
const Title = AlertTitle

export {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Content,
  Description,
  Icon,
  Root,
  Title,
}

export interface AlertProps extends ComponentProps<typeof Alert> {}
export interface AlertContentProps extends ComponentProps<typeof AlertContent> {}
export interface AlertDescriptionProps extends ComponentProps<typeof AlertDescription> {}
export interface AlertIconProps extends ComponentProps<typeof AlertIcon> {}
export interface AlertTitleProps extends ComponentProps<typeof AlertTitle> {}
