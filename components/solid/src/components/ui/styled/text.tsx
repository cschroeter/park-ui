import type { ComponentProps, JSX } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { type TextVariantProps, text } from 'styled-system/recipes'
import type { StyledComponent } from 'styled-system/types'

type ParagraphProps = TextVariantProps & { as?: JSX.Element }

export type TextProps = ComponentProps<typeof Text>
export const Text = styled('p', text) as StyledComponent<'p', ParagraphProps>
