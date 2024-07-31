import { type Assign, Toast } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { toast } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(toast)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<Assign<HTMLStyledProps<'div'>, Toast.RootProps>>(
  Toast.Root,
  'root',
)

export const ActionTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Toast.ActionTriggerProps>
>(Toast.ActionTrigger, 'actionTrigger')

export const CloseTrigger = withContext<Assign<HTMLStyledProps<'div'>, Toast.CloseTriggerProps>>(
  Toast.CloseTrigger,
  'closeTrigger',
)

export const Description = withContext<Assign<HTMLStyledProps<'div'>, Toast.DescriptionProps>>(
  Toast.Description,
  'description',
)

export const Title = withContext<Assign<HTMLStyledProps<'div'>, Toast.TitleProps>>(
  Toast.Title,
  'title',
)

export {
  ToastContext as Context,
  createToaster,
  Toaster,
  type ToastContextProps as ContextProps,
  type ToasterProps,
} from '@ark-ui/solid'
