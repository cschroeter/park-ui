import { Avatar as ArkAvatar, type AvatarProps as ArkAvatarProps } from '@ark-ui/react/avatar'
import { forwardRef } from 'react'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'

export interface AvatarProps extends ArkAvatarProps, AvatarVariantProps {
  name?: string
  src?: string
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const [variantProps, localProps] = avatar.splitVariantProps(props)
  const { name, src, ...rootProps } = localProps
  const styles = avatar(variantProps)

  return (
    <ArkAvatar.Root className={styles.root} {...rootProps}>
      <ArkAvatar.Fallback className={styles.fallback}>
        {getInitials(name) || <UserIcon />}
      </ArkAvatar.Fallback>
      <ArkAvatar.Image className={styles.image} src={src} alt={name} />
    </ArkAvatar.Root>
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
