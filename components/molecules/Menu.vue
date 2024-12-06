<template>
    <nav>
        <NavLink class="mr-4" v-for="(link, index) in links"  :key="index" 
            :navLink="link.name"
            :to="link.to"
        />
    </nav>
</template>
<script setup>
import { ref } from 'vue'
import NavLink from '../atoms/NavLink.vue';

const links = ref([
    { name: 'Tentang Kami', to: '/' },
    { name: 'Hubungi Kami', to: '/contact' },
    { name: 'Panduan', to: '/about' },
]);
</script>