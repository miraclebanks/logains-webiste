<script>
import { ref, watch, onMounted } from 'vue'

export default {
  setup() {
    const isDarkMode = ref(false)

    // Watch for theme changes and apply the "dark-mode" class to the body
    watch(isDarkMode, (value) => {
      if (value) {
        document.body.classList.add('dark-mode')
        localStorage.setItem('darkMode', 'enabled')
      } else {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('darkMode', 'disabled')
      }
    })

    // Load preference from localStorage on mount
    onMounted(() => {
      if (localStorage.getItem('darkMode') === 'enabled') {
        isDarkMode.value = true
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
          <div class="dark-mode-toggle">
            <label>
              <input class="toggle-checkbox" type="checkbox" v-model="isDarkMode" />
              <div class="toggle-slot">
                <div class="sun-icon-wrapper">
                  <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                </div>
                <div class="toggle-button"></div>
                <div class="moon-icon-wrapper">
                  <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                </div>
              </div>
            </label>
          </div>
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
  transition:
    background-color 0.3s,
    color 0.3s;
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
  align-items: center;
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
  color: #6c7c92;
}

body.dark-mode .nav-links a:hover {
  color: #b5b2a9;
}

/* Dark Mode Toggle */
.dark-mode-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.toggle-slot {
  position: relative;
  height: 2em;
  width: 4em;
  border: 2px solid #e4e7ec;
  border-radius: 2em;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 250ms;
}

.toggle-checkbox:checked ~ .toggle-slot {
  background-color: #374151;
}

.toggle-button {
  transform: translate(1em, 0.25em);
  position: absolute;
  height: 1.5em;
  width: 1.5em;
  border-radius: 50%;
  background-color: #ffeccf;
  box-shadow: inset 0px 0px 0px 0.25em #ffbb52;
  transition:
    background-color 250ms,
    border-color 250ms,
    transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
}

.toggle-checkbox:checked ~ .toggle-slot .toggle-button {
  background-color: #485367;
  box-shadow: inset 0px 0px 0px 0.25em white;
  transform: translate(2.25em, 0.25em);
}

.sun-icon-wrapper,
.moon-icon-wrapper {
  position: absolute;
  height: 1.5em;
  width: 1.5em;
}

.sun-icon-wrapper {
  opacity: 1;
  transform: translate(0.5em, 0.25em);
  transition:
    opacity 150ms,
    transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
}

.toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
  opacity: 0;
  transform: translate(1em, 0.25em);
}

.moon-icon-wrapper {
  opacity: 0;
  transform: translate(2.25em, 0.25em);
  transition:
    opacity 150ms,
    transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
}

.toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
  opacity: 1;
  transform: translate(2.5em, 0.25em);
}
</style>
