import { Toast } from '@ark-ui/solid'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const toast = tv(
  {
    base: 'toast',
    slots: {
      group: 'toast__group',
      root: 'toast__root',
      title: 'toast__title',
      description: 'toast__description',
      actionTrigger: 'toast__actionTrigger',
      closeTrigger: 'toast__closeTrigger',
    },
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(toast)

export interface RootProps extends Toast.RootProps, VariantProps<typeof toast> {}
export const Root = withProvider<RootProps>(Toast.Root, 'root')

export const ActionTrigger = withContext<Toast.ActionTriggerProps>(
  Toast.ActionTrigger,
  'actionTrigger',
)

export const CloseTrigger = withContext<Toast.CloseTriggerProps>(Toast.CloseTrigger, 'closeTrigger')

export const Description = withContext<Toast.DescriptionProps>(Toast.Description, 'description')

export const Title = withContext<Toast.TitleProps>(Toast.Title, 'title')

export {
  ToastContext as Context,
  Toaster,
  createToaster,
  type ToastContextProps as ContextProps,
  type ToasterProps,
} from '@ark-ui/solid'
