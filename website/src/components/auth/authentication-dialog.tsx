'use client'

import { XIcon } from 'lucide-react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { AuthenticationCard } from '~/components/auth/authentication-card'
import { Dialog } from '~/components/ui/dialog'
import { IconButton } from '~/components/ui/icon-button'

interface Props {
  redirectTo: string
}

export const AuthenticationDialog = (props: Props) => {
  const router = useRouter()
  const { redirectTo } = props

  return (
    <Dialog.Root open onEscapeKeyDown={() => router.back()} onInteractOutside={() => router.back()}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content boxShadow="none">
          <AuthenticationCard redirectTo={redirectTo} />
          <IconButton
            asChild
            position="absolute"
            top="2"
            right="2"
            aria-label="Close Dialog"
            variant="ghost"
            size="sm"
            onClick={() => {
              router.back()
            }}
          >
            <NextLink href="/">
              <XIcon />
            </NextLink>
          </IconButton>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}
