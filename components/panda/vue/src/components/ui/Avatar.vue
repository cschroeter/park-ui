<script setup lang="ts">
import {
  Avatar,
  type AvatarRootEmits,
  type AvatarRootProps,
  useForwardPropsEmits,
} from '@ark-ui/vue'
import { computed } from 'vue'
import { avatar } from '../../../styled-system/recipes'

export interface AvatarProps extends AvatarRootProps {
  src?: string
  name: string
}

const props = defineProps<AvatarProps>()
const emits = defineEmits<AvatarRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
const styles = avatar()

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
  <Avatar.Root :class="styles.root" v-bind="forwarded">
    <Avatar.Fallback :class="styles.fallback">{{ getInitials }}</Avatar.Fallback>
    <Avatar.Image :src="props.src" :alt="props.name" :class="styles.image" />
  </Avatar.Root>
</template>
