<script lang="ts" setup>
import VAvatar from "@/components/VAvatar/VAvatar.vue";
import {toRefs} from "vue";
import Typography from "@/components/Typography/Typography.vue";
import VIcon from "@/components/VIcon/VIcon.vue";
import {computed, ref} from "vue";

interface VUserMenuProps {
  data:{
    avatar:string;
    name:string;
    menu:Array<any>;
  }
}
const props=defineProps<VUserMenuProps>();
const {avatar,name,menu}=toRefs(props.data);
const isOpen=ref<boolean>(false);
const DropdownIcon=computed(()=>{
  return isOpen.value?'ChevronUp':'ChevronDown';
})
</script>

<template>
  <div class="user-menu">
    <div class="user-menu__header">
      <VAvatar :path="avatar"/>
      <Typography tag="span" class="user-menu__name" size="s">{{name}}</Typography>
      <Transition>
        <VIcon  class="user-menu__icon" :name="DropdownIcon" :key="DropdownIcon"/>
      </Transition>
    </div>
    <div class="user-menu__body">
      <div v-for="(item,idx) in menu" :key="idx">
        {{item.title}}
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .user-menu{
    @apply p-[8px];
    &__header{
      @apply grid grid-cols-[max-content_1fr_max-content] gap-[10px] items-center cursor-pointer;
    }
    &__body{
      @apply hidden;
    }
  }
</style>