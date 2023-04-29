import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('task', () => {
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

  const task = ref({
    title: '',
    description: ''
  })

  const submitTask = () => {
    tasks.value.push({
      id: tasks.value.length + 1,
      title: task.value.title,
      description: task.value.description
    })

    task.value = {
      title: '',
      description: ''
    }
  }

  return { tasks, task, submitTask }
})
