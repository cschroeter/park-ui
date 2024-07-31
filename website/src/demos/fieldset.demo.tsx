import { OctagonAlertIcon } from 'lucide-react'
import { Field } from '~/components/ui/field'
import { Fieldset } from '~/components/ui/fieldset'
import { Icon } from '~/components/ui/icon'
import { Switch } from '~/components/ui/switch'

export const Demo = (props: Fieldset.RootProps) => {
  return (
    <Fieldset.Root {...props}>
      <Fieldset.Legend>Notifiations</Fieldset.Legend>
      <Fieldset.HelperText>Get notifcations when your are not online</Fieldset.HelperText>
      <Fieldset.Control>
        <Field.Root>
          <Switch size="sm" defaultChecked>
            Comments
          </Switch>
          <Field.HelperText>When someone posts a comment</Field.HelperText>
        </Field.Root>
        <Field.Root>
          <Switch size="sm" defaultChecked>
            Candidates
          </Switch>
          <Field.HelperText>When someone applies for a job</Field.HelperText>
        </Field.Root>
      </Fieldset.Control>
      <Fieldset.ErrorText>
        <Icon size="sm">
          <OctagonAlertIcon />
        </Icon>
        Something went wrong
      </Fieldset.ErrorText>
    </Fieldset.Root>
  )
}
