import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { alert } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(alert)

export const AlertRoot = withProvider(styled(ark.div), 'root')
export const AlertContent = withContext(styled(ark.div), 'content')
export const AlertDescription = withContext(styled(ark.p), 'description')
export const AlertIcon = withContext(styled(ark.svg), 'icon')
export const AlertTitle = withContext(styled(ark.h5), 'title')

export const Alert = {
  Root: AlertRoot,
  Content: AlertContent,
  Description: AlertDescription,
  Icon: AlertIcon,
  Title: AlertTitle,
}

export interface AlertRootProps extends ComponentProps<typeof AlertRoot> {}
export interface AlertContentProps extends ComponentProps<typeof AlertContent> {}
export interface AlertDescriptionProps extends ComponentProps<typeof AlertDescription> {}
export interface AlertIconProps extends ComponentProps<typeof AlertIcon> {}
export interface AlertTitleProps extends ComponentProps<typeof AlertTitle> {}
