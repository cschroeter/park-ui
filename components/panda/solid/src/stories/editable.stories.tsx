import type { Meta } from 'storybook-solidjs'
import { Button } from '~/components/ui/button'
import * as Editable from '~/components/ui/editable'
import { FormLabel } from '~/components/ui/form-label'

const meta: Meta = {
  title: 'Components/Editable',
}

export default meta

export const Base = () => {
  return (
    <Editable.Root
      placeholder="Your favorite Framework"
      value="Double click to edit"
      activationMode="dblclick"
    >
      {(api) => (
        <>
          <Editable.Label asChild>
            <FormLabel>Framework</FormLabel>
          </Editable.Label>
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
          <Editable.Control>
            {api().isEditing ? (
              <>
                <Editable.SubmitTrigger asChild>
                  <Button variant="link">Save</Button>
                </Editable.SubmitTrigger>
                <Editable.CancelTrigger asChild>
                  <Button variant="link">Cancel</Button>
                </Editable.CancelTrigger>
              </>
            ) : (
              <Editable.EditTrigger asChild>
                <Button variant="link">Edit</Button>
              </Editable.EditTrigger>
            )}
          </Editable.Control>
        </>
      )}
    </Editable.Root>
  )
}
