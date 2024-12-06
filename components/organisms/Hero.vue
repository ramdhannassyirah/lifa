<template>
    <section class="max-w-7xl mx-auto  px-4">
      <div class="flex flex-col-reverse items-center  gap-8 md:flex-row  ">
        <!-- Konten Teks -->
        <div class="text-center md:text-left space-y-4 flex-1">
          <div>
            <h1 class="text-3xl sm:text-4xl font-bold leading-tight">Manusia</h1>
            <h1 class="text-3xl sm:text-4xl font-bold leading-tight">Berbagi Cerita & Ide</h1>
          </div>
          <p class="text-sm sm:text-md text-gray-600">
            Tempat membaca, menulis, dan memperdalam pemahaman Anda
          </p>
          <ButtonPrimary class="bg-blue-600 px-8 py-3 text-white text-sm sm:text-md">
            Ayo Bergabung
          </ButtonPrimary>
        </div>
        
        <!-- Gambar -->
        <div class="flex-1 max-w-lg w-full">
          <img 
            src="../../assets/images/hero.png" 
            alt="Hero" 
            class="w-full h-auto object-cover "
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import ButtonPrimary from '../atoms/ButtonPrimary.vue';
  </script>
  