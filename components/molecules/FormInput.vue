<template>
    <div>
        <label :for="label">
            <slot />
        </label>
        <input :type="type" :id="label">
    </div>
</template>
<script setup>

const props = defineProps({
    label: String,
    type: String
})
</script>
<style lang="">
    
</style>