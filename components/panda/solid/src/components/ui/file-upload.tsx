import { type Assign, FileUpload } from '@ark-ui/solid'
import { type FileUploadVariantProps, fileUpload } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(fileUpload)

export interface RootProps
  extends Assign<JsxStyleProps, FileUpload.RootProps>,
    FileUploadVariantProps {}
export const Root = withProvider<RootProps>(FileUpload.Root, 'root')

export const Dropzone = withContext<Assign<JsxStyleProps, FileUpload.DropzoneProps>>(
  FileUpload.Dropzone,
  'dropzone',
)

export const ItemDeleteTrigger = withContext<
  Assign<JsxStyleProps, FileUpload.ItemDeleteTriggerProps>
>(FileUpload.ItemDeleteTrigger, 'itemDeleteTrigger')

export const ItemGroup = withContext<Assign<JsxStyleProps, FileUpload.ItemGroupProps>>(
  FileUpload.ItemGroup,
  'itemGroup',
)

export const ItemName = withContext<Assign<JsxStyleProps, FileUpload.ItemNameProps>>(
  FileUpload.ItemName,
  'itemName',
)

export const ItemPreviewImage = withContext<
  Assign<JsxStyleProps, FileUpload.ItemPreviewImageProps>
>(FileUpload.ItemPreviewImage, 'itemPreviewImage')

export const ItemPreview = withContext<Assign<JsxStyleProps, FileUpload.ItemPreviewProps>>(
  FileUpload.ItemPreview,
  'itemPreview',
)

export const Item = withContext<Assign<JsxStyleProps, FileUpload.ItemProps>>(
  FileUpload.Item,
  'item',
)

export const ItemSizeText = withContext<Assign<JsxStyleProps, FileUpload.ItemSizeTextProps>>(
  FileUpload.ItemSizeText,
  'itemSizeText',
)

export const Label = withContext<Assign<JsxStyleProps, FileUpload.LabelProps>>(
  FileUpload.Label,
  'label',
)

export const Trigger = withContext<Assign<JsxStyleProps, FileUpload.TriggerProps>>(
  FileUpload.Trigger,
  'trigger',
)

export {
  FileUploadContext as Context,
  FileUploadHiddenInput as HiddenInput,
  type FileUploadContextProps as ContextProps,
  type FileUploadHiddenInputProps as HiddenInputProps,
} from '@ark-ui/solid'
