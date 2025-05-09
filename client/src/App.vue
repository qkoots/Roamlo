<template>
  <main>
    <NavBar v-if="$route.path !== '/login' && $route.path !== '/signup'" />
    <RouterView class="" />
    <Footer v-if="$route.path !== '/login' && $route.path !== '/signup'" />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>
