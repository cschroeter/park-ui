import { Avatar as ArkAvatar, type AvatarProps as ArkAvatarProps } from '@ark-ui/solid'
import { Show, splitProps } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'
import type { Assign, HTMLStyledProps } from 'styled-system/types'

export interface AvatarProps
  extends Assign<HTMLStyledProps<'div'>, ArkAvatarProps>,
    AvatarVariantProps {
  name?: string
  src?: string
}

export const Avatar = (props: AvatarProps) => {
  const [variantProps, localProps] = avatar.splitVariantProps(props)
  const [local, rootProps] = splitProps(localProps, ['name', 'src'])
  const styles = avatar(variantProps)

  return (
    <ArkAvatar.Root class={cx(styles.root, css(rootProps))} {...rootProps}>
      <ArkAvatar.Fallback class={styles.fallback}>
        <Show when={local.name} fallback={<UserIcon />}>
          {getInitials(local.name)}
        </Show>
      </ArkAvatar.Fallback>
      <ArkAvatar.Image class={styles.image} src={local.src} alt={local.name} />
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
    .splice(0, 2)
    .join('')
    .toUpperCase()
