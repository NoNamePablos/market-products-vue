

<script lang="ts" setup>
interface  IAvatarProps{
  path:string;
}
defineProps<IAvatarProps>()
</script>

<template>
  <div class="avatar">
      <img :src="path" alt="">
<!--    <div class="avatar__content">
      <div class="avatar__name">Алексей</div>
      <div class="avatar__subtitle" v-if="subtitle">Подпись</div>
    </div>-->
  </div>
</template>
<style lang="scss">
  .avatar{
    @apply w-[40px] h-[40px] overflow-hidden object-cover rounded-full;
    & img{
      @apply w-full h-full;
    }
  }
  .avatar-content{
    @apply flex gap-[10px] items-center font-sans font-normal text-s leading-[150%] text-surface-text;
    &__content{
      @apply flex flex-col gap-0;
    }
    &__subtitle{
      @apply text-[#757371] text-xs font-sans font-normal leading-[150%];
    }
  }
</style>