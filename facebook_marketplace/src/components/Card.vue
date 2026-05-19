<script setup lang="ts">
    defineProps(["product", "isInCart"])
    defineEmits(["addToCart", "removeFromCart"])
</script>

<template>
    <div class="card">
       {{ product.name }} {{ product.desc }} {{ product.price }}
        <button v-if="isInCart" @click="$emit('removeFromCart', product)">Elimina din cos</button>
        <button v-else @click="$emit('addToCart', product)">Adauga in cos</button>
    </div>
</template>

<style scoped></style>

