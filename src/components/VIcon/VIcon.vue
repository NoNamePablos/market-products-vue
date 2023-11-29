<script lang="ts" setup>
import {computed} from "vue";
import * as icons from "lucide-vue-next";
interface ILucideIconProps{
  name:string;
  size?:number;
  color?:string;
  strokeWidth?:number;
  defaultClass?:string;
}
const props=defineProps<ILucideIconProps>()
const icon=computed(()=>icons[props.name]);
</script>

<template>
  <component
      :is="icon"
      :size="size"
      :color="color"
      :stroke-width="strokeWidth" :default-class="defaultClass"
  />
</template>
