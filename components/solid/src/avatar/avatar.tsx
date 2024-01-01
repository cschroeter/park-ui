import { Avatar as ArkAvatar, type AvatarProps as ArkAvatarProps } from '@ark-ui/solid'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'

export interface AvatarProps extends ArkAvatarProps, AvatarVariantProps {
  name?: string
  src?: string
}

export const Avatar = (props: AvatarProps) => {
  const [variantProps, localProps] = avatar.splitVariantProps(props)
  const { name, src, ...rest } = localProps
  const styles = avatar(variantProps)

  return (
    <ArkAvatar.Root class={styles.root} {...rest}>
      <ArkAvatar.Fallback class={styles.fallback}>
        {getInitials(name) || <UserIcon />}
      </ArkAvatar.Fallback>
      <ArkAvatar.Image class={styles.image} src={src} alt={name} />
    </ArkAvatar.Root>
  )
}

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const getInitials = (name = '') =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
