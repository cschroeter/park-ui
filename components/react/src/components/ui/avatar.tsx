import { forwardRef } from 'react'
import * as StyledAvatar from './styled/avatar'

export interface AvatarProps extends StyledAvatar.RootProps {
  name?: string
  src?: string
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { name, src, ...rootProps } = props

  return (
    <StyledAvatar.Root ref={ref} {...rootProps}>
      <StyledAvatar.Fallback>{getInitials(name) || <UserIcon />}</StyledAvatar.Fallback>
      <StyledAvatar.Image src={src} alt={name} />
    </StyledAvatar.Root>
  )
})

Avatar.displayName = 'Avatar'

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <title>User Icon</title>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const getInitials = (name = '') =>
  name
    .split(' ')
    .map((part) => part[0])
    .splice(0, 2)
    .join('')
    .toUpperCase()
