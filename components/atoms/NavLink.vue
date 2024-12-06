<template>
    <NuxtLink :to="to">
        {{ navLink }}
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    navLink: String,
    to: String
})
</script>