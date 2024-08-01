import { Button } from '~/components/ui/button'
import * as Editable from '~/components/ui/editable'
import { FormLabel } from '~/components/ui/form-label'

export const Demo = (props: Editable.RootProps) => {
  return (
    <Editable.Root
      placeholder="Your favorite Framework"
      defaultValue="Double click to edit"
      activationMode="dblclick"
      {...props}
    >
      <Editable.Label asChild>
        <FormLabel>Framework</FormLabel>
      </Editable.Label>
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Context>
        {(editable) => (
          <Editable.Control>
            {editable.editing ? (
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
        )}
      </Editable.Context>
    </Editable.Root>
  )
}
