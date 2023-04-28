<script setup>
import { ref } from 'vue';

const myName = ref('Codewizz');
const txtColor = ref('text-primary');
const bgColor = ref('text-bg-success');

</script>

<template>
  <main>
    <h1 :class="bgColor">Hello World</h1>
    <h2 :class="txtColor">{{ myName }}</h2>
  </main>
</template>

