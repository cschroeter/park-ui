import type { Meta } from '@storybook/react'
import { Button } from '~/components/ui/button'
import { Editable } from '~/components/ui/editable'
import { FormLabel } from '~/components/ui/form-label'

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
      <Editable.Label asChild>
        <FormLabel>Framework</FormLabel>
      </Editable.Label>
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.Context>
          {(editable) =>
            editable.editing ? (
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
            )
          }
        </Editable.Context>
      </Editable.Control>
    </Editable.Root>
  )
}
