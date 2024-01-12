import { FileUpload as ArkFileUpload } from '@ark-ui/solid'
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

export const FileUpload = Object.assign(FileUploadRoot, {
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
})

export type FileUploadProps = typeof FileUploadRoot
export type FileUploadDropzoneProps = typeof FileUploadDropzone
export type FileUploadItemProps = typeof FileUploadItem
export type FileUploadItemDeleteTriggerProps = typeof FileUploadItemDeleteTrigger
export type FileUploadItemGroupProps = typeof FileUploadItemGroup
export type FileUploadItemNameProps = typeof FileUploadItemName
export type FileUploadItemPreviewProps = typeof FileUploadItemPreview
export type FileUploadItemPreviewImageProps = typeof FileUploadItemPreviewImage
export type FileUploadItemSizeTextProps = typeof FileUploadItemSizeText
export type FileUploadLabelProps = typeof FileUploadLabel
export type FileUploadTriggerProps = typeof FileUploadTrigger
