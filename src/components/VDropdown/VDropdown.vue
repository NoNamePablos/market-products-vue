
<script lang="ts" setup>

import VIcon from "@/components/VIcon/VIcon.vue";
import {computed, ref} from "vue";
import { onClickOutside } from '@vueuse/core'
interface IDropdownProps{
  width?:number,
  isInside?:boolean,
}

withDefaults(defineProps<IDropdownProps>(),{
  width:360,
  isInside:false,
})

const isOpen=ref<boolean>(false);
const DropdownIcon=computed(()=>{
  return isOpen.value?'ChevronUp':'ChevronDown';
})
const target=ref<HTMLDivElement|null>(null);
onClickOutside(target,()=>isOpen.value=false)
</script>

<template>
  <div class="dropdown"
       ref="target"
       :style="{maxWidth:`${width}px`}"
       :class="[{active:isOpen},{inside:isInside}]"
  >
    <div class="dropdown__header" @click="isOpen=!isOpen">
      <slot name="header"></slot>
      <div class="dropdown-icon">
        <transition>
          <VIcon :name="DropdownIcon"></VIcon>
        </transition>
      </div>
    </div>
    <div class="dropdown__body" v-show="isOpen">
      <slot name="body"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .dropdown{
    @apply relative h-max w-full bg-white z-10 text-surface-text p-[8px] cursor-pointer;
    &.active{
      @apply  shadow-[4px_8px_16px_0px_rgba(0,0,0,0.10)]  text-surface-text;
    }
    &.inside{
      @apply relative p-[0];
      &.active{
        @apply shadow-none;
      }
      & .dropdown__body{
        @apply shadow-none static;
      }
    }
    &__header{
      @apply flex items-center gap-[10px] justify-between;
    }
    &__body{
      @apply absolute  flex flex-col gap-[10px] w-full shadow-[4px_8px_16px_0px_rgba(0,0,0,0.10)] left-0 right-0;
    }
    .v-enter-active,
    .v-leave-active {
      @apply transition-opacity duration-500 ease-out
    }
    .v-enter-from,
    .v-leave-to {
      @apply opacity-0;
    }
  }
</style>