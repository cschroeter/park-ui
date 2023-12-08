import { Button } from '~/components/ui/button'
import { Editable } from '~/components/ui/editable'
import { Label } from '~/components/ui/label'

export const Demo = () => {
  return (
    <Editable.Root
      placeholder="Your favorite Framework"
      defaultValue="Double click to edit"
      activationMode="dblclick"
    >
      {(state) => (
        <>
          <Editable.Label asChild>
            <Label>Framework</Label>
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
