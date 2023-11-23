<script lang="ts">
  export interface VHomeViewProps {}
</script>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import Typography from "@/components/Typography/Typography.vue";
  import VHeader from "@/widget/VHeader/VHeader.vue";

  defineProps<VHomeViewProps>();

  const { t } = useI18n({
    locale: 'en',
    messages: {},
  });
</script>

<template>
  <div>
    <VHeader></VHeader>
    <Typography size="s"  :bold="true" >Header 1</Typography>
    <Typography  tag="h1"  >Header 1</Typography>
  </div>
</template>
