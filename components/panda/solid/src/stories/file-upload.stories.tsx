import { Trash2Icon } from 'lucide-solid'
import { Index } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
import { Button, FileUpload, IconButton } from '~/components/ui'

const meta: Meta = {
  title: 'Components/File Upload',
}

export default meta

export const Base = () => {
  return (
    <FileUpload.Root maxFiles={3}>
      <FileUpload.Dropzone>
        <FileUpload.Label>Drop your files here</FileUpload.Label>
        <FileUpload.Trigger as={Button} size="sm">
          Open Dialog
        </FileUpload.Trigger>
      </FileUpload.Dropzone>
      <FileUpload.ItemGroup>
        {(files) => (
          <Index each={files()}>
            {(file) => (
              <FileUpload.Item file={file()}>
                <FileUpload.ItemPreview type="image/*">
                  <FileUpload.ItemPreviewImage />
                </FileUpload.ItemPreview>
                <FileUpload.ItemName />
                <FileUpload.ItemSizeText />
                <FileUpload.ItemDeleteTrigger as={IconButton} variant="link" size="sm">
                  <Trash2Icon />
                </FileUpload.ItemDeleteTrigger>
              </FileUpload.Item>
            )}
          </Index>
        )}
      </FileUpload.ItemGroup>
    </FileUpload.Root>
  )
}
