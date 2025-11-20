import { WebcamIcon } from 'lucide-solid'
import { Button, FileUpload } from '@/components/ui'

export const App = () => {
  return (
    <FileUpload.Root capture="environment">
      <FileUpload.HiddenInput />
      <FileUpload.Trigger
        asChild={(triggerProps) => (
          <Button variant="outline" size="sm" {...triggerProps()}>
            <WebcamIcon /> Take picture
          </Button>
        )}
      />
      <FileUpload.List />
    </FileUpload.Root>
  )
}
