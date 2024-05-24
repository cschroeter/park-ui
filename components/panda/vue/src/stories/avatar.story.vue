<script setup lang="ts">
import { Avatar } from '../components/ui'
</script>

<template>
  <Story title="Test">
    <Variant title="Basic">
      <Avatar.Root>
    <Avatar.Fallback>PA</Avatar.Fallback>
    <Avatar.Image src="https://i.pravatar.cc/3000" alt="avatar" />
  </Avatar.Root>
    </Variant>
  </Story>
</template>
