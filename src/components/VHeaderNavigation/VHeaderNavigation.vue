<script lang="ts" setup>
import VCartButton from "@/components/VCartButton/VCartButton.vue";
import type {VHeaderNavigationProps} from "@/components/VHeaderNavigation/index";

interface Props{
  data:Array<VHeaderNavigationProps>
}
defineProps<Props>()
</script>

<template>
  <nav class="header-navigation">
    <ul class="header-navigation__list">
      <li v-for="(item,idx) in data" :key="idx">
        <VCartButton :title="item.title" :link="item.link" :count="item.count"  :icon="item.icon" />
      </li>
    </ul>
  </nav>
</template>
<style lang="scss">
  .header-navigation{
    &__list{
     @apply flex gap-[24px];
    }
  }
</style>