<script>
import { useCartStore } from './stores/cart'
import { computed } from 'vue'

export default {
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
  },
}
</script>

<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li>
          <router-link to="/cart">Cart ({{ cartStore.totalItems }})</router-link>
        </li>
        <li><router-link to="/products">Products</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>
