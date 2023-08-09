import type { EditableProps } from '@ark-ui/react'
import { Button } from '~/components/button'
import { Label } from '~/components/label'
import {
  Editable,
  EditableArea,
  EditableCancelTrigger,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditableLabel,
  EditablePreview,
  EditableSubmitTrigger,
} from '~/components/ui/editable'

export const EditableDemo = (props: EditableProps) => {
  return (
    <Editable
      placeholder="Your favorite Framework"
      defaultValue="Double click to edit"
      activationMode="dblclick"
      {...props}
    >
      {(state) => (
        <>
          <EditableLabel asChild>
            <Label>Framework</Label>
          </EditableLabel>
          <EditableArea>
            <EditableInput />
            <EditablePreview />
          </EditableArea>
          <EditableControl>
            {state.isEditing ? (
              <>
                <EditableSubmitTrigger asChild>
                  <Button variant="link">Save</Button>
                </EditableSubmitTrigger>
                <EditableCancelTrigger asChild>
                  <Button variant="link">Cancel</Button>
                </EditableCancelTrigger>
              </>
            ) : (
              <EditableEditTrigger asChild>
                <Button variant="link">Edit</Button>
              </EditableEditTrigger>
            )}
          </EditableControl>
        </>
      )}
    </Editable>
  )
}
