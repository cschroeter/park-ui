import type { Assign } from '@ark-ui/react'
import { FileUpload } from '@ark-ui/react/file-upload'
import { type FileUploadVariantProps, fileUpload } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(fileUpload)

export interface RootProps
  extends Assign<JsxStyleProps, FileUpload.RootProps>,
    FileUploadVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(FileUpload.Root, 'root')

export interface DropzoneProps extends Assign<JsxStyleProps, FileUpload.DropzoneProps> {}
export const Dropzone = withContext<HTMLDivElement, DropzoneProps>(FileUpload.Dropzone, 'dropzone')

export interface ItemDeleteTriggerProps
  extends Assign<JsxStyleProps, FileUpload.ItemDeleteTriggerProps> {}
export const ItemDeleteTrigger = withContext<HTMLButtonElement, ItemDeleteTriggerProps>(
  FileUpload.ItemDeleteTrigger,
  'itemDeleteTrigger',
)

export interface ItemGroupProps extends Assign<JsxStyleProps, FileUpload.ItemGroupProps> {}
export const ItemGroup = withContext<HTMLUListElement, ItemGroupProps>(
  FileUpload.ItemGroup,
  'itemGroup',
)

export interface ItemNameProps extends Assign<JsxStyleProps, FileUpload.ItemNameProps> {}
export const ItemName = withContext<HTMLDivElement, ItemNameProps>(FileUpload.ItemName, 'itemName')

export interface ItemPreviewImageProps
  extends Assign<JsxStyleProps, FileUpload.ItemPreviewImageProps> {}
export const ItemPreviewImage = withContext<HTMLImageElement, ItemPreviewImageProps>(
  FileUpload.ItemPreviewImage,
  'itemPreviewImage',
)

export interface ItemPreviewProps extends Assign<JsxStyleProps, FileUpload.ItemPreviewProps> {}
export const ItemPreview = withContext<HTMLImageElement, ItemPreviewProps>(
  FileUpload.ItemPreview,
  'itemPreview',
)

export interface ItemProps extends Assign<JsxStyleProps, FileUpload.ItemProps> {}
export const Item = withContext<HTMLLIElement, ItemProps>(FileUpload.Item, 'item')

export interface ItemSizeTextProps extends Assign<JsxStyleProps, FileUpload.ItemSizeTextProps> {}
export const ItemSizeText = withContext<HTMLDivElement, ItemSizeTextProps>(
  FileUpload.ItemSizeText,
  'itemSizeText',
)

export interface LabelProps extends Assign<JsxStyleProps, FileUpload.LabelProps> {}
export const Label = withContext<HTMLLabelElement, LabelProps>(FileUpload.Label, 'label')

export interface TriggerProps extends Assign<JsxStyleProps, FileUpload.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(FileUpload.Trigger, 'trigger')

export {
  FileUploadContext as Context,
  FileUploadHiddenInput as HiddenInput,
  type FileUploadContextProps as ContextProps,
  type FileUploadHiddenInputProps as HiddenInputProps,
} from '@ark-ui/react/file-upload'
