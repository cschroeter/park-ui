import { FileUpload as ArkFileUpload } from '@ark-ui/react/file-upload'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('FileUpload')

const FileUpload = withProvider(chakra(ArkFileUpload.Root), 'root')
const FileUploadDropzone = withContext(chakra(ArkFileUpload.Dropzone), 'dropzone')
const FileUploadItem = withContext(chakra(ArkFileUpload.Item), 'item')
const FileUploadItemDeleteTrigger = withContext(
  chakra(ArkFileUpload.ItemDeleteTrigger),
  'itemDeleteTrigger',
)
const FileUploadItemGroup = withContext(chakra(ArkFileUpload.ItemGroup), 'itemGroup')
const FileUploadItemName = withContext(chakra(ArkFileUpload.ItemName), 'itemName')
const FileUploadItemPreview = withContext(chakra(ArkFileUpload.ItemPreview), 'itemPreview')
const FileUploadItemPreviewImage = withContext(
  chakra(ArkFileUpload.ItemPreviewImage),
  'itemPreviewImage',
)
const FileUploadItemSizeText = withContext(chakra(ArkFileUpload.ItemSizeText), 'itemSizeText')
const FileUploadLabel = withContext(chakra(ArkFileUpload.Label), 'label')
const FileUploadTrigger = withContext(chakra(ArkFileUpload.Trigger), 'trigger')

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

export interface FileUploadProps extends HTMLChakraProps<typeof FileUpload> {}
export interface FileUploadDropzoneProps extends HTMLChakraProps<typeof FileUploadDropzone> {}
export interface FileUploadItemProps extends HTMLChakraProps<typeof FileUploadItem> {}
export interface FileUploadItemDeleteTriggerProps
  extends HTMLChakraProps<typeof FileUploadItemDeleteTrigger> {}
export interface FileUploadItemGroupProps extends HTMLChakraProps<typeof FileUploadItemGroup> {}
export interface FileUploadItemNameProps extends HTMLChakraProps<typeof FileUploadItemName> {}
export interface FileUploadItemPreviewProps extends HTMLChakraProps<typeof FileUploadItemPreview> {}
export interface FileUploadItemPreviewImageProps
  extends HTMLChakraProps<typeof FileUploadItemPreviewImage> {}
export interface FileUploadItemSizeTextProps
  extends HTMLChakraProps<typeof FileUploadItemSizeText> {}
export interface FileUploadLabelProps extends HTMLChakraProps<typeof FileUploadLabel> {}
export interface FileUploadTriggerProps extends HTMLChakraProps<typeof FileUploadTrigger> {}
