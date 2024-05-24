import { FileUpload } from '@ark-ui/react/file-upload'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const fileUpload = tv(
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
const { withProvider, withContext } = createStyleContext(fileUpload)

export interface RootProps extends FileUpload.RootProps, VariantProps<typeof fileUpload> {}
export const Root = withProvider<HTMLDivElement, RootProps>(FileUpload.Root, 'root')

export const Dropzone = withContext<HTMLDivElement, FileUpload.DropzoneProps>(
  FileUpload.Dropzone,
  'dropzone',
)

export const ItemDeleteTrigger = withContext<HTMLButtonElement, FileUpload.ItemDeleteTriggerProps>(
  FileUpload.ItemDeleteTrigger,
  'itemDeleteTrigger',
)

export const ItemGroup = withContext<HTMLUListElement, FileUpload.ItemGroupProps>(
  FileUpload.ItemGroup,
  'itemGroup',
)

export const ItemName = withContext<HTMLDivElement, FileUpload.ItemNameProps>(
  FileUpload.ItemName,
  'itemName',
)

export const ItemPreviewImage = withContext<HTMLImageElement, FileUpload.ItemPreviewImageProps>(
  FileUpload.ItemPreviewImage,
  'itemPreviewImage',
)

export const ItemPreview = withContext<HTMLImageElement, FileUpload.ItemPreviewProps>(
  FileUpload.ItemPreview,
  'itemPreview',
)

export const Item = withContext<HTMLLIElement, FileUpload.ItemProps>(FileUpload.Item, 'item')

export const ItemSizeText = withContext<HTMLDivElement, FileUpload.ItemSizeTextProps>(
  FileUpload.ItemSizeText,
  'itemSizeText',
)

export const Label = withContext<HTMLLabelElement, FileUpload.LabelProps>(FileUpload.Label, 'label')

export const Trigger = withContext<HTMLButtonElement, FileUpload.TriggerProps>(
  FileUpload.Trigger,
  'trigger',
)

export {
  FileUploadContext as Context,
  FileUploadHiddenInput as HiddenInput,
  type FileUploadContextProps as ContextProps,
  type FileUploadHiddenInputProps as HiddenInputProps,
} from '@ark-ui/react/file-upload'
