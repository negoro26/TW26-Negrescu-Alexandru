<script setup lang="ts">
    import { produse, cos } from "../stores/ProductStore"
    import Card from "../components/Card.vue"
    const addToCart = (product: any) => {
        cos.value.push(product)
    }
</script>

<template>
    <div v-for="product in produse" :key="product.id">
      <Card :product="product" :isInCart="false" @add-to-cart="addToCart"/>
    </div>
</template>

<style scoped></style>
