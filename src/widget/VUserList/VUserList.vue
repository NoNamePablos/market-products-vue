
<script lang="ts" setup>

  import Typography from "@/components/Typography/Typography.vue";
  import VAvatar from "@/components/VAvatar/VAvatar.vue";
  import VDropdown from "@/components/VDropdown/VDropdown.vue";

  const catalogLinks=[
    {
      tilte:'Хлебобулочные изделия',
      link:'/hleb',
    },
    {
      tilte:'Молоко, сыр, яйцо',
      link:'/hleb1',
    },
    {
      tilte:'Фрукты и овощи',
      link:'/hleb1',
    },
    {
      tilte:'Замороженные продукты',
      link:'/hleb1',
    },
    {
      tilte:'Напитки',
      link:'/hleb1',
    },
    {
      tilte:'Кондитерские изделия',
      link:'/hleb1',
    },
    {
      tilte:'Чай, кофе',
      link:'/hleb1',
    },
    {
      tilte:'Бакалея',
      link:'/hleb1',
    },
    {
      tilte:'Здоровое питание',
      link:'/hleb1',
    },
    {
      tilte:'Зоотовары',
      link:'/hleb1',
    },
    {
      tilte:'Детское питание',
      link:'/hleb1',
    },
    {
      tilte:'Мясо, птица, колбаса',
      link:'/hleb1',
    },
    {
      tilte:'Непродовольственные товары',
      link:'/hleb1',
    },


  ]
</script>

<template>
  <div class="user-menu">
    <VDropdown>
      <template #header>
        <VAvatar/>
      </template>
      <template #body>
        <ul class="catalog-list">
          <li class="catalog-list__item" v-for="(item,idx) in catalogLinks">
            <Typography size="s">
              <router-link :to="item.link">{{item.tilte}}</router-link>
            </Typography>
          </li>
        </ul>
        <router-link to="/logout">Выйти</router-link>
      </template>
    </VDropdown>
  </div>
</template>
<style lang="scss" scoped>
.user-menu{
  @apply relative;
}
.user-menu :deep(.dropdown){
  @apply absolute top-0 right-0;
}
.catalog-list{
  @apply flex flex-col gap-[24px];
  &__item{
    @apply hover:text-primary transition-all duration-300 cursor-pointer;
  }
}
</style>