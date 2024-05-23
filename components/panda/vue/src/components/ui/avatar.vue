<script setup lang="ts">
import {
  Avatar,
  type AvatarRootEmits,
  type AvatarRootProps,
  useForwardPropsEmits,
} from '@ark-ui/vue'
import { computed } from 'vue'
import { css, cx } from '../../../styled-system/css'
import { splitCssProps } from '../../../styled-system/jsx'
import { type AvatarVariantProps, avatar } from '../../../styled-system/recipes'

export interface AvatarProps extends AvatarRootProps, /* @vue-ignore */ AvatarVariantProps {
  src?: string
  name: string
}

const props = defineProps<AvatarProps>()
const [variantProps, avatarProps] = avatar.splitVariantProps(props)
const [cssProps, localProps] = splitCssProps(avatarProps)
const emits = defineEmits<AvatarRootEmits>()
const { name, src, ...rootProps } = localProps

const forwarded = useForwardPropsEmits(rootProps, emits)
const styles = avatar(variantProps)

const getInitials = computed(() =>
  props.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase(),
)
</script>

<template>
  <Avatar.Root :class="cx(styles.root, css(cssProps))" v-bind="forwarded">
    <Avatar.Fallback :class="styles.fallback">{{ getInitials }}</Avatar.Fallback>
    <Avatar.Image :src="props.src" :alt="props.name" :class="styles.image" />
  </Avatar.Root>
</template>
