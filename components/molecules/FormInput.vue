<template>
    <div>
      <label :for="id" class="block mb-2 font-semibold">{{ label }}</label>
      <input
        :id="id"
        :type="type"
        :v-model="modelValue"
        :placeholder="placeholder"
        class="p-3 border-2 w-full border-black bg-white shadow-brutal rounded-brutal focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    id: String,
      label: String,
      type: {
        type: String,
        default: 'text'
      }, 
      modelValue: [String, Number],
      placeholder: String,
      errorMessage: String
    
  })
  </script>
  