import { splitProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import type { HTMLStyledProps, SystemStyleObject } from 'styled-system/types'

interface ImageOptions {
  /**
   * How the image to fit within its bounds.
   * It maps to css `object-fit` property.
   * @type SystemStyleObject["objectFit"]
   */
  fit?: SystemStyleObject['objectFit'] | undefined
  /**
   * How to align the image within its bounds.
   * It maps to css `object-position` property.
   * @type SystemStyleObject["objectPosition"]
   */
  alignment?: SystemStyleObject['objectPosition'] | undefined
}

export interface ImageProps extends HTMLStyledProps<'img'>, ImageOptions {}

const StyledImage = styled('img')

export const Image = (props: ImageProps) => {
  const [local, rest] = splitProps(props, ['alignment', 'fit'])
  const fit = () => local.fit ?? 'cover'

  return <StyledImage objectFit={fit()} objectPosition={local.alignment} {...rest} />
}
