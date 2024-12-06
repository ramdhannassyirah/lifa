<template>
  <GuestLayouts>
    <section class="container max-w-7xl mx-auto px-4 flex gap-2">
      <div class="flex-1">
        <CardBlog class="mb-4" v-for="( i, index) in 10" :key="index" />
      </div>
      <div class="w-96 bg-black ">
        hello
      </div>
    </section>
  </GuestLayouts>
</template>
<script setup>
import CardBlog from "~/components/molecules/Card/CardBlog.vue";
import Hero from "~/components/organisms/Hero.vue";
import GuestLayouts from "~/layouts/GuestLayouts.vue";
</script>
