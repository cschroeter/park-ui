import { type JSX, splitProps } from 'solid-js'
import { Avatar as StyledAvatar } from '@/components/ui'

export interface AvatarProps extends StyledAvatar.RootProps {
  name?: string
  src?: string
  srcSet?: string
  loading?: 'eager' | 'lazy'
  icon?: JSX.Element
  fallback?: JSX.Element
  children?: JSX.Element
}

export const Avatar = (props: AvatarProps) => {
  const [local, rest] = splitProps(props, [
    'name',
    'src',
    'srcSet',
    'loading',
    'icon',
    'fallback',
    'children',
  ])

  return (
    <StyledAvatar.Root {...rest}>
      <StyledAvatar.Fallback name={local.name}>
        {local.fallback || local.icon}
      </StyledAvatar.Fallback>
      <StyledAvatar.Image src={local.src} srcSet={local.srcSet} loading={local.loading} />
      {local.children}
    </StyledAvatar.Root>
  )
}
