
<script lang="ts" setup>
interface VDefaultLayoutProps {
  title?: string;
}
  import { useTitle } from '@vueuse/core';
  import VContainer from "@/components/VContainer/VContainer.vue";

  const props = withDefaults(defineProps<VDefaultLayoutProps>(), {
    title: 'App',
  });

  useTitle(props.title);
</script>
<template>
  <VContainer>
    <slot />
  </VContainer>
</template>
