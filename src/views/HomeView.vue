<script setup>
import { ref } from 'vue'

const myName = ref('Codewizz')
const txtColor = ref('text-primary')
const bgColor = ref('text-bg-success')
const placeHolder = ref('Input your favorit food here')

const count = ref(0)
const favoriteFood = ref('')

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const helloMyName = () => {
  alert(`Hello ${myName.value}`)
}
</script>

<template>
  <div>
    <h1 :class="bgColor">Hello World</h1>
    <h2 :class="txtColor" @click="helloMyName">{{ myName }}</h2>
    <hr />
    <div class="row">
      <div class="offset-md-4 col-md-6">
        <button class="btn btn-primary" @click="increment">+</button>
        <span class="h3">{{ count }}</span>
        <button class="btn btn-danger" @click="decrement">-</button>
      </div>
    </div>
    <br />
    <div class="row" v-if="count > 5">
      <div class="alert alert-danger" role="alert">Your Count Addition more than limit!</div>
    </div>
    <hr />
    <div class="row text-center">
      <div class="offset-md-4 col-md-3">
        <h3>V-model</h3>
        <input type="text" class="form-control" :placeholder="placeHolder" v-model="favoriteFood" />
        <span class="fav-food">
          {{ favoriteFood }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  width: 100px;
}

span {
  margin: 0px 10px;
  padding: 10px;
}

h2 {
  cursor: pointer;
}
</style>
