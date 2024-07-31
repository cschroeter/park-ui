import { type Assign, FileUpload } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type FileUploadVariantProps, fileUpload } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(fileUpload)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, FileUpload.RootProviderBaseProps>, FileUploadVariantProps>
>(FileUpload.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, FileUpload.RootBaseProps>, FileUploadVariantProps>
>(FileUpload.Root, 'root')

export const Dropzone = withContext<Assign<HTMLStyledProps<'div'>, FileUpload.DropzoneBaseProps>>(
  FileUpload.Dropzone,
  'dropzone',
)

export const ItemDeleteTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, FileUpload.ItemDeleteTriggerBaseProps>
>(FileUpload.ItemDeleteTrigger, 'itemDeleteTrigger')

export const ItemGroup = withContext<Assign<HTMLStyledProps<'ul'>, FileUpload.ItemGroupBaseProps>>(
  FileUpload.ItemGroup,
  'itemGroup',
)

export const ItemName = withContext<Assign<HTMLStyledProps<'div'>, FileUpload.ItemNameBaseProps>>(
  FileUpload.ItemName,
  'itemName',
)

export const ItemPreviewImage = withContext<
  Assign<HTMLStyledProps<'img'>, FileUpload.ItemPreviewImageBaseProps>
>(FileUpload.ItemPreviewImage, 'itemPreviewImage')

export const ItemPreview = withContext<
  Assign<HTMLStyledProps<'div'>, FileUpload.ItemPreviewBaseProps>
>(FileUpload.ItemPreview, 'itemPreview')

export const Item = withContext<Assign<HTMLStyledProps<'li'>, FileUpload.ItemBaseProps>>(
  FileUpload.Item,
  'item',
)

export const ItemSizeText = withContext<
  Assign<HTMLStyledProps<'div'>, FileUpload.ItemSizeTextBaseProps>
>(FileUpload.ItemSizeText, 'itemSizeText')

export const Label = withContext<Assign<HTMLStyledProps<'label'>, FileUpload.LabelBaseProps>>(
  FileUpload.Label,
  'label',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, FileUpload.TriggerBaseProps>>(
  FileUpload.Trigger,
  'trigger',
)

export {
  FileUploadContext as Context,
  FileUploadHiddenInput as HiddenInput,
} from '@ark-ui/solid'
