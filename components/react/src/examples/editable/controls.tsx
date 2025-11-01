import { CheckIcon, EditIcon, XIcon } from 'lucide-react'
import { ButtonGroup, Editable, IconButton } from '@/components/ui'

export const App = () => {
  return (
    <Editable.Root defaultValue="Click to edit" size="sm">
      <Editable.Preview />
      <Editable.Input />
      <Editable.Control>
        <Editable.EditTrigger asChild>
          <IconButton variant="plain" size="sm">
            <EditIcon />
          </IconButton>
        </Editable.EditTrigger>
        <ButtonGroup variant="outline" size="sm">
          <Editable.CancelTrigger asChild>
            <IconButton>
              <XIcon />
            </IconButton>
          </Editable.CancelTrigger>
          <Editable.SubmitTrigger asChild>
            <IconButton>
              <CheckIcon />
            </IconButton>
          </Editable.SubmitTrigger>
        </ButtonGroup>
      </Editable.Control>
    </Editable.Root>
  )
}
