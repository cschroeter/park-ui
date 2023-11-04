<template>
  <button ref="button" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {},
}
</script>