import { FileUpload as ArkFileUpload } from '@ark-ui/react/file-upload'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'fileUpload',
  slots: {
    root: 'fileUpload__root',
    dropzone: 'fileUpload__dropzone',
    item: 'fileUpload__item',
    itemDeleteTrigger: 'fileUpload__itemDeleteTrigger',
    itemGroup: 'fileUpload__itemGroup',
    itemName: 'fileUpload__itemName',
    itemPreview: 'fileUpload__itemPreview',
    itemPreviewImage: 'fileUpload__itemPreviewImage',
    itemSizeText: 'fileUpload__itemSizeText',
    label: 'fileUpload__label',
    trigger: 'fileUpload__trigger',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

const FileUpload = withProvider(ArkFileUpload.Root, 'root')
const FileUploadDropzone = withContext(ArkFileUpload.Dropzone, 'dropzone')
const FileUploadItem = withContext(ArkFileUpload.Item, 'item')
const FileUploadItemDeleteTrigger = withContext(
  ArkFileUpload.ItemDeleteTrigger,
  'itemDeleteTrigger',
)
const FileUploadItemGroup = withContext(ArkFileUpload.ItemGroup, 'itemGroup')
const FileUploadItemName = withContext(ArkFileUpload.ItemName, 'itemName')
const FileUploadItemPreview = withContext(ArkFileUpload.ItemPreview, 'itemPreview')
const FileUploadItemPreviewImage = withContext(ArkFileUpload.ItemPreviewImage, 'itemPreviewImage')
const FileUploadItemSizeText = withContext(ArkFileUpload.ItemSizeText, 'itemSizeText')
const FileUploadLabel = withContext(ArkFileUpload.Label, 'label')
const FileUploadTrigger = withContext(ArkFileUpload.Trigger, 'trigger')

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
