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
    description: '',
    completed: false
  })
  
  const apiServier = 'http://157.245.152.237:8009/api/task/'
  // Action
  const submitTask = () => {
    axios.post(apiServier, task.value)
    .then((resp) => {
      tasks.value.push(resp.data)
    })
    .catch((err) => {
      console.log(err)
    })
    

    task.value = {
      title: '',
      description: ''
    }
  }

  const deleteTask = (id) => {
    axios.delete(apiServier + id).then(() => {
      tasks.value = tasks.value.filter((task) => task.id !== id)
    })
  }

  axios.get(apiServier).then((response) => {
    tasks.value = response.data
  })

  return { tasks, task, submitTask, reverseTasks, deleteTask }
})
