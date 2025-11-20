import { UploadIcon } from 'lucide-react'
import { Box } from 'styled-system/jsx'
import { FileUpload, Icon } from '@/components/ui'

export const App = () => {
  return (
    <FileUpload.Root>
      <FileUpload.HiddenInput />
      <FileUpload.Dropzone>
        <Icon color="fg.muted" size="lg" mb="4">
          <UploadIcon />
        </Icon>
        <Box>Drag and drop files here</Box>
        <Box color="fg.muted">.png, .jpg up to 5MB</Box>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload.Root>
  )
}
