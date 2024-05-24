import { Dialog } from '@ark-ui/react/dialog'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const dialog = tv(
  {
    base: 'dialog',
    slots: {
      trigger: 'dialog__trigger',
      backdrop: 'dialog__backdrop',
      positioner: 'dialog__positioner',
      content: 'dialog__content',
      title: 'dialog__title',
      description: 'dialog__description',
      closeTrigger: 'dialog__closeTrigger',
    },
    variants: {},
  },
  { twMerge: false },
)
const { withRootProvider, withContext } = createStyleContext(dialog)

export interface RootProps extends Dialog.RootProps, VariantProps<typeof dialog> {}
export const Root = withRootProvider<RootProps>(Dialog.Root)

export const Backdrop = withContext<HTMLDivElement, Dialog.BackdropProps>(
  Dialog.Backdrop,
  'backdrop',
)

export const CloseTrigger = withContext<HTMLButtonElement, Dialog.CloseTriggerProps>(
  Dialog.CloseTrigger,
  'closeTrigger',
)

export const Content = withContext<HTMLDivElement, Dialog.ContentProps>(Dialog.Content, 'content')

export const Description = withContext<HTMLParagraphElement, Dialog.DescriptionProps>(
  Dialog.Description,
  'description',
)

export const Positioner = withContext<HTMLDivElement, Dialog.PositionerProps>(
  Dialog.Positioner,
  'positioner',
)

export const Title = withContext<HTMLHeadingElement, Dialog.TitleProps>(Dialog.Title, 'title')

export const Trigger = withContext<HTMLButtonElement, Dialog.TriggerProps>(
  Dialog.Trigger,
  'trigger',
)

export {
  DialogContext as Context,
  type DialogContextProps as ContextProps,
} from '@ark-ui/react/dialog'
