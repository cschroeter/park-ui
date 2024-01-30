import { Avatar as ArkAvatar, type AvatarRootProps } from '@ark-ui/solid'
import { Show, splitProps } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'

export interface AvatarProps extends Assign<JsxStyleProps, AvatarRootProps>, AvatarVariantProps {
  name?: string
  src?: string
}

export const Avatar = (props: AvatarProps) => {
  const [variantProps, avatarProps] = avatar.splitVariantProps(props)
  const [cssProps, elementProps] = splitCssProps(avatarProps)
  const [localProps, rootProps] = splitProps(elementProps, ['name', 'src', 'class'])
  const styles = avatar(variantProps)

  return (
    <ArkAvatar.Root class={cx(styles.root, css(cssProps), localProps.class)} {...rootProps}>
      <ArkAvatar.Fallback class={styles.fallback}>
        <Show when={localProps.name} fallback={<UserIcon />}>
          {getInitials(localProps.name)}
        </Show>
      </ArkAvatar.Fallback>
      <ArkAvatar.Image class={styles.image} src={localProps.src} alt={localProps.name} />
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
