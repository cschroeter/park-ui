'use client'
import { Avatar } from '@ark-ui/react/avatar'
import { UserIcon } from 'lucide-react'
import { type ComponentProps, forwardRef } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { avatar } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(avatar)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Avatar.Root, 'root')
export const RootProvider = withProvider(Avatar.RootProvider, 'root')
export const Image = withContext(Avatar.Image, 'image', {
  defaultProps: {
    draggable: 'false',
    referrerPolicy: 'no-referrer',
  },
})

export { AvatarContext as Context } from '@ark-ui/react/avatar'

export interface FallbackProps extends ComponentProps<typeof StyledFallback> {
  /**
   * The name to derive the initials from.
   * If not provided, the fallback will display a generic icon.
   */
  name?: string | undefined
}

const StyledFallback = withContext(Avatar.Fallback, 'fallback')

export const Fallback = forwardRef<HTMLDivElement, FallbackProps>(function Fallback(props, ref) {
  const { name, children, asChild, ...rest } = props

  const fallbackContent = children || asChild ? children : name ? getInitials(name) : <UserIcon />

  return (
    <StyledFallback ref={ref} {...rest}>
      {fallbackContent}
    </StyledFallback>
  )
})

const getInitials = (name: string) => {
  const names = name.trim().split(' ')
  const firstName = names[0] || ''
  const lastName = names.length > 1 ? names[names.length - 1] : ''
  return firstName && lastName ? `${firstName[0]}${lastName[0]}` : firstName[0]
}
