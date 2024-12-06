<template>
  <section class="container max-w-7xl mx-auto px-4 flex gap-2">
    <div class="flex-1">
      <NavigationMenu />
      <CardBlog class="mb-4" v-for="(i, index) in 10" :key="index" />
    </div>
    <div class="w-96 bg-black/80 hidden lg:block">
      <h1 class="text-3xl text-center text-white mt-10">Sidebar</h1>
    </div>
  </section>
</template>
<script setup>
import CardBlog from "~/components/molecules/Card/CardBlog.vue";
import NavigationMenu from "~/components/molecules/NavigationMenu.vue";
import Hero from "~/components/organisms/Hero.vue";
</script>
