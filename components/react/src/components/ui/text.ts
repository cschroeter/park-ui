import { styled } from '@park-ui/styled-system/jsx'
import { type TextVariantProps, text } from '@park-ui/styled-system/recipes'
import type { ComponentProps, StyledComponent } from '@park-ui/styled-system/types'

type ParagraphProps = TextVariantProps & { as?: React.ElementType }

export type TextProps = ComponentProps<typeof Text>
export const Text = styled('p', text) as StyledComponent<'p', ParagraphProps>
