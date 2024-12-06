<template>
  <NavbarMobile  />
  <div class="min-h-screen flex flex-col space-y-4">
    <Navbar />
    <Hero class="flex-grow flex items-center justify-between" />
    <Footer/>
  </div>
  <LoginForm />
</template>
<script setup>
import Hero from "~/components/organisms/Hero.vue";
import LoginForm from "~/components/organisms/LoginForm.vue";
import Navbar from "~/components/organisms/Navbar.vue";
import NavbarMobile from "~/components/organisms/NavbarMobile.vue";
import Footer from "~/components/organisms/Footer.vue";
</script>
<style></style>
