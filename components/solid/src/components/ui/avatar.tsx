import { Avatar } from '@ark-ui/solid/avatar'
import { UserIcon } from 'lucide-solid'
import { type ComponentProps, type JSX, splitProps } from 'solid-js'
import { createStyleContext } from 'styled-system/jsx'
import { avatar } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(avatar)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Avatar.Root, 'root')
export const RootProvider = withProvider(Avatar.RootProvider, 'root')
export const Image = withContext(Avatar.Image, 'image', {
  defaultProps: () =>
    ({
      draggable: 'false',
      referrerPolicy: 'no-referrer',
    }) as const,
})

export { AvatarContext as Context } from '@ark-ui/solid/avatar'

export interface FallbackProps extends ComponentProps<typeof StyledFallback> {
  /**
   * The name to derive the initials from.
   * If not provided, the fallback will display a generic icon.
   */
  name?: string | undefined
  children?: JSX.Element
}

const StyledFallback = withContext(Avatar.Fallback, 'fallback')

export const Fallback = (props: FallbackProps) => {
  const [local, rest] = splitProps(props, ['name', 'children', 'asChild'])

  const fallbackContent = () => {
    if (local.children || local.asChild) {
      return local.children
    }
    if (local.name) {
      return getInitials(local.name)
    }
    return <UserIcon />
  }

  return <StyledFallback {...rest}>{fallbackContent()}</StyledFallback>
}

const getInitials = (name: string) => {
  const names = name.trim().split(' ')
  const firstName = names[0] || ''
  const lastName = names.length > 1 ? names[names.length - 1] : ''
  return firstName && lastName ? `${firstName[0]}${lastName[0]}` : firstName[0]
}
