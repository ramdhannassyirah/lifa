<template>
  <div v-if="sembunyikan === false" class="navbar items-center max-w-7xl  mx-auto py-4" :class="sembunyikan === true ? 'hidden' : ''">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div v-if="login === true" class="flex-none gap-2">
      <InputSearch class="mr-2 hidden md:flex"/>
      <NuxtLink to="/" class="md:inline-flex items-center hidden  gap-2">
        <IconSquarePen  />
        Write
      </NuxtLink>
      <Notification />
      <ProfileSetting />
    </div>
    <div v-if="login === false" class="space-x-2">
      <Menu />
      <ButtonPrimary> Login</ButtonPrimary>
      <ButtonPrimary> Register</ButtonPrimary>
    </div>
  </div>
</template>
<script setup>
import ButtonPrimary from "../atoms/ButtonPrimary.vue";
import InputSearch from "../atoms/InputSearch.vue";
import Notification from "../atoms/Notification.vue";
import ProfileSetting from "../atoms/ProfileSetting.vue";
import Menu from "../molecules/Menu.vue";

import { reactive } from "vue";

const login = reactive(true);
</script>
<style></style>
