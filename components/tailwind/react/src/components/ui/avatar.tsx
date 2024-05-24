import { Avatar as ArkAvatar, type AvatarRootProps } from '@ark-ui/react/avatar'
import { forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export interface AvatarProps extends AvatarRootProps, AvatarVariantProps {
  name?: string
  src?: string
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { size, className, name, src, ...rootProps } = props
  const { root, fallback, image } = avatar({ size })

  return (
    <ArkAvatar.Root ref={ref} className={root({ className })} {...rootProps}>
      <ArkAvatar.Fallback className={fallback()}>
        {getInitials(name) || <UserIcon />}
      </ArkAvatar.Fallback>
      <ArkAvatar.Image className={image()} src={src} alt={name} />
    </ArkAvatar.Root>
  )
})

Avatar.displayName = 'Avatar'

type AvatarVariantProps = VariantProps<typeof avatar>

const avatar = tv(
  {
    base: 'avatar',
    defaultVariants: { size: 'md' },
    slots: { root: 'avatar__root', image: 'avatar__image', fallback: 'avatar__fallback' },
    variants: {
      size: {
        xs: {
          root: 'avatar__root--size_xs',
          image: 'avatar__image--size_xs',
          fallback: 'avatar__fallback--size_xs',
        },
        sm: {
          root: 'avatar__root--size_sm',
          image: 'avatar__image--size_sm',
          fallback: 'avatar__fallback--size_sm',
        },
        md: {
          root: 'avatar__root--size_md',
          image: 'avatar__image--size_md',
          fallback: 'avatar__fallback--size_md',
        },
        lg: {
          root: 'avatar__root--size_lg',
          image: 'avatar__image--size_lg',
          fallback: 'avatar__fallback--size_lg',
        },
        xl: {
          root: 'avatar__root--size_xl',
          image: 'avatar__image--size_xl',
          fallback: 'avatar__fallback--size_xl',
        },
        '2xl': {
          root: 'avatar__root--size_2xl',
          image: 'avatar__image--size_2xl',
          fallback: 'avatar__fallback--size_2xl',
        },
      },
    },
  },
  { twMerge: false },
)

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <title>User</title>
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
