import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([
    {
      id: 1,
      title: 'Buy milk',
      description: 'Get a gallon of milk from the store.',
      completed: false
    },
    {
      id: 2,
      title: 'Clean the kitchen',
      description: 'Wash dishes and wipe down countertops and appliances.',
      completed: false
    },
    {
      id: 3,
      title: 'Do homework',
      description: 'Complete assigned homework for the day.',
      completed: false
    },
    {
      id: 4,
      title: 'Schedule dentist appointment',
      description: 'Call the dentist to schedule a routine cleaning.',
      completed: false
    },
    {
      id: 5,
      title: 'Water the plants',
      description: 'Give the houseplants a thorough watering.',
      completed: false
    }
  ])

  const reverseTasks = computed(() => {
    return tasks.value.slice().reverse()
  })

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

  return { tasks, task, submitTask, reverseTasks }
})
