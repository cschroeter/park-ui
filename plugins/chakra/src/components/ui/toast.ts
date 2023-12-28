import { Toast as ArkToast } from '@ark-ui/react/toast'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('Toast')

const Toast = withProvider(chakra(ArkToast.Root), 'root')
const ToastCloseTrigger = withContext(chakra(ArkToast.CloseTrigger), 'closeTrigger')
const ToastDescription = withContext(chakra(ArkToast.Description), 'description')
const ToastGroup = withContext(chakra(ArkToast.Group), 'group')
const ToastTitle = withContext(chakra(ArkToast.Title), 'title')

const Root = Toast
const CloseTrigger = ToastCloseTrigger
const Description = ToastDescription
const Group = ToastGroup
const Title = ToastTitle

export {
  CloseTrigger,
  Description,
  Group,
  Root,
  Title,
  Toast,
  ToastCloseTrigger,
  ToastDescription,
  ToastGroup,
  ToastTitle,
}

export interface ToastProps extends HTMLChakraProps<typeof Toast> {}
export interface ToastCloseTriggerProps extends HTMLChakraProps<typeof ToastCloseTrigger> {}
export interface ToastDescriptionProps extends HTMLChakraProps<typeof ToastDescription> {}
export interface ToastGroupProps extends HTMLChakraProps<typeof ToastGroup> {}
export interface ToastTitleProps extends HTMLChakraProps<typeof ToastTitle> {}
