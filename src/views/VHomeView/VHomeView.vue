<script lang="ts">
  export interface VHomeViewProps {}
</script>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import Typography from "@/components/Typography/Typography.vue";
  import VHeader from "@/widget/VHeader/VHeader.vue";
  import VDefaultLayout from "@/layouts/VDefaultLayout/VDefaultLayout.vue";

  defineProps<VHomeViewProps>();

  const { t } = useI18n({
    locale: 'en',
    messages: {},
  });
</script>

<template>
    <VDefaultLayout>
      <VHeader/>
      <Typography size="s"  :bold="true" >Header 1</Typography>
      <Typography  tag="h1"  >Header 1</Typography>
    </VDefaultLayout>
</template>
