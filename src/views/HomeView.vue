<script setup>
import { ref } from 'vue'

const myName = ref('Codewizz')
const txtColor = ref('text-primary')
const bgColor = ref('text-bg-success')

const count = ref(0)
</script>

<template>
  <div>
    <h1 :class="bgColor">Hello World</h1>
    <h2 :class="txtColor">{{ myName }}</h2>
    <hr />
    <div class="row">
      <div class="offset-md-4 col-md-6">
        <button class="btn btn-primary">+</button>
        <span class="h3">{{ count }}</span>
        <button class="btn btn-danger">-</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

button {
  width: 100px;
}

span {
  margin: 0px 10px;
  padding: 10px;
}
</style>
