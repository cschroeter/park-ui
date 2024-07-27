import { ark } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { type ButtonVariantProps, button } from 'styled-system/recipes'

export type IconButtonProps = ComponentProps<typeof IconButton>
export const IconButton = styled(ark.button, button, {
  defaultProps: { px: '0' } as ButtonVariantProps,
})
