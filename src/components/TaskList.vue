<script setup>
import { useTaskStore } from '@/stores/task'
const store = useTaskStore()
</script>

<template>
  <div class="offset-4 col-md-6 mt-3">
    <div class="card mb-3" v-for="task in store.reverseTasks" :key="task.id">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <span>{{ task.title }}</span>
          <button @click="store.deleteTask(task.id)" class="btn btn-danger btn-sm">&times;</button>
        </div>
      </div>
    </div>
  </div>
</template>
