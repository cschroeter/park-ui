import { Stack } from 'styled-system/jsx'
import { signInWithEmail } from '~/app/actions'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

interface Props {
  redirectTo: string
}

export const EmailSignInForm = (props: Props) => {
  const { redirectTo } = props

  return (
    <form action={signInWithEmail}>
      <input type="hidden" name="redirectTo" value={redirectTo} />
      <Stack gap="3">
        <Input
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          autoComplete="off"
        />
        <Button type="submit" width="full">
          Continue with Email
        </Button>
      </Stack>
    </form>
  )
}
