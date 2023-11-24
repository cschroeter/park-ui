import * as Ark from '@ark-ui/react/file-upload'
import { styled } from 'styled-system/jsx'
import { fileUpload, type FileUploadVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(fileUpload)

export * from '@ark-ui/react/file-upload'
export type FileUploadProps = Ark.FileUploadProps & FileUploadVariantProps

const FileUploadRoot = withProvider(styled(Ark.FileUpload.Root), 'root')
const FileUplaodTrigger = withContext(styled(Ark.FileUpload.Trigger), 'trigger')
const FileUploaddropzone = withContext(styled(Ark.FileUpload.Dropzone), 'dropzone')
const FileUploadItem = withContext(styled(Ark.FileUpload.Item), 'item')
const FileUploadItemDeleteTrigger = withContext(
  styled(Ark.FileUpload.ItemDeleteTrigger),
  'itemDeleteTrigger',
)
const FileUploadItemGroup = withContext(styled(Ark.FileUpload.ItemGroup), 'itemGroup')
const FileUploadItemName = withContext(styled(Ark.FileUpload.ItemName), 'itemName')
const FileUploadItemPreview = withContext(styled(Ark.FileUpload.ItemPreview), 'itemPreview')
const FileUploadItemSizeText = withContext(styled(Ark.FileUpload.ItemSizeText), 'itemSizeText')
const FileUploadLabel = withContext(styled(Ark.FileUpload.Label), 'label')

export const FileUpload = Object.assign(FileUploadRoot, {
  Root: FileUploadRoot,
  Dropzone: FileUploaddropzone,
  Item: FileUploadItem,
  ItemDeleteTrigger: FileUploadItemDeleteTrigger,
  ItemGroup: FileUploadItemGroup,
  ItemName: FileUploadItemName,
  ItemPreview: FileUploadItemPreview,
  ItemSizeText: FileUploadItemSizeText,
  Label: FileUploadLabel,
  Trigger: FileUplaodTrigger,
})
