'use client'
import { MinusIcon } from 'lucide-react'
import { Fragment } from 'react'
import { useFormState } from 'react-dom'
import { Stack } from 'styled-system/jsx'
// import { activateLicense } from '~/app/actions'
import { Button, Icon, Input } from '~/components/ui'
import { PinInput } from '~/components/ui/primitives'

interface Props {
  licenseKey: string
}

export const ActivationForm = (props: Props) => {
  // const [state, formAction] = useFormState(activateLicense, { message: '', success: false })
  const licenseKey = props.licenseKey.split('').filter((x) => x !== '-')

  return (
    // <form action={formAction}>
    <Stack gap={{ base: '8', md: '10' }}>
      <PinInput.Root placeholder="0" value={licenseKey} name="licenseKey">
        <PinInput.Control alignItems="center">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((id, index) => (
            <Fragment key={id}>
              <PinInput.Input index={index} asChild>
                <Input size="xl" px="0" width="12" textAlign="center" fontFamily="monospace" />
              </PinInput.Input>
              {[2, 5].includes(index) && (
                <Icon color="fg.muted">
                  <MinusIcon />
                </Icon>
              )}
            </Fragment>
          ))}
        </PinInput.Control>
      </PinInput.Root>
      <Stack direction="row" gap="3">
        <Button variant="outline" size="xl">
          Share
        </Button>
        <Button type="submit" size="xl">
          Activate license
        </Button>
      </Stack>
    </Stack>
    // <p aria-live="polite" className="sr-only">
    //   {state?.message}
    // </p>
    // </form>
  )
}
