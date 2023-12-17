<script lang="ts" setup>
import VContainer from "@/components/VContainer/VContainer.vue";
import VLogo from "@/components/VLogo/VLogo.vue";
import VButton from "@/components/VButton/VButton.vue";
import VIcon from "@/components/VIcon/VIcon.vue";
import VInput from "@/components/VInput/VInput.vue";
import {ref} from "vue";
import VCartButton from "@/components/VCartButton/VCartButton.vue";
import VUserList from "@/widget/VUserList/VUserList.vue";
import type {VHeaderNavigationProps} from "@/components/VHeaderNavigation";
import VHeaderNavigation from "@/components/VHeaderNavigation/VHeaderNavigation.vue";
const str=ref("");
const isOpenMenu=ref<boolean>(false);
const headerNavigationList:Array<VHeaderNavigationProps>=[
  {
    title:'Избранное',
    link:'/',
    count:0,
    icon:'Heart'
  },
  {
    title:'Заказы',
    link:'/',
    count:2,
    icon:'Package'
  },
  {
    title:'Корзина',
    link:'/',
    count:2,
    icon:'ShoppingCart'
  }
]

</script>

<template>
  <header class="header">
    <VContainer>
      <div class="header__container">
        <div class="header__logo">
          <VLogo :orientation="'horizontal'"  :colorfull="true" :bg-color="'white'" :with-text="true"/>
        </div>
        <VButton :accent="'secondary'" size="m" @click="isOpenMenu=!isOpenMenu">
          <template #left-icon>
            <transition>
              <VIcon :name="!isOpenMenu?'Menu':'X'"/>
            </transition>
          </template>
          Каталог
        </VButton>
        <VInput border-color="secondary" v-model="str" placeholder="Найти товар">
          <template #right-icon>
            <VIcon name="Search"/>
          </template>
        </VInput>
        <!-- header navigation       -->
        <VHeaderNavigation :data="headerNavigationList"/>
      </div>
    </VContainer>
  </header>
</template>
<style lang="scss" scoped>
.header{
  @apply relative flex mx-auto h-[72px];
  &__container{
    @apply flex h-full items-center gap-[40px];
  }
  &__logo{
    @apply max-w-[150px];
  }
}

.v-enter-active,
.v-leave-active {
  @apply transition-opacity duration-500 ease-out
}
.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}

</style>
