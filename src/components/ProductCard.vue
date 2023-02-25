<template>
    <div class="card border-1 border-gray-800 shadow-xl rounded-none">
        <figure class="px-4 pt-5">
            <img
                :src="product.image"
                alt="Card Image"
                class="object-contain w-full h-64"
            />
        </figure> 
        <div class="card-body ">
            <h2 class="card-title">
                <router-link class="link link-hover" :to="`/product/${product.id}`">{{ product.title }}</router-link>
            </h2>
            <p>{{ toCurrency(product.price) }}</p>
            <p class="text-sm h-full mt-2" v-text="product.description"></p>
            <div class="justify-end card-actions  align-bottom">
                <button class="btn btn-primary" @click="cartStore.add(product.id)">Add to Cart</button>
            </div>
        </div>
    </div>   
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart';
import type { Product } from '../store/products'
import { toCurrency } from '../shared/utils'

const cartStore = useCartStore()

defineProps<{
    product: Product
}>();
</script>