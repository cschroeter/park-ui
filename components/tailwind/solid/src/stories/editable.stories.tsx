import type { Meta } from 'storybook-solidjs'
import { Button, Editable, FormLabel } from '~/components/ui'

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
          <Editable.Label as={FormLabel}>Framework</Editable.Label>
          <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
          </Editable.Area>
          <Editable.Control>
            {api().isEditing ? (
              <>
                <Editable.SubmitTrigger as={Button} variant="link">
                  Save
                </Editable.SubmitTrigger>
                <Editable.CancelTrigger as={Button} variant="link">
                  Cancel
                </Editable.CancelTrigger>
              </>
            ) : (
              <Editable.EditTrigger as={Button} variant="link">
                Edit
              </Editable.EditTrigger>
            )}
          </Editable.Control>
        </>
      )}
    </Editable.Root>
  )
}
