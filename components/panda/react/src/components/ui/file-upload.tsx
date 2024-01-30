import { FileUpload as ArkFileUpload } from '@ark-ui/react/file-upload'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { fileUpload } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(fileUpload)

export const FileUploadRoot = withProvider(styled(ArkFileUpload.Root), 'root')
export const FileUploadDropzone = withContext(styled(ArkFileUpload.Dropzone), 'dropzone')
export const FileUploadItem = withContext(styled(ArkFileUpload.Item), 'item')
export const FileUploadItemDeleteTrigger = withContext(
  styled(ArkFileUpload.ItemDeleteTrigger),
  'itemDeleteTrigger',
)
export const FileUploadItemGroup = withContext(styled(ArkFileUpload.ItemGroup), 'itemGroup')
export const FileUploadItemName = withContext(styled(ArkFileUpload.ItemName), 'itemName')
export const FileUploadItemPreview = withContext(styled(ArkFileUpload.ItemPreview), 'itemPreview')
export const FileUploadItemPreviewImage = withContext(
  styled(ArkFileUpload.ItemPreviewImage),
  'itemPreviewImage',
)
export const FileUploadItemSizeText = withContext(
  styled(ArkFileUpload.ItemSizeText),
  'itemSizeText',
)
export const FileUploadLabel = withContext(styled(ArkFileUpload.Label), 'label')
export const FileUploadTrigger = withContext(styled(ArkFileUpload.Trigger), 'trigger')

export const FileUpload = {
  Root: FileUploadRoot,
  Dropzone: FileUploadDropzone,
  Item: FileUploadItem,
  ItemDeleteTrigger: FileUploadItemDeleteTrigger,
  ItemGroup: FileUploadItemGroup,
  ItemName: FileUploadItemName,
  ItemPreview: FileUploadItemPreview,
  ItemPreviewImage: FileUploadItemPreviewImage,
  ItemSizeText: FileUploadItemSizeText,
  Label: FileUploadLabel,
  Trigger: FileUploadTrigger,
}

export interface FileUploadRootProps extends ComponentProps<typeof FileUploadRoot> {}
export interface FileUploadDropzoneProps extends ComponentProps<typeof FileUploadDropzone> {}
export interface FileUploadItemProps extends ComponentProps<typeof FileUploadItem> {}
export interface FileUploadItemDeleteTriggerProps
  extends ComponentProps<typeof FileUploadItemDeleteTrigger> {}
export interface FileUploadItemGroupProps extends ComponentProps<typeof FileUploadItemGroup> {}
export interface FileUploadItemNameProps extends ComponentProps<typeof FileUploadItemName> {}
export interface FileUploadItemPreviewProps extends ComponentProps<typeof FileUploadItemPreview> {}
export interface FileUploadItemPreviewImageProps
  extends ComponentProps<typeof FileUploadItemPreviewImage> {}
export interface FileUploadItemSizeTextProps
  extends ComponentProps<typeof FileUploadItemSizeText> {}
export interface FileUploadLabelProps extends ComponentProps<typeof FileUploadLabel> {}
export interface FileUploadTriggerProps extends ComponentProps<typeof FileUploadTrigger> {}
