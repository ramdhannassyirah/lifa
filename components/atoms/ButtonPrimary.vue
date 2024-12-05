<template>
  <button :class="className" :type="type">
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
