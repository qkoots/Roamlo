<template>
  <main>
    <NavBar v-if="$route.path !== '/login' && $route.path !== '/signup'" />
    <RouterView class="container mx-auto px-4" />
    <Footer v-if="$route.path !== '/login' && $route.path !== '/signup'" />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>
