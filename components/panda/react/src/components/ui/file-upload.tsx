import { FileUpload as ArkFileUpload } from '@ark-ui/react/file-upload'
import { styled } from 'styled-system/jsx'
import { fileUpload } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(fileUpload)

const Root = withProvider(styled(ArkFileUpload.Root), 'root')
const Dropzone = withContext(styled(ArkFileUpload.Dropzone), 'dropzone')
const Item = withContext(styled(ArkFileUpload.Item), 'item')
const ItemDeleteTrigger = withContext(styled(ArkFileUpload.ItemDeleteTrigger), 'itemDeleteTrigger')
const ItemGroup = withContext(styled(ArkFileUpload.ItemGroup), 'itemGroup')
const ItemName = withContext(styled(ArkFileUpload.ItemName), 'itemName')
const ItemPreview = withContext(styled(ArkFileUpload.ItemPreview), 'itemPreview')
const ItemPreviewImage = withContext(styled(ArkFileUpload.ItemPreviewImage), 'itemPreviewImage')
const ItemSizeText = withContext(styled(ArkFileUpload.ItemSizeText), 'itemSizeText')
const Label = withContext(styled(ArkFileUpload.Label), 'label')
const Trigger = withContext(styled(ArkFileUpload.Trigger), 'trigger')

export {
  Dropzone,
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
