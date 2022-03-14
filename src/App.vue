<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <header>
    <div class="container mx-auto max-w-4xl p-2">
      <Navbar />
      <RouterView />
    </div>
  </header>
</template>
