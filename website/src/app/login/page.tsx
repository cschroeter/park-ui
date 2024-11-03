import { Container } from 'styled-system/jsx'
import { AuthenticationCard } from '~/components/auth/authentication-card'

interface Props {
  searchParams: Promise<{ callbackUrl?: string }>
}

export default async function Page(props: Props) {
  const { callbackUrl } = await props.searchParams
  const redirectTo = callbackUrl ?? '/'

  return (
    <Container px="4" maxW="md" display="flex" flex="1" alignItems="center">
      <AuthenticationCard redirectTo={redirectTo} />
    </Container>
  )
}
