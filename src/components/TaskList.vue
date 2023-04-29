<script setup>
import { ref } from 'vue'

const tasks = ref([
  {
    id: '0001',
    title: 'Buy milk',
    description: 'Get a gallon of milk from the store.',
    completed: false
  },
  {
    id: '0002',
    title: 'Clean the kitchen',
    description: 'Wash dishes and wipe down countertops and appliances.',
    completed: false
  },
  {
    id: '0003',
    title: 'Do homework',
    description: 'Complete assigned homework for the day.',
    completed: false
  },
  {
    id: '0004',
    title: 'Schedule dentist appointment',
    description: 'Call the dentist to schedule a routine cleaning.',
    completed: false
  },
  {
    id: '0005',
    title: 'Water the plants',
    description: 'Give the houseplants a thorough watering.',
    completed: false
  }
])
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
