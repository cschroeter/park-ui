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

const Root = withProvider(ArkFileUpload.Root, 'root')
const Dropzone = withContext(ArkFileUpload.Dropzone, 'dropzone')
const Item = withContext(ArkFileUpload.Item, 'item')
const ItemDeleteTrigger = withContext(ArkFileUpload.ItemDeleteTrigger, 'itemDeleteTrigger')
const ItemGroup = withContext(ArkFileUpload.ItemGroup, 'itemGroup')
const ItemName = withContext(ArkFileUpload.ItemName, 'itemName')
const ItemPreview = withContext(ArkFileUpload.ItemPreview, 'itemPreview')
const ItemPreviewImage = withContext(ArkFileUpload.ItemPreviewImage, 'itemPreviewImage')
const ItemSizeText = withContext(ArkFileUpload.ItemSizeText, 'itemSizeText')
const Label = withContext(ArkFileUpload.Label, 'label')
const Trigger = withContext(ArkFileUpload.Trigger, 'trigger')

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
