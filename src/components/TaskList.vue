<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="offset-4 col-md-6 mt-3">
    <div class="card mb-3" v-for="task in tasks" :key="task.id">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <span>{{ task.title }}</span>
          <button class="btn btn-danger btn-sm">&times;</button>
        </div>
      </div>
    </div>
  </div>
</template>
