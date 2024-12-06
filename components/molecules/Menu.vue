<template>
  <nav class="space-x-4 hidden lg:flex flex-wrap items-center font-medium">
    <NuxtLink to="">Tentang Kami</NuxtLink>
    <NuxtLink to="">Panduan</NuxtLink>
      <Button @click="openModal">Login</Button>
      <ButtonPrimary class="bg-yellow-400 text-white" type="button">Register</ButtonPrimary>
  </nav>
</template>

<script setup>
import { useModal } from "~/composables/useModal";
import ButtonPrimary from "../atoms/ButtonPrimary.vue";

// Akses state global modal
const { openModal } = useModal();

</script>
