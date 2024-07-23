import { AuthenticationDialog } from '~/components/auth/authentication-dialog'

interface Props {
  searchParams: {
    callbackUrl?: string
  }
}

export default function Page(props: Props) {
  const redirectTo = props.searchParams.callbackUrl ?? '/'

  return <AuthenticationDialog redirectTo={redirectTo} />
}
