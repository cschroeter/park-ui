import { FileUpload as ArkFileUpload } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'fileUpload',
  slots: {
    root: 'fileUpload__root',
    dropzone: 'fileUpload__dropzone',
    trigger: 'fileUpload__trigger',
    label: 'fileUpload__label',
    item: 'fileUpload__item',
    itemName: 'fileUpload__itemName',
    itemPreview: 'fileUpload__itemPreview',
    itemSizeText: 'fileUpload__itemSizeText',
    itemDeleteTrigger: 'fileUpload__itemDeleteTrigger',
    itemGroup: 'fileUpload__itemGroup',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

export const FileUploadRoot = withProvider(ArkFileUpload.Root, 'root')
export const FileUploadDropzone = withContext(ArkFileUpload.Dropzone, 'dropzone')
export const FileUploadItem = withContext(ArkFileUpload.Item, 'item')
export const FileUploadItemDeleteTrigger = withContext(
  ArkFileUpload.ItemDeleteTrigger,
  'itemDeleteTrigger',
)
export const FileUploadItemGroup = withContext(ArkFileUpload.ItemGroup, 'itemGroup')
export const FileUploadItemName = withContext(ArkFileUpload.ItemName, 'itemName')
export const FileUploadItemPreview = withContext(ArkFileUpload.ItemPreview, 'itemPreview')
export const FileUploadItemSizeText = withContext(ArkFileUpload.ItemSizeText, 'itemSizeText')
export const FileUploadLabel = withContext(ArkFileUpload.Label, 'label')
export const FileUploadTrigger = withContext(ArkFileUpload.Trigger, 'trigger')

export const FileUpload = Object.assign(FileUploadRoot, {
  Root: FileUploadRoot,
  Dropzone: FileUploadDropzone,
  Item: FileUploadItem,
  ItemDeleteTrigger: FileUploadItemDeleteTrigger,
  ItemGroup: FileUploadItemGroup,
  ItemName: FileUploadItemName,
  ItemPreview: FileUploadItemPreview,
  ItemSizeText: FileUploadItemSizeText,
  Label: FileUploadLabel,
  Trigger: FileUploadTrigger,
})
