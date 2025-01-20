// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Products from '../views/Products.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/cart', name: 'ShoppingCart', component: ShoppingCart },
  { path: '/products', name: 'Products', component: Products },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
