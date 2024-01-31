import type { Meta } from '@storybook/react'
import { Button, Editable, FormLabel } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Editable',
}

export default meta

export const Base = () => {
  return (
    <Editable.Root
      placeholder="Your favorite Framework"
      defaultValue="Double click to edit"
      activationMode="dblclick"
    >
      {(state) => (
        <>
          <Editable.Label asChild>
            <FormLabel>Framework</FormLabel>
          </Editable.Label>
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
          <Editable.Control>
            {state.isEditing ? (
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
