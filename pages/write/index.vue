<template>
    <div class="write-page">
      <h1 class="text-2xl font-bold mb-4">Write Your Story</h1>
        <TiptapEditor />
    </div>
  </template>
  
  <script>
  import TiptapEditor from "~/components/organisms/TiptapEditor.vue";
  
  export default {
    components: {
      TiptapEditor,
    },
  };
  </script>
  
  <style scoped>
  .write-page {
    padding: 16px;
    max-width: 800px;
    margin: auto;
  }
  </style>
  