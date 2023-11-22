<script lang="ts">
  export interface VHomeViewProps {}
</script>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import Typography from "@/components/Typography/Typography.vue";

  defineProps<VHomeViewProps>();

  const { t } = useI18n({
    locale: 'en',
    messages: {},
  });
</script>

<template>
  <div>
    <Typography size="s" :header="true" tag="h1" :bold="true" >Header 1</Typography>
  </div>
</template>
