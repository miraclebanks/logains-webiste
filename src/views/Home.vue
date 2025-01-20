<script>
import Testimonials from '@/components/Testimonials.vue'
import { ref, watch } from 'vue'

export default {
  name: 'Home',
  components: {
    Testimonials,
  },
  setup() {
    const isDarkMode = ref(false)

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
  <div class="image-container">
    <img src="/public/images/home.jpg" alt="home-image" />
    <div class="home-content-container">
      <h1>Welcome to Logan's Site</h1>
      <p>Something about product(s)</p>
      <p>This site is mobile and desktop friendly</p>
    </div>
  </div>
  <Testimonials />
</template>

<style lang="scss" scoped>
.image-container {
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.home-content-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(240, 248, 255, 0.8);
  z-index: 10;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  max-width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.2rem;
  }
}

.dark-mode-toggle {
  margin-top: 20px;
}

/* Dark Mode Styles */
body.dark-mode .home-content-container {
  background-color: rgba(33, 33, 33, 0.8); /* Dark background */
  color: #f1f1f1; /* Light text color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7); /* Stronger shadow */
}

/* Media Query for Mobile Devices */
@media (max-width: 768px) {
  .home-content-container {
    padding: 15px;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
}
</style>
