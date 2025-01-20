<script>
import { useCartStore } from '../stores/cart'

export default {
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
  },
}
</script>
<template>
  <div>
    <h1>Your Shopping Cart</h1>
    <ul>
      <li v-for="item in cartStore.items" :key="item.id">
        {{ item.name }} - {{ item.quantity }} x ${{ item.price }}
        <button @click="cartStore.removeFromCart(item.id)">Remove</button>
      </li>
    </ul>
    <p>Total: ${{ cartStore.totalPrice }}</p>
    <button @click="cartStore.clearCart">Clear Cart</button>
  </div>
</template>
