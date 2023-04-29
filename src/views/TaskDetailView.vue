<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

console.log(route.params.id)

const handlePreviousPage = () => {
  router.back()
}

const handleHomePage = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="row">
    <div class="offset-4 col-md-6">
      <h1>Hello Task Detail</h1>
      <h2>Task ID: {{ route.params.id }}</h2>
      <div class="col-md-4 d-flex justify-content-between mt-5">
        <button class="btn btn-info" @click="handlePreviousPage">Back</button>
        <button class="btn btn-success" @click="handleHomePage">Go Home</button>
      </div>
    </div>
  </div>
</template>
