<script setup lang="ts">
import { ref, watch } from 'vue'
import { produse } from "../stores/ProductStore"

const initialCount = parseInt(localStorage.getItem('count') || '0', 10)
const count = ref(initialCount)
const name = ref('')

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
    {{produs.name}}
  </div>

</template>

<style scoped></style>
