import { Button } from '../button/snippet'
import { Label } from '../label/snippet'
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
  type EditableProps,
} from './snippet'

export const Demo = (props: EditableProps) => {
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
