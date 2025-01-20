<script>
import { useCartStore } from '../stores/cart'
import { ref } from 'vue'

export default {
  setup() {
    const cartStore = useCartStore()
    const products = ref([
      { id: 1, name: 'Product A', price: 10 },
      { id: 2, name: 'Product B', price: 20 },
      { id: 3, name: 'Product C', price: 30 },
    ])
    return { cartStore, products }
  },
}
</script>

<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
        <button @click="cartStore.addToCart(product)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.page {
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

button {
  background-color: #ff5e57;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #ff3a2e;
}
</style>
