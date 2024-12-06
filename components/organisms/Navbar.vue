<template>
  <header class="  w-full  bg-white font-bold shadow-brutal p-4">
    <div class="max-w-7xl mx-auto flex items-center flex-wrap justify-between">
      <h1 class="text-3xl font-bold">lifa</h1>
      <IconAlignJustify class="text-3xl lg:hidden" />
      <Menu class="" />
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
import NavbarMobile from "./NavbarMobile.vue";

// Akses state global modal
const { openModal } = useModal();
</script>
