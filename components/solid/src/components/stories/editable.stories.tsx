import { Show } from 'solid-js'
import type { Meta } from 'storybook-solidjs'
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
      value="Double click to edit"
      activationMode="dblclick"
    >
      <Editable.Label asChild={(props) => <FormLabel {...props()} />}>Framework</Editable.Label>
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.Context>
          {(api) => (
            <Show
              when={api().editing}
              fallback={
                <Editable.EditTrigger asChild={(props) => <Button {...props()} variant="link" />}>
                  Edit
                </Editable.EditTrigger>
              }
            >
              <Editable.SubmitTrigger asChild={(props) => <Button {...props()} variant="link" />}>
                Save
              </Editable.SubmitTrigger>
              <Editable.CancelTrigger asChild={(props) => <Button {...props()} variant="link" />}>
                Cancel
              </Editable.CancelTrigger>
            </Show>
          )}
        </Editable.Context>
      </Editable.Control>
    </Editable.Root>
  )
}
