import { type Assign, Dialog } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type DialogVariantProps, dialog } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withRootProvider, withContext } = createStyleContext(dialog)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withRootProvider<Assign<Dialog.RootProviderProps, DialogVariantProps>>(
  Dialog.RootProvider,
)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<Dialog.RootProps, DialogVariantProps>>(Dialog.Root)

export const Backdrop = withContext<Assign<HTMLStyledProps<'div'>, Dialog.BackdropBaseProps>>(
  Dialog.Backdrop,
  'backdrop',
)

export const CloseTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Dialog.CloseTriggerBaseProps>
>(Dialog.CloseTrigger, 'closeTrigger')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Dialog.ContentBaseProps>>(
  Dialog.Content,
  'content',
)

export const Description = withContext<Assign<HTMLStyledProps<'div'>, Dialog.DescriptionBaseProps>>(
  Dialog.Description,
  'description',
)

export const Positioner = withContext<Assign<HTMLStyledProps<'div'>, Dialog.PositionerBaseProps>>(
  Dialog.Positioner,
  'positioner',
)

export const Title = withContext<Assign<HTMLStyledProps<'h2'>, Dialog.TitleBaseProps>>(
  Dialog.Title,
  'title',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Dialog.TriggerBaseProps>>(
  Dialog.Trigger,
  'trigger',
)

export { DialogContext as Context } from '@ark-ui/solid'
