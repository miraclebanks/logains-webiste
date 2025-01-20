<script>
import { ref, watch } from 'vue'

export default {
  setup() {
    const isDarkMode = ref(false)

    // Watch for theme changes and apply it to the body
    watch(isDarkMode, (value) => {
      if (value) {
        document.body.classList.add('dark-mode')
      } else {
        document.body.classList.remove('dark-mode')
      }
    })

    return { isDarkMode }
  },
}
</script>

<template>
  <div>
    <nav class="navbar">
      <ul class="left-nav nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
      </ul>
      <ul class="right-nav nav-links">
        <li>
          <router-link to="/cart">Cart</router-link>
        </li>
        <li>
          <label>
            <input type="checkbox" v-model="isDarkMode" />
            Dark Mode
          </label>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
/* Global Light Mode Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
  color: #333;
}

/* Global Dark Mode Styles */
body.dark-mode {
  background-color: #121212;
  color: #f1f1f1;
}

/* Navbar Styling */
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

body.dark-mode .navbar {
  background-color: #1f1f1f;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #5789ff;
}

body.dark-mode .nav-links a:hover {
  color: #90caf9;
}
</style>
