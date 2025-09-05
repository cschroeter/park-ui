'use client'
import { FileUpload } from '@ark-ui/react/file-upload'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { fileUpload } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(fileUpload)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(FileUpload.Root, 'root')
export const RootProvider = withProvider(FileUpload.RootProvider, 'root')
export const ClearTrigger = withContext(FileUpload.ClearTrigger, 'clearTrigger')
export const Dropzone = withContext(FileUpload.Dropzone, 'dropzone')
export const HiddenInput = FileUpload.HiddenInput
export const Item = withContext(FileUpload.Item, 'item')
export const ItemDeleteTrigger = withContext(FileUpload.ItemDeleteTrigger, 'itemDeleteTrigger')
export const ItemGroup = withContext(FileUpload.ItemGroup, 'itemGroup')
export const ItemName = withContext(FileUpload.ItemName, 'itemName')
export const ItemPreview = withContext(FileUpload.ItemPreview, 'itemPreview')
export const ItemPreviewImage = withContext(FileUpload.ItemPreviewImage, 'itemPreviewImage')
export const ItemSizeText = withContext(FileUpload.ItemSizeText, 'itemSizeText')
export const Label = withContext(FileUpload.Label, 'label')
export const Trigger = withContext(FileUpload.Trigger, 'trigger')

export { FileUploadContext as Context } from '@ark-ui/react/file-upload'
