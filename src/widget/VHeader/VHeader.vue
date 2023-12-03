<script lang="ts" setup>
import VContainer from "@/components/VContainer/VContainer.vue";
import VLogo from "@/components/VLogo/VLogo.vue";
import VButton from "@/components/VButton/VButton.vue";
import VIcon from "@/components/VIcon/VIcon.vue";
import VInput from "@/components/VInput/VInput.vue";
import {ref} from "vue";
import VCartButton from "@/components/VCartButton/VCartButton.vue";
import VAvatar from "@/components/VAvatar/VAvatar.vue";
const str=ref("");
const isOpenMenu=ref<boolean>(false);
</script>

<template>
  <header>
    <VContainer>
      <VLogo/>
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
      <VCartButton title="Избранное" link="/" :count="5"  icon="Heart" />
      <VCartButton title="Заказы" link="/" :count="3" icon="Package" />
      <VCartButton title="Корзина" link="/" :count="2" icon="ShoppingCart" />
      <VAvatar/>
    </VContainer>
  </header>
</template>
<style lang="scss">
.v-enter-active,
.v-leave-active {
  @apply transition-opacity duration-500 ease-out
}
.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}
</style>
