<template>
  <div class="flex flex-col space-y-2">
    <h2 class="text-2xl font-bold">Recommended Topics</h2>
    <div class="flex flex-wrap gap-2">
      <div v-for="(tag, index) in tags" :key="index">
        <span class="badge badge-outline">{{ tag.label }}</span>
      </div>
    </div>
    <NuxtLink to="">Lihat semua Topics</NuxtLink>
  </div>
</template>
<script setup>
import { ref } from "vue";
const tags = ref([
  { label: "Javascript" },
  { label: "Typescript" },
  { label: "Vue" },
  { label: "Nuxt" },
  { label: "Tailwind" },
  { label: "React" },
  { label: "Next" },
  { label: "Node" },
]);
</script>
