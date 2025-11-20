import { forwardRef, type ImgHTMLAttributes } from 'react'
import { Avatar as StyledAvatar } from '@/components/ui'

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

export interface AvatarProps extends StyledAvatar.RootProps {
  name?: string
  src?: string
  srcSet?: string
  loading?: ImageProps['loading']
  icon?: React.ReactElement
  fallback?: React.ReactNode
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  const { name, src, srcSet, loading, icon, fallback, children, ...rest } = props
  return (
    <StyledAvatar.Root ref={ref} {...rest}>
      <StyledAvatar.Fallback name={name}>{fallback || icon}</StyledAvatar.Fallback>
      <StyledAvatar.Image src={src} srcSet={srcSet} loading={loading} />
      {children}
    </StyledAvatar.Root>
  )
})
