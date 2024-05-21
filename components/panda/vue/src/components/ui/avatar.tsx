import type { AvatarRootProps } from '@ark-ui/vue/avatar'
import { Avatar as ArkAvatar } from '@ark-ui/vue/avatar'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { type AvatarVariantProps, avatar } from 'styled-system/recipes'
import { defineComponent } from 'vue'

export interface AvatarProps extends AvatarRootProps, AvatarVariantProps {
  src?: string
  name: string
}

export const Avatar = defineComponent<AvatarProps>({
  setup(props) {
    const [variantProps, avatarProps] = avatar.splitVariantProps(props)
    const [cssProps, localProps] = splitCssProps(avatarProps)
    const { name, src, ...rootProps } = localProps
    const styles = avatar(variantProps)

    return (
      <ArkAvatar.Root {...rootProps} class={cx(styles.root, css(cssProps))}>
        <ArkAvatar.Fallback>CS</ArkAvatar.Fallback>
        <ArkAvatar.Image src={src} alt="CS" />
      </ArkAvatar.Root>
    )
  },
})
