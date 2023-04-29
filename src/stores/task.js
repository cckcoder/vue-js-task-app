import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([])

  const reverseTasks = computed(() => {
    return tasks.value
  })

  const task = ref({
    title: '',
    description: ''
  })

  // Action
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

  const deleteTask = (id) => {
    axios.delete(`http://localhost:8000/api/task/${id}`).then(() => {
      tasks.value = tasks.value.filter((task) => task.id !== id)
    })
  }

  axios.get('http://localhost:8000/api/task/').then((response) => {
    tasks.value = response.data
  })

  return { tasks, task, submitTask, reverseTasks, deleteTask }
})
