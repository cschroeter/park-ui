import { Show } from 'solid-js'
import { Button } from '~/components/ui/button'
import { Editable } from '~/components/ui/editable'
import { FormLabel } from '~/components/ui/form-label'

export const Demo = (props: Editable.RootProps) => {
  return (
    <Editable.Root
      placeholder="Your favorite Framework"
      defaultValue="Double click to edit"
      activationMode="dblclick"
      {...props}
    >
      <Editable.Label
        asChild={(labelProps) => <FormLabel {...labelProps()}>Framework</FormLabel>}
      />
      <Editable.Area>
        <Editable.Input />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Context>
        {(editable) => (
          <Editable.Control>
            <Show
              when={editable().editing}
              fallback={
                <Editable.EditTrigger
                  asChild={(triggerProps) => (
                    <Button {...triggerProps()} variant="link">
                      Edit
                    </Button>
                  )}
                />
              }
            >
              <>
                <Editable.SubmitTrigger
                  asChild={(triggerProps) => (
                    <Button {...triggerProps()} variant="link">
                      Save
                    </Button>
                  )}
                />
                <Editable.CancelTrigger
                  asChild={(triggerProps) => (
                    <Button {...triggerProps()} variant="link">
                      Cancel
                    </Button>
                  )}
                />
              </>
            </Show>
          </Editable.Control>
        )}
      </Editable.Context>
    </Editable.Root>
  )
}
