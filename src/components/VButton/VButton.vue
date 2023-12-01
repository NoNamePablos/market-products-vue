<script lang="ts" setup>
import {computed, onMounted, useSlots} from "vue";
import {cva,type VariantProps} from "class-variance-authority";

type TButtonAccent='primary'|'secondary'|'grayscale'|'error';
type TButtonSize='l'|'m'|'s'
type TButtonDecoration='default'|'outline'|'empty';
type TButtonType='icon'|'text';
interface  IButtonProps{
  size?:TButtonSize;
  accent?:TButtonAccent;
  decoration?:TButtonDecoration;
  disabled?:boolean;
  leftIcon?:boolean;
  rightIcon?:boolean;
  type?:TButtonType;
  hasText?:boolean;
}

const props=withDefaults(defineProps<IButtonProps>(),{
  hasText:true,
})
const slots=useSlots()

const buttonClass=computed(()=>{
  return cva('button',{
    variants:{
      accent:{
        primary:"button--primary",
        secondary:"button--secondary",
        grayscale:'button--grayscale',
        error:"button--error",
      },
      type:{
        icon:'button--icon',
        text:'button--text'
      },
      disabled:{
        true:"disabled",
      },
      decoration:{
        default:'decoration-default',
        outline:'decoration-outline',
        empty:'decoration-empty'
      },
      size:{
        l:'large',
        m:'medium',
        s:'small',
      },
    },
  })
  ({
    accent:props.accent,
    size:props.size,
    disabled:props.disabled,
    decoration:props.decoration,
  })
})



</script>

<template>
  <div :class="buttonClass">
    <div
        class="button__left"
         v-if="slots['left-icon']"
    >
     <slot name="left-icon"></slot>
    </div>
    <div
        class="button__content"
        v-if="hasText&&type!=='icon'"
    >
      <slot></slot>
    </div>
    <div
        class="button__right"
        v-if="slots['right-icon']"
    >
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>
<style lang="scss">
  .button{
    @apply flex text-white justify-center items-center w-max gap-[8px] p-[8px] leading-[150%] font-sans cursor-pointer rounded-[4px] transition-all duration-300 ease-out;
    &.large{
      @apply p-[16px];
    }
    &--primary{
      @apply bg-primary hover:bg-[#FCD5BA] hover:text-primary;
      &.disabled{
        @apply bg-[#FCD5BA] text-primary;
      }
    }
    &--secondary{
      @apply bg-secondary hover:bg-[#E5FFDE] hover:text-secondary;
      &.disabled{
        @apply bg-[#E5FFDE] text-secondary;
      }
    }
    &--grayscale{
      @apply bg-grayscale hover:bg-white hover:text-grayscale-light;
      &.disabled{
        @apply bg-white text-grayscale-light;
      }
    }
    &--error{
      @apply bg-error hover:bg-[#FFC7C7] hover:text-error;
      &.disabled{
        @apply bg-[#FFC7C7] text-error;
      }
    }
  }
  .small{
   /* height: 32px;
    min-width: 32px;
    width: auto;*/
    @apply h-[32px] min-w-[32px] text-xs;
  }
  .large{
/*    height: 60px;
    min-width: 60px;
    width: auto;*/
    @apply h-[60px] min-w-[60px] text-l;
  }
  .medium{
/*    height: 40px;
    min-width: 40px;
    width: auto;*/
    @apply h-[40px] min-w-[40px] text-s;
  }
</style>
