<script setup>
import { computed, ref } from 'vue'

const formTask = computed(() => {
  return ['border', 'border-info', 'border-2', 'p-4', 'rounded']
})

const tasks = ref([])

const submitTask = () => {
  tasks.value.push({
    id: tasks.value.length + 1,
    title: 'Task ' + tasks.value.length,
    description: 'Description ' + tasks.value.length
  })
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
            <input type="text" class="form-control" placeholder="Add your Task here!" name="task" />
          </div>

          <div class="form-group">
            <textarea
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
    <div class="offset-4 col-md-6 mt-3">
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <span>Item 1</span>
            <button class="btn btn-danger btn-sm">&times;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
