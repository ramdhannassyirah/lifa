<template>
    <transition
      name="modal-fade"
      appear
    >
      <div
        v-if="isVisible"
        class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      >
        <div
          class="relative w-96 p-10 rounded-md bg-gradient-to-r from-primary to-yellow-400 flex items-center shadow-brutal"
        >
          <!-- Tombol close -->
          <button
            type="button"
            class="absolute top-2 right-4  text-3xl font-bold"
            @click="closeModal"
          >
            &times;
          </button>
          <div class="w-full">
            <h2 class="text-3xl text-center mb-10 font-bold">Login</h2>
            <form class="space-y-5">
              <FormInput label="Email" type="email" />
              <FormInput label="Password" type="password" />
              <ButtonPrimary class="bg-blue-500" type="submit">Submit</ButtonPrimary>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { useModal } from "~/composables/useModal";
  import ButtonPrimary from "../atoms/ButtonPrimary.vue";
  import FormInput from "../molecules/FormInput.vue";
  
  // Akses state global modal
  const { isVisible, closeModal } = useModal();
  </script>
  
  <style>
  /* Transisi Fade */
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }
  </style>
  