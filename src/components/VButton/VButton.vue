<script lang="ts" setup>


import {onMounted, useSlots} from "vue";

interface  IButtonProps{
  size?:'',
  hasText?:boolean;
  bgColor?:'';
  leftIcon?:boolean;
  rightIcon?:boolean;
}
const slots=useSlots()


withDefaults(defineProps<IButtonProps>(),{
  hasText:true,
})


</script>

<template>
  <div class="">
    <div
        class="lft"
         v-if="slots['left-icon']"
    >
     <slot name="left-icon"></slot>
    </div>
    <div v-if="hasText">
      <slot></slot>
    </div>
    <div class="rgt" v-if="slots['right-icon']" >
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>
<style lang="scss">

</style>
