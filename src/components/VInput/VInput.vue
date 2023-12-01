<script lang="ts" setup>

import {computed, ref, useSlots} from "vue";

  type TLargeSize='l'
  type TMediumSize='m';
  type TInputSize=
          TLargeSize|
          TMediumSize
  interface IInputProps{
    label:string;
    placeholder:string;
    modelValue:string;
    size:TInputSize,
    disabled:boolean;
    error?:string;
  }
  defineProps<IInputProps>();
  const isFocused=ref<boolean>(false)
  const slots=useSlots();
  const emit=defineEmits<{
    (event:'update:modelValue',value:any):void
  }>()
  const inputRef=ref<HTMLInputElement|null>(null);
  const handleChange=(event:Event)=>{
    emit('update:modelValue',(event.target as HTMLInputElement).value);
  }
  const handleFocus=()=>{
    inputRef.value?.focus();
  }
  const changeFocus=(state:boolean):void=>{
    isFocused.value=state;
  }


</script>

<template>
  <div class="input-group" >
    <div @click="handleFocus" class="input-group__label" v-if="label">{{label}}</div>
    <div class="input" :class="[{focus:isFocused},`size_${size}`,{'with-icon':slots['left-icon']}]">
      <div class="input__icon" v-if="slots['left-icon']">
        <slot name="left-icon"></slot>
      </div>
      <input
          type="text"
          ref="inputRef"
          placeholder="value"
          @input="handleChange"
          :value="modelValue"
          @focus="isFocused=true"
          @focusout="isFocused=false"
      >
      <div class="input__icon" v-if="slots['right-icon']">
        <slot name="right-icon"></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .input-group{
    @apply flex flex-col transition-all duration-300 ease-out;

    &__label{
      @apply font-sans text-s text-grayscale-hard font-normal leading-[150%];
    }
  }
  .input{
    @apply py-[8px] px-[16px] flex rounded-[4px] items-center gap-[8px] border border-solid border-grayscale-light bg-white;
    & input{
      @apply w-full appearance-none  border-none outline-none;
    }
    &__icon{
      @apply w-[24px] h-[24px] flex items-center justify-center;
    }
  }
  .with-icon{
    @apply p-[8px];
  }
  .focus{
    @apply border border-solid border-secondary shadow-[4px_8px_16px_0px_rgba(112,192,91,0.20)] ;
    //box-shadow: 4px 8px 16px 0px rgba(112, 192, 91, 0.20);
  }
  .size_l{
    @apply h-[60px];
  }
  .size_m{
    @apply h-[40px];
  }
</style>