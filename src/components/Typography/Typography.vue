<script lang="ts" setup>

type TAllowedTag ='h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'|'span';
type TSize='xs'|'s'|'m'|'l'|'xl';

interface ITypography{
  tag?:TAllowedTag;
  size?:TSize;
  bold?:boolean;
}
withDefaults(defineProps<ITypography>(),{
  tag:'p',
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
    @apply text-[32px] tablet:text-xl;
  }





</style>
