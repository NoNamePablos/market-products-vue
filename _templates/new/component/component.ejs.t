---
to: src/<%= folder %>/<%= name %>/<%= name %>.vue
---
<script lang="ts" setup>
interface <%= name %>Props {}
defineProps<<%= name %>Props>();
</script>

<template>
  <div><%= name %></div>
</template>
<style lang="scss">
</style>