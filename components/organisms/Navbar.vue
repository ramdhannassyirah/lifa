<template>
  <header class=" sticky top-0 z-50 bg-white font-bold shadow-brutal p-4">
    <div class="max-w-7xl  mx-auto flex items-center justify-between">
      <h1 class="text-3xl font-bold">lifa</h1>
      <div class="space-x-4 flex items-center font-medium">
        <Menu />
        <!-- Tombol untuk membuka modal login -->
        <Button @click="openModal">Login</Button>
        <ButtonPrimary class="bg-yellow-400 text-white" type="button">Register</ButtonPrimary>
      </div>
    </div>
    <!-- Modal Login -->
    <LoginForm />
  </header>
</template>

<script setup>
import { useModal } from "~/composables/useModal";
import ButtonPrimary from "../atoms/ButtonPrimary.vue";
import Menu from "../molecules/Menu.vue";
import LoginForm from "../organisms/LoginForm.vue";

// Akses state global modal
const { openModal } = useModal();
</script>
