<script setup lang="ts">
const produse = [
  {id: 1, nume: "produs 1"},
  {id: 2, nume: "produs 2"},
  {id: 3, nume: "produs 3"}
]
</script>

<template>
    <div v-for="produs in produse" :key="produs.id">
        {{produs.nume}}
    </div>
</template>

<style scoped></style>
