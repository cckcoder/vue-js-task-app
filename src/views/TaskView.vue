<script setup>
import { computed, ref } from 'vue'
import TaskList from '@/components/TaskList.vue'

const formTask = computed(() => {
  return ['border', 'border-info', 'border-2', 'p-4', 'rounded']
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
</script>

<template>
  <div class="row">
    <h1 class="text-center">Hello Task Page</h1>
    <div class="offset-4 col-md-6">
      <form @submit.prevent="submitTask" :class="formTask">
        <div class="mb-3">
          <div class="form-group mb-3">
            <label for="task" class="form-label">Task</label>
            <input
              v-model="task.title"
              type="text"
              class="form-control"
              placeholder="Add your Task here!"
              name="task"
            />
          </div>

          <div class="form-group">
            <textarea
              v-model="task.description"
              name="description"
              rows="3"
              class="form-control"
              placeholder="Description"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary mt-3 w-100">Submit</button>
        </div>
      </form>
    </div>

    <TaskList />
  </div>
</template>
