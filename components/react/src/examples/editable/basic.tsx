import { Editable } from '@/components/ui'

export const App = () => {
  return (
    <Editable.Root placeholder="Enter your text..." defaultValue="Click to edit">
      <Editable.Label>Label</Editable.Label>
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Context>
        {(editable: { editing: boolean }) => (
          <Editable.Control>
            {editable.editing ? (
              <>
                <Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
                <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
              </>
            ) : (
              <Editable.EditTrigger>Edit</Editable.EditTrigger>
            )}
          </Editable.Control>
        )}
      </Editable.Context>
    </Editable.Root>
  )
}
