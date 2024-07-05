import { FileUpload, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type FileUploadVariantProps, fileUpload } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(fileUpload)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, FileUpload.RootProviderProps>, FileUploadVariantProps>
>(FileUpload.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, FileUpload.RootProps>, FileUploadVariantProps>
>(FileUpload.Root, 'root')

export const Dropzone = withContext<Assign<HTMLStyledProps<'div'>, FileUpload.DropzoneProps>>(
  FileUpload.Dropzone,
  'dropzone',
)

export const ItemDeleteTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, FileUpload.ItemDeleteTriggerProps>
>(FileUpload.ItemDeleteTrigger, 'itemDeleteTrigger')

export const ItemGroup = withContext<Assign<HTMLStyledProps<'ul'>, FileUpload.ItemGroupProps>>(
  FileUpload.ItemGroup,
  'itemGroup',
)

export const ItemName = withContext<Assign<HTMLStyledProps<'div'>, FileUpload.ItemNameProps>>(
  FileUpload.ItemName,
  'itemName',
)

export const ItemPreviewImage = withContext<
  Assign<HTMLStyledProps<'img'>, FileUpload.ItemPreviewImageProps>
>(FileUpload.ItemPreviewImage, 'itemPreviewImage')

export const ItemPreview = withContext<Assign<HTMLStyledProps<'div'>, FileUpload.ItemPreviewProps>>(
  FileUpload.ItemPreview,
  'itemPreview',
)

export const Item = withContext<Assign<HTMLStyledProps<'li'>, FileUpload.ItemProps>>(
  FileUpload.Item,
  'item',
)

export const ItemSizeText = withContext<
  Assign<HTMLStyledProps<'div'>, FileUpload.ItemSizeTextProps>
>(FileUpload.ItemSizeText, 'itemSizeText')

export const Label = withContext<Assign<HTMLStyledProps<'label'>, FileUpload.LabelProps>>(
  FileUpload.Label,
  'label',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, FileUpload.TriggerProps>>(
  FileUpload.Trigger,
  'trigger',
)

export {
  FileUploadContext as Context,
  FileUploadHiddenInput as HiddenInput,
} from '@ark-ui/solid'
