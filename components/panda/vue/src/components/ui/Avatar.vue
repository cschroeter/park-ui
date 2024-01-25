<script setup lang="ts">
import { Avatar as AvatarRoot, AvatarFallback, AvatarImage } from '@ark-ui/vue/avatar'
import { avatar } from '../../../styled-system/recipes'
import { avatarProps, type AvatarEmits } from './foo'

const styles = avatar()
const { src, name, ...rest } = defineProps({ ...avatarProps, src: String, name: String })
const emit = defineEmits<AvatarEmits>()
</script>

<template>
  <AvatarRoot :class="styles.root" v-bind="rest">
    <AvatarFallback :class="styles.fallback">PA</AvatarFallback>
    <AvatarImage :src="src" :alt="name" :class="styles.image" />
  </AvatarRoot>
</template>
