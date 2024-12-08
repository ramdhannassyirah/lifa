<template>
  <EditorContent :editor="editor" />
  <button
  :class="{ 'is-active': editor.isActive('bold') }"
  @click="editor.chain().focus().toggleBold().run()"
>
  Bold
</button>

</template>

<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const editor = useEditor({
  content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit],
});
</script>
