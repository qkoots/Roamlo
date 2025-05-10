<template>
  <main class="min-h-screen bg-cover bg-top bg-no-repeat" :style="{ backgroundImage: 'url(/src/assets/images/bg_1440.png)' }">
    <NavBar v-if="$route.path !== '/signin' && $route.path !== '/signup'" />
    <RouterView class="" />
    <Footer v-if="$route.path !== '/signin' && $route.path !== '/signup'" />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Optional: Add a subtle overlay to ensure content remains readable */
.min-h-screen {
  background-color: rgba(255, 255, 255, 0.6);
  background-blend-mode: overlay;
}
</style>