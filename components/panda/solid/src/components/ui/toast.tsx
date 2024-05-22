import { type Assign, Toast } from '@ark-ui/solid'
import { type ToastVariantProps, toast } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toast)

export interface RootProps extends Assign<JsxStyleProps, Toast.RootProps>, ToastVariantProps {}
export const Root = withProvider<RootProps>(Toast.Root, 'root')

export const ActionTrigger = withContext<Assign<JsxStyleProps, Toast.ActionTriggerProps>>(
  Toast.ActionTrigger,
  'actionTrigger',
)

export const CloseTrigger = withContext<Assign<JsxStyleProps, Toast.CloseTriggerProps>>(
  Toast.CloseTrigger,
  'closeTrigger',
)

export const Description = withContext<Assign<JsxStyleProps, Toast.DescriptionProps>>(
  Toast.Description,
  'description',
)

export const Title = withContext<Assign<JsxStyleProps, Toast.TitleProps>>(Toast.Title, 'title')

export {
  ToastContext as Context,
  Toaster,
  createToaster,
  type ToastContextProps as ContextProps,
  type ToasterProps,
} from '@ark-ui/solid'
