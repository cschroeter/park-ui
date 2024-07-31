import type { Meta } from '@storybook/react'
import { OctagonAlertIcon } from 'lucide-react'
import { Field } from '~/components/ui/field'
import { Fieldset } from '~/components/ui/fieldset'
import { Icon } from '~/components/ui/icon'
import { Switch } from '~/components/ui/switch'

const meta: Meta = {
  title: 'Components/Fieldset',
}

export default meta

export const Basic = () => {
  return (
    <Fieldset.Root>
      <Fieldset.Legend>Notifiations</Fieldset.Legend>
      <Fieldset.HelperText>Get notifcations when your are not online</Fieldset.HelperText>
      <Fieldset.Control>
        <Field.Root>
          <Switch size="sm">Comments</Switch>
          <Field.HelperText>
            Get notified when someone posts a comment on a posting.
          </Field.HelperText>
        </Field.Root>
        <Field.Root>
          <Switch size="sm">Candidates</Switch>
          <Field.HelperText>Get notified when a candidate applies for a job.</Field.HelperText>
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

export const Invalid = () => {
  return (
    <Fieldset.Root invalid>
      <Fieldset.Legend>Notifiations</Fieldset.Legend>
      <Fieldset.HelperText>Get notifcations when your are not online</Fieldset.HelperText>
      <Fieldset.Control>
        <Field.Root>
          <Switch size="sm">Comments</Switch>
          <Field.HelperText>
            Get notified when someone posts a comment on a posting.
          </Field.HelperText>
        </Field.Root>
        <Field.Root>
          <Switch size="sm">Candidates</Switch>
          <Field.HelperText>Get notified when a candidate applies for a job.</Field.HelperText>
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
