<template>
  <div class="">
    <Navbar />
    <slot  />
    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/organisms/Footer.vue";
import Navbar from "~/components/organisms/Navbar.vue";
</script>
