<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar />
    </div>
  </header>
  <div class="container mt-3">
    <RouterView />
  </div>
</template>
