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

const Toast = withProvider(ArkToast.Root, 'root')
const ToastCloseTrigger = withContext(ArkToast.CloseTrigger, 'closeTrigger')
const ToastDescription = withContext(ArkToast.Description, 'description')
const ToastGroup = withContext(ArkToast.Group, 'group')
const ToastTitle = withContext(ArkToast.Title, 'title')

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
