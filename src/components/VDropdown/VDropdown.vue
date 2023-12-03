
<script lang="ts" setup>

import VIcon from "@/components/VIcon/VIcon.vue";
import {computed, ref} from "vue";
const isOpen=ref<boolean>(false);
const DropdownIcon=computed(()=>{
  return isOpen.value?'ChevronUp':'ChevronDown';
})
//todo vueuse outside click
//todo complete component
</script>

<template>
  <div class="dropdown">
    <div class="dropdown__header">
      <slot name="header"></slot>
      <div class="dropdown-icon">
        <transition>
          <VIcon :name="DropdownIcon"></VIcon>
        </transition>
      </div>
    </div>
    <div class="dropdown__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>
