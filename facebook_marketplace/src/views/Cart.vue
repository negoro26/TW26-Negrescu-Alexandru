<script setup lang="ts">
import { cos } from "../stores/ProductStore"
import Card from "../components/Card.vue"

const removeFromCart = (product: any) => {
    cos.value = cos.value.filter((p: any) => p.id !== product.id)
}
</script>

<template>
    <h1>Cos</h1>
    <div v-for="product in cos" :key="product.id">
        <Card :product="product" :isInCart="true" @remove-from-cart="removeFromCart"/>
    </div>
</template>

<style scoped></style>
