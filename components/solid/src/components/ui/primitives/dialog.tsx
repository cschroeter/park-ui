import { Dialog, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type DialogVariantProps, dialog } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(dialog)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withRootProvider<Assign<Dialog.RootProviderProps, DialogVariantProps>>(
  Dialog.RootProvider,
)

export type RootProps = ComponentProps<typeof Root>
export const Root = withRootProvider<Assign<Dialog.RootProps, DialogVariantProps>>(Dialog.Root)

export const Backdrop = withContext<Assign<HTMLStyledProps<'div'>, Dialog.BackdropProps>>(
  Dialog.Backdrop,
  'backdrop',
)

export const CloseTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Dialog.CloseTriggerProps>
>(Dialog.CloseTrigger, 'closeTrigger')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Dialog.ContentProps>>(
  Dialog.Content,
  'content',
)

export const Description = withContext<Assign<HTMLStyledProps<'div'>, Dialog.DescriptionProps>>(
  Dialog.Description,
  'description',
)

export const Positioner = withContext<Assign<HTMLStyledProps<'div'>, Dialog.PositionerProps>>(
  Dialog.Positioner,
  'positioner',
)

export const Title = withContext<Assign<HTMLStyledProps<'h2'>, Dialog.TitleProps>>(
  Dialog.Title,
  'title',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Dialog.TriggerProps>>(
  Dialog.Trigger,
  'trigger',
)

export { DialogContext as Context } from '@ark-ui/solid'
