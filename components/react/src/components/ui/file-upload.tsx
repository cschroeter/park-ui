import { FileUpload as ArkFileUpload } from '@ark-ui/react/file-upload'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { fileUpload } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(fileUpload)

const FileUpload = withProvider(styled(ArkFileUpload.Root), 'root')
const FileUploadDropzone = withContext(styled(ArkFileUpload.Dropzone), 'dropzone')
const FileUploadItem = withContext(styled(ArkFileUpload.Item), 'item')
const FileUploadItemDeleteTrigger = withContext(
  styled(ArkFileUpload.ItemDeleteTrigger),
  'itemDeleteTrigger',
)
const FileUploadItemGroup = withContext(styled(ArkFileUpload.ItemGroup), 'itemGroup')
const FileUploadItemName = withContext(styled(ArkFileUpload.ItemName), 'itemName')
const FileUploadItemPreview = withContext(styled(ArkFileUpload.ItemPreview), 'itemPreview')
const FileUploadItemPreviewImage = withContext(
  styled(ArkFileUpload.ItemPreviewImage),
  'itemPreviewImage',
)
const FileUploadItemSizeText = withContext(styled(ArkFileUpload.ItemSizeText), 'itemSizeText')
const FileUploadLabel = withContext(styled(ArkFileUpload.Label), 'label')
const FileUploadTrigger = withContext(styled(ArkFileUpload.Trigger), 'trigger')

const Root = FileUpload
const Dropzone = FileUploadDropzone
const Item = FileUploadItem
const ItemDeleteTrigger = FileUploadItemDeleteTrigger
const ItemGroup = FileUploadItemGroup
const ItemName = FileUploadItemName
const ItemPreview = FileUploadItemPreview
const ItemPreviewImage = FileUploadItemPreviewImage
const ItemSizeText = FileUploadItemSizeText
const Label = FileUploadLabel
const Trigger = FileUploadTrigger

export {
  Dropzone,
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemSizeText,
  FileUploadLabel,
  FileUploadTrigger,
  Item,
  ItemDeleteTrigger,
  ItemGroup,
  ItemName,
  ItemPreview,
  ItemPreviewImage,
  ItemSizeText,
  Label,
  Root,
  Trigger,
}

export interface FileUploadProps extends HTMLStyledProps<typeof FileUpload> {}
export interface FileUploadDropzoneProps extends HTMLStyledProps<typeof FileUploadDropzone> {}
export interface FileUploadItemProps extends HTMLStyledProps<typeof FileUploadItem> {}
export interface FileUploadItemDeleteTriggerProps
  extends HTMLStyledProps<typeof FileUploadItemDeleteTrigger> {}
export interface FileUploadItemGroupProps extends HTMLStyledProps<typeof FileUploadItemGroup> {}
export interface FileUploadItemNameProps extends HTMLStyledProps<typeof FileUploadItemName> {}
export interface FileUploadItemPreviewProps extends HTMLStyledProps<typeof FileUploadItemPreview> {}
export interface FileUploadItemPreviewImageProps
  extends HTMLStyledProps<typeof FileUploadItemPreviewImage> {}
export interface FileUploadItemSizeTextProps
  extends HTMLStyledProps<typeof FileUploadItemSizeText> {}
export interface FileUploadLabelProps extends HTMLStyledProps<typeof FileUploadLabel> {}
export interface FileUploadTriggerProps extends HTMLStyledProps<typeof FileUploadTrigger> {}
