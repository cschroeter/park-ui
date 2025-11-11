import { ark } from '@ark-ui/solid/factory'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { icon } from 'styled-system/recipes'

const BaseIcon = styled(ark.svg, icon)

export type IconProps = ComponentProps<typeof BaseIcon>
export const Icon = (props: IconProps) => {
  return <BaseIcon asChild {...props} />
}
