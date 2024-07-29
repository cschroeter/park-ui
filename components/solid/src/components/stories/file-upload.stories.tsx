import { Trash2Icon } from 'lucide-solid'
import { For } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Button } from '~/components/ui/button'
import { FileUpload } from '~/components/ui/file-upload'
import { IconButton } from '~/components/ui/icon-button'

const meta: Meta = {
  title: 'Components/File Upload',
}

export default meta

export const Base = () => {
  return (
    <FileUpload.Root maxFiles={3}>
      <FileUpload.Dropzone>
        <FileUpload.Label>Drop your files here</FileUpload.Label>
        <FileUpload.Trigger asChild={(props) => <Button {...props()} size="sm" />}>
          Open Dialog
        </FileUpload.Trigger>
      </FileUpload.Dropzone>
      <FileUpload.ItemGroup>
        <FileUpload.Context>
          {(context) => (
            <For each={context().acceptedFiles}>
              {(file) => (
                <FileUpload.Item file={file}>
                  <FileUpload.ItemPreview type="image/*">
                    <FileUpload.ItemPreviewImage />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemName />
                  <FileUpload.ItemSizeText />
                  <FileUpload.ItemDeleteTrigger
                    asChild={(props) => <IconButton {...props()} variant="link" size="sm" />}
                  >
                    <Trash2Icon />
                  </FileUpload.ItemDeleteTrigger>
                </FileUpload.Item>
              )}
            </For>
          )}
        </FileUpload.Context>
      </FileUpload.ItemGroup>
    </FileUpload.Root>
  )
}
