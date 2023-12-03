<script lang="ts" setup>
import VIcon from "@/components/VIcon/VIcon.vue";
interface ICartButtonProps{
  link:string;
  icon:string;
  title:string;
  count?:number;
  active?:boolean;
  isMobile?:boolean;
}
//todo get state from store
//todo create mobile view comp
withDefaults(defineProps<ICartButtonProps>(),{
  isMobile:false,
})

</script>

<template>
  <router-link :to="link" class="cart-button">
    <VIcon :size="24" :name="icon"  class="cart-button__icon" />
    <div class="cart-button__title" :class="{active:active}">{{title}}</div>
    <div class="cart-button__count" v-if="count">{{count}}</div>
  </router-link>
</template>
<style lang="scss">
.cart-button{
  @apply flex flex-col items-center gap-[8px] text-surface-text text-center font-sans text-xs font-normal leading-[150%] relative max-w-[50px];
  &__count{
    @apply w-[14px] h-[14px] rounded-full inline-flex items-center justify-center text-white bg-primary p-[4px] absolute top-[-6px] right-[15px]
  }
}
.active{
  @apply text-primary;
}
</style>
