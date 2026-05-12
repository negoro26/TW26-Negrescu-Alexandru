<script setup lang="ts">
import { ref, watch } from 'vue'

const initialCount = parseInt(localStorage.getItem('count') || '0', 10)
const count = ref(initialCount)
const name = ref('')

const produse = [
  {id: 1, nume: "produs 1"},
  {id: 2, nume: "produs 2"},
  {id: 3, nume: "produs 3"}
]

watch(count, (newValue) => {
  localStorage.setItem('count', newValue.toString())
})

</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="count++">Increment</button>
  <button @click="count = 0">Reset</button>
  <button @click="count--">Decrement</button>

  <div v-if="count % 2 === 0">
    Numar par
  </div>
  <div v-else>
    Numar impar
  </div>

  <input type="text" v-model="name">
  {{ name }}

  <div v-for="produs in produse" :key="produs.id">
    {{produs.nume}}
  </div>

</template>

<style scoped></style>
