<template>
  <div
    class="fixed inset-0 lg:hidden bg-gray-500/80 z-[999] w-full h-screen shadow-brutal overflow-hidden"
  >
    <!-- Close Button -->
    <button
      @click="closeModal"
      class="absolute top-4 right-4 text-white bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-600 focus:outline-none"
    >
      ✕
    </button>

    <nav class="flex justify-center items-center font-medium h-full">
      <div class="flex flex-col gap-6 items-center">
        <p>Tentang Kami</p>
        <p>Panduan</p>
        <Button @click="openModal">Login</Button>
        <ButtonPrimary class="bg-yellow-400 text-white" type="button">
          Register
        </ButtonPrimary>
      </div>
    </nav>
  </div>
</template>

<script setup>
import ButtonPrimary from "../atoms/ButtonPrimary.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

// Function to close modal
const isModalOpen = ref(true);

const closeModal = () => {
  isModalOpen.value = false;
  document.body.classList.remove("overflow-hidden");
};

// Prevent body scroll when modal is open
onMounted(() => {
  document.body.classList.add("overflow-hidden");
});

onBeforeUnmount(() => {
  document.body.classList.remove("overflow-hidden");
});
</script>

<style>
/* Optional styling for the close button */
button:focus {
  outline: 2px solid white;
  outline-offset: 2px;
}
</style>
