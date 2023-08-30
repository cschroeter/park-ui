import type { ComponentProps } from 'solid-js'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type TypographyProps = ComponentProps<TagVariants> & {
  as?: TagVariants
} & HTMLStyledProps<TagVariants>

export const Typography = (props: TypographyProps) => {
  const { as = 'p', ...rest } = props

  const Component = styled(as)
  return <Component {...rest} />
}

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingProps = ComponentProps<HeadingTags> & {
  as?: HeadingTags
} & HTMLStyledProps<TagVariants>

export const Heading = (props: HeadingProps) => {
  const { as = 'h2', children, ...rest } = props

  return (
    <Typography as={as} fontWeight="bold" {...rest}>
      {children}
    </Typography>
  )
}
