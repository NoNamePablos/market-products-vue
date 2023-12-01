<script lang="ts" setup>
import VContainer from "@/components/VContainer/VContainer.vue";
import VLogo from "@/components/VLogo/VLogo.vue";
import VButton from "@/components/VButton/VButton.vue";
import VIcon from "@/components/VIcon/VIcon.vue";
import VInput from "@/components/VInput/VInput.vue";
import {ref} from "vue";
const str=ref("");
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
      <VInput size="m"  v-model="str" :disabled="false" label="rtest" placeholder="etst">
        <template #left-icon>
          <VIcon name="ChevronLeft"/>
        </template>
        <template #right-icon>
          <VIcon name="ChevronLeft"/>
        </template>
      </VInput>
    </VContainer>
  </header>
</template>
