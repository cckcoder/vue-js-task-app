<script setup>
import { computed } from 'vue'

const formTask = computed(() => {
  return ['border', 'border-info', 'border-2', 'p-4', 'rounded']
})
</script>

<template>
  <div class="row">
    <h1 class="text-center">Hello Task Page</h1>
    <div class="offset-4 col-md-6">
      <form @submit.prevent="submitTask" :class="formTask">
        <div class="mb-3">
          <label for="task" class="form-label">Task</label>
          <input type="text" class="form-control" placeholder="Add your Task here!" name="task" />
          <button type="submit" class="btn btn-primary mt-3 w-100">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
