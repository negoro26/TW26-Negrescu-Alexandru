<script setup lang="ts">
import { cos } from "../stores/ProductStore"
import Card from "../components/Card.vue"

const removeFromCart = (product: any) => {
    const index = cos.value.findIndex((p: any) => p.id === product.id)
    if (index !== -1) {
        cos.value.splice(index, 1)
    }
}
</script>

<template>
    <h1>Cos</h1>
    <div v-for="product in cos" :key="product.id">
        <Card :product="product" :isInCart="true" @remove-from-cart="removeFromCart"/>
    </div>
</template>

<style scoped></style>
