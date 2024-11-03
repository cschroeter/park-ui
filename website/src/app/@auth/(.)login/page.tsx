import { AuthenticationDialog } from '~/components/auth/authentication-dialog'

interface Props {
  searchParams: Promise<{ callbackUrl?: string }>
}

export default async function Page(props: Props) {
  const { callbackUrl } = await props.searchParams
  const redirectTo = callbackUrl ?? '/'

  return <AuthenticationDialog redirectTo={redirectTo} />
}
