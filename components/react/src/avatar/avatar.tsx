import { Avatar as ArkAvatar, type AvatarProps as ArkAvatarProps } from '@ark-ui/react/avatar'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'

export interface AvatarProps extends ArkAvatarProps, AvatarVariantProps {
  name: string
  src?: string
}

export const Avatar = (props: AvatarProps) => {
  const [variantProps, localProps] = avatar.splitVariantProps(props)
  const { name, src, ...rest } = localProps
  const styles = avatar(variantProps)

  return (
    <ArkAvatar.Root className={styles.root} {...rest}>
      <ArkAvatar.Fallback className={styles.fallback}>CS</ArkAvatar.Fallback>
      <ArkAvatar.Image className={styles.image} src={src} alt={name} />
    </ArkAvatar.Root>
  )
}
