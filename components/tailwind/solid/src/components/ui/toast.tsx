import { Toast as ArkToast } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'toast',
  slots: {
    group: 'toast__group',
    root: 'toast__root',
    title: 'toast__title',
    description: 'toast__description',
    closeTrigger: 'toast__closeTrigger',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

export const ToastRoot = withProvider(ArkToast.Root, 'root')
export const ToastCloseTrigger = withContext(ArkToast.CloseTrigger, 'closeTrigger')
export const ToastDescription = withContext(ArkToast.Description, 'description')
export const ToastGroup = withContext(ArkToast.Group, 'group')
export const ToastTitle = withContext(ArkToast.Title, 'title')

export const Toast = Object.assign(ToastRoot, {
  Root: ToastRoot,
  CloseTrigger: ToastCloseTrigger,
  Description: ToastDescription,
  Group: ToastGroup,
  Title: ToastTitle,
})
