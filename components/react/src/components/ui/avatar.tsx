'use client'
import { Avatar } from '@ark-ui/react/avatar'
import { type ComponentProps, forwardRef } from 'react'
import { createStyleContext, styled } from 'styled-system/jsx'
import { avatar } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'

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

export const Icon = forwardRef<SVGSVGElement, JsxStyleProps>(function Icon(props, ref) {
  return (
    <styled.svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1.2em"
      width="1.2em"
      ref={ref}
      {...props}
    >
      <title>User Avatar</title>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </styled.svg>
  )
})

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

  const fallbackContent = children || asChild ? children : name ? getInitials(name) : <Icon />

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
