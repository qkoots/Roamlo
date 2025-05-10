<template>
  <main>
    <NavBar v-if="$route.path !== '/signin' && $route.path !== '/signup'" />
    <RouterView />
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
  background-color: rgba(255, 255, 255, 0.75);
  background-blend-mode: overlay;
}
</style>