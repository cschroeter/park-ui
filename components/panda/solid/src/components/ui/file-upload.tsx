import { FileUpload } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { fileUpload } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(fileUpload)

const Root = withProvider(styled(FileUpload.Root), 'root')
const Dropzone = withContext(styled(FileUpload.Dropzone), 'dropzone')
const Item = withContext(styled(FileUpload.Item), 'item')
const ItemDeleteTrigger = withContext(styled(FileUpload.ItemDeleteTrigger), 'itemDeleteTrigger')
const ItemGroup = withContext(styled(FileUpload.ItemGroup), 'itemGroup')
const ItemName = withContext(styled(FileUpload.ItemName), 'itemName')
const ItemPreview = withContext(styled(FileUpload.ItemPreview), 'itemPreview')
const ItemPreviewImage = withContext(styled(FileUpload.ItemPreviewImage), 'itemPreviewImage')
const ItemSizeText = withContext(styled(FileUpload.ItemSizeText), 'itemSizeText')
const Label = withContext(styled(FileUpload.Label), 'label')
const Trigger = withContext(styled(FileUpload.Trigger), 'trigger')

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
