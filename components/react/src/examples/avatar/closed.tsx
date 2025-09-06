import { forwardRef, type ImgHTMLAttributes } from 'react'
import { Avatar as ParkAvatar } from '@/components/ui'

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

export interface AvatarProps extends ParkAvatar.RootProps {
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
    <ParkAvatar.Root ref={ref} {...rest}>
      <ParkAvatar.Fallback name={name}>{fallback || icon}</ParkAvatar.Fallback>
      <ParkAvatar.Image src={src} srcSet={srcSet} loading={loading} />
      {children}
    </ParkAvatar.Root>
  )
})
