import { useFileUploadContext } from '@ark-ui/solid/file-upload'
import { ImageUpIcon, XIcon } from 'lucide-solid'
import { For } from 'solid-js'
import { Button, FileUpload, IconButton } from '@/components/ui'

export const App = () => {
  return (
    <FileUpload.Root accept="image/*">
      <FileUpload.HiddenInput />
      <FileUpload.Trigger
        asChild={(triggerProps) => (
          <Button variant="outline" size="sm" {...triggerProps()}>
            <ImageUpIcon /> Upload image
          </Button>
        )}
      />
      <FileUploadList />
    </FileUpload.Root>
  )
}

const FileUploadList = () => {
  const fileUpload = useFileUploadContext()
  const files = fileUpload().acceptedFiles
  if (files.length === 0) return null

  return (
    <FileUpload.ItemGroup>
      <For each={files}>
        {(file) => (
          <FileUpload.Item file={file} p="0.5" w="fit-content">
            <FileUpload.ItemPreviewImage />
            <FileUpload.ItemDeleteTrigger
              asChild={(triggerProps) => (
                <IconButton
                  size="2xs"
                  borderRadius="full"
                  pos="absolute"
                  top="-2"
                  right="-2"
                  {...triggerProps()}
                >
                  <XIcon />
                </IconButton>
              )}
            />
          </FileUpload.Item>
        )}
      </For>
    </FileUpload.ItemGroup>
  )
}
