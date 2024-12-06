<template>
  <button class="px-6 py-2 text-lg font-semibold rounded-brutal bg-primary text-white  shadow-brutal transition-transform duration-200 transform hover:-translate-y-1" :type="type">
    <slot />
  </button>
</template>
<script setup>
const props = defineProps({
    className: String,
    type: String
})
</script>
<style></style>
