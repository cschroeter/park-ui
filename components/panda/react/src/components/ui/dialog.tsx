import type { Assign } from '@ark-ui/react'
import { Dialog } from '@ark-ui/react/dialog'
import { type DialogVariantProps, dialog } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(dialog)

export interface RootProps extends Assign<JsxStyleProps, Dialog.RootProps>, DialogVariantProps {}
export const Root = withRootProvider<RootProps>(Dialog.Root)

export interface BackdropProps extends Assign<JsxStyleProps, Dialog.BackdropProps> {}
export const Backdrop = withContext<HTMLDivElement, BackdropProps>(Dialog.Backdrop, 'backdrop')

export interface CloseTriggerProps extends Assign<JsxStyleProps, Dialog.CloseTriggerProps> {}
export const CloseTrigger = withContext<HTMLButtonElement, CloseTriggerProps>(
  Dialog.CloseTrigger,
  'closeTrigger',
)

export interface ContentProps extends Assign<JsxStyleProps, Dialog.ContentProps> {}
export const Content = withContext<HTMLDivElement, ContentProps>(Dialog.Content, 'content')

export interface DescriptionProps extends Assign<JsxStyleProps, Dialog.DescriptionProps> {}
export const Description = withContext<HTMLParagraphElement, DescriptionProps>(
  Dialog.Description,
  'description',
)

export interface PositionerProps extends Assign<JsxStyleProps, Dialog.PositionerProps> {}
export const Positioner = withContext<HTMLDivElement, PositionerProps>(
  Dialog.Positioner,
  'positioner',
)

export interface TitleProps extends Assign<JsxStyleProps, Dialog.TitleProps> {}
export const Title = withContext<HTMLHeadingElement, TitleProps>(Dialog.Title, 'title')

export interface TriggerProps extends Assign<JsxStyleProps, Dialog.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(Dialog.Trigger, 'trigger')

export {
  DialogContext as Context,
  type DialogContextProps as ContextProps,
} from '@ark-ui/react/dialog'
