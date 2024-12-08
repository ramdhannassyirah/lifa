<template>
  <section class="container max-w-7xl mx-auto px-4 flex gap-2">
    <div class="flex-1">
      <NavigationMenu />
      <CardBlog class="mb-4" v-for="(i, index) in 10" :key="index" />
    </div>
    <div class="w-96 hidden lg:block p-4">
      <div class="sticky top-4 space-y-4 mt-10">
          <RecommendedTopics />
          <CardFAQ />
      </div>
    </div>
  </section>
</template>
<script setup>
import CardBlog from "~/components/molecules/Card/CardBlog.vue";
import CardFAQ from "~/components/molecules/Card/CardFAQ.vue";
import NavigationMenu from "~/components/molecules/NavigationMenu.vue";
import RecommendedTopics from "~/components/molecules/RecommendedTopics.vue";
</script>
