<script>
import { useCartStore } from '../stores/cart'
import { ref, computed } from 'vue'

export default {
  setup() {
    const cartStore = useCartStore()
    const product = ref({
      id: 1,
      name: "Logan's Product",
      price: 19.99,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus`,
      images: [
        '/public/images/get-help.jpg',
        'https://source.unsplash.com/VgbUxvW3gS4',
        'https://source.unsplash.com/5WbYFH0kf_8',
      ],
    })

    const activeImage = ref(product.value.images[0])

    const setActiveImage = (image) => {
      activeImage.value = image
    }

    // Computed property to get the total number of items in the cart
    const cartItemCount = computed(() => cartStore.items.length)

    return { cartStore, product, activeImage, setActiveImage, cartItemCount }
  },
}
</script>

<template>
  <main>
    <div class="container">
      <div class="grid second-nav">
        <div class="column-xs-12">
          <nav>
            <ol class="breadcrumb-list">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a href="/products">Products</a></li>
              <li class="breadcrumb-item active">{{ product.name }}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="grid product">
        <div class="column-xs-12 column-md-7">
          <div class="product-gallery">
            <div class="product-image">
              <img class="active" :src="activeImage" alt="Product image" />
            </div>
          </div>
        </div>
        <div class="column-xs-12 column-md-5">
          <h1>{{ product.name }}</h1>
          <h2>${{ product.price.toFixed(2) }}</h2>
          <div class="description">
            <p>{{ product.description }}</p>
          </div>
          <button class="add-to-cart" @click="cartStore.addToCart(product)">Add To Cart</button>
          <p class="cart-status">Items in Cart: {{ cartItemCount }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pontano+Sans');

$white: #fff;
$black: #333;
$lightgray: #f0f3f1;
$text: #888;
$button: #3e3e3f;
$button-hover: #565657;

body {
  font-family: 'Pontano Sans', sans-serif;
  color: $text;
  background: $white;
  margin: 0;
  padding: 0;
}

.container {
  margin: auto;
  padding: 1rem;
  max-width: 75rem;
}

.grid {
  display: flex;
  flex-wrap: wrap;
}

.column-xs-12 {
  flex: 0 0 100%;
}

.column-md-7 {
  flex: 0 0 58%;
}

.column-md-5 {
  flex: 0 0 42%;
}

.breadcrumb-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.breadcrumb-item {
  font-size: 0.85rem;
  text-transform: uppercase;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: '/';
  margin: 0 0.5rem;
  color: $text;
}

.product {
  margin: 2rem 0;
}

.product-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image img {
  width: 100%;
  height: auto;
  max-width: 500px;
  object-fit: cover;
}

.image-list {
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.image-item {
  margin-right: 1rem;
  cursor: pointer;
}

.image-item img {
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  transition: opacity 0.3s;
}

.image-item img:hover {
  opacity: 0.7;
}

h1 {
  font-size: 2rem;
  color: $black;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  color: $black;
  margin: 0.5rem 0;
  text-align: center;
}

.description {
  margin: 2rem 0;
  padding: 1rem 0;
  border-top: 1px solid $lightgray;
  text-align: center;
}

.add-to-cart {
  background: $button;
  color: $white;
  padding: 0.8rem 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: background 0.3s ease;
  display: block;
  margin: 0 auto;
}

.add-to-cart:hover {
  background: $button-hover;
}

.cart-status {
  margin-top: 1rem;
  font-size: 1rem;
  color: $black;
  text-align: center;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .product {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .column-md-7,
  .column-md-5 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .product-gallery {
    margin-bottom: 1rem;
  }

  .breadcrumb-list {
    justify-content: center;
    flex-wrap: wrap;
  }

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  .description {
    font-size: 0.9rem;
  }

  .add-to-cart {
    width: 80%;
    padding: 1rem;
  }

  .cart-status {
    font-size: 0.9rem;
  }

  .image-item img {
    width: 3rem;
    height: 3rem;
  }
}
</style>
