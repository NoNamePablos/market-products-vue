<script lang="ts" setup>

type TAllowedTag ='h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'|'span';
type TSize='xs'|'s'|'m'|'l'|'xl';

interface ITypography{
  tag?:TAllowedTag;
  size?:TSize;
  bold?:boolean;
}
withDefaults(defineProps<ITypography>(),{
  tag:'span',
  size:'s',
  bold:false,
})


</script>

<template>
  <component :is="tag" class="typography"
             :class="[`size_${size}`,{'bold':bold},`tag_${tag}`]"
  >
    <slot />
  </component>
</template>
<style lang="scss">
  .typography{
    @apply leading-[150%] not-italic;
  }
  .size_xs{
    @apply  text-[8px]  tablet:text-xs;
  }
  .size_s{
    @apply text-[12px] tablet:text-s;
  }
  .size_m{
    @apply text-[14px] tablet:text-m;
  }
  .size_l{
    @apply text-[20px] tablet:text-l;
  }
  .size_xl{
    @apply text-[32px] tablet:text-xl ;
  }
  .bold{
    @apply font-bold;
  }
  .tag_h1{
    @apply text-[48px] tablet:text-[64px] font-bold;
  }
  .tag_h2{
    @apply text-[36px] tablet:text-[48px] font-bold;
  }
  .tag_h3{
    @apply text-[24px] tablet:text-[36px] font-bold;
  }
  .tag_h4{
    @apply text-[20px] tablet:text-[24px] font-bold;
  }
  .tag_h5,.tag_h6{
    @apply text-[18px] tablet:text-[16px] font-bold;
  }




</style>
