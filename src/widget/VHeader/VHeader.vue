<script lang="ts" setup>
import VContainer from "@/components/VContainer/VContainer.vue";
import VLogo from "@/components/VLogo/VLogo.vue";
import VButton from "@/components/VButton/VButton.vue";
import VIcon from "@/components/VIcon/VIcon.vue";

</script>

<template>
  <header>
    <VContainer>
      <VLogo/>
        <VButton :accent="'secondary'" size="m">
          <template #left-icon>
            <VIcon name="ChevronLeft"/>
          </template>
          Каталог
        </VButton>
    </VContainer>
  </header>
</template>
