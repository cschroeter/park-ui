import { FileUpload } from '@ark-ui/react/file-upload'
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

const Root = withProvider(FileUpload.Root, 'root')
const Dropzone = withContext(FileUpload.Dropzone, 'dropzone')
const Item = withContext(FileUpload.Item, 'item')
const ItemDeleteTrigger = withContext(FileUpload.ItemDeleteTrigger, 'itemDeleteTrigger')
const ItemGroup = withContext(FileUpload.ItemGroup, 'itemGroup')
const ItemName = withContext(FileUpload.ItemName, 'itemName')
const ItemPreview = withContext(FileUpload.ItemPreview, 'itemPreview')
const ItemPreviewImage = withContext(FileUpload.ItemPreviewImage, 'itemPreviewImage')
const ItemSizeText = withContext(FileUpload.ItemSizeText, 'itemSizeText')
const Label = withContext(FileUpload.Label, 'label')
const Trigger = withContext(FileUpload.Trigger, 'trigger')

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
