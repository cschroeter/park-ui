import { FileUpload } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
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
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(FileUpload.Root, 'root')
export const Dropzone = withContext(FileUpload.Dropzone, 'dropzone')
export const Item = withContext(FileUpload.Item, 'item')
export const ItemDeleteTrigger = withContext(FileUpload.ItemDeleteTrigger, 'itemDeleteTrigger')
export const ItemGroup = withContext(FileUpload.ItemGroup, 'itemGroup')
export const ItemName = withContext(FileUpload.ItemName, 'itemName')
export const ItemPreview = withContext(FileUpload.ItemPreview, 'itemPreview')
export const ItemPreviewImage = withContext(FileUpload.ItemPreviewImage, 'itemPreviewImage')
export const ItemSizeText = withContext(FileUpload.ItemSizeText, 'itemSizeText')
export const Label = withContext(FileUpload.Label, 'label')
export const Trigger = withContext(FileUpload.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export interface DropzoneProps extends ComponentProps<typeof Dropzone> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
export interface ItemDeleteTriggerProps extends ComponentProps<typeof ItemDeleteTrigger> {}
export interface ItemGroupProps extends ComponentProps<typeof ItemGroup> {}
export interface ItemNameProps extends ComponentProps<typeof ItemName> {}
export interface ItemPreviewProps extends ComponentProps<typeof ItemPreview> {}
export interface ItemPreviewImageProps extends ComponentProps<typeof ItemPreviewImage> {}
export interface ItemSizeTextProps extends ComponentProps<typeof ItemSizeText> {}
export interface LabelProps extends ComponentProps<typeof Label> {}
export interface TriggerProps extends ComponentProps<typeof Trigger> {}
