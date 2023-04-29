<script setup>
import { useTaskStore } from '@/stores/task'
import { computed } from 'vue'
import TaskList from '@/components/TaskList.vue'

const store = useTaskStore()

const formTask = computed(() => {
  return ['border', 'border-info', 'border-2', 'p-4', 'rounded']
})
</script>

<template>
  <div class="row">
    <h1 class="text-center">Hello Task Page</h1>
    <div class="offset-4 col-md-6">
      <form @submit.prevent="store.submitTask" :class="formTask">
        <div class="mb-3">
          <div class="form-group mb-3">
            <label for="task" class="form-label">Task</label>
            <input
              v-model="store.task.title"
              type="text"
              class="form-control"
              placeholder="Add your Task here!"
              name="task"
            />
          </div>

          <div class="form-group">
            <textarea
              v-model="store.task.description"
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
