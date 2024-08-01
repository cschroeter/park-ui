'use client'
import { useFormState } from 'react-dom'
import { Stack } from 'styled-system/jsx'
import { activateLicense } from '~/app/actions'
import { Input } from '~/components/ui/input'
import { SubmitButton } from '~/components/ui/submit-button'
import { Text } from '~/components/ui/text'
import { SignInButton } from './auth/sign-in-button'

interface Props {
  authenticated?: boolean
  licenseKey: string
}

export const ActivationForm = (props: Props) => {
  const { licenseKey, authenticated } = props
  const [state, formAction] = useFormState(activateLicense, { message: '', success: false })

  return (
    <form action={formAction}>
      <Stack gap="1.5">
        <Stack gap="3" direction={{ base: 'column', sm: 'row' }}>
          <Input name="licenseKey" defaultValue={licenseKey} size={{ base: 'lg', md: 'xl' }} />
          {authenticated ? (
            <SubmitButton size={{ base: 'lg', md: 'xl' }} flexShrink={0}>
              Activate license
            </SubmitButton>
          ) : (
            <SignInButton size={{ base: 'lg', md: 'xl' }} flexShrink={0}>
              Sign in to activate
            </SignInButton>
          )}
        </Stack>
        <Text aria-live="polite" color={state.success ? '##30A46C' : '#E5484D'}>
          {state?.message}
        </Text>
      </Stack>
    </form>
  )
}
