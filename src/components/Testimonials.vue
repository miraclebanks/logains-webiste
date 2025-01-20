<script>
import { ref, watch, onMounted } from 'vue'

export default {
  name: 'Testimonials',
  setup() {
    const testimonials = ref([
      {
        id: 1,
        name: 'EMILIANO AQUILANI',
        image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
        text: 'Testimonials auto cycle or you cant use buttons to navigate.',
      },
      {
        id: 2,
        name: 'ANNA ITURBE',
        image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
        text: 'Hashtag bespoke YOLO, put a bird on it hammock polaroid wayfarers tattooed neutra squid lumbersexual meh humblebrag VHS. Cred tumblr cold-pressed messenger bag small batch trust fund, mustache next level. Keytar swag kogi viral waistcoat flexitarian.',
      },
      {
        id: 3,
        name: 'LARA ATKINSON',
        image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      },
    ])

    const isDarkMode = ref(false)

    watch(isDarkMode, (value) => {
      if (value) {
        document.body.classList.add('dark-mode')
      } else {
        document.body.classList.remove('dark-mode')
      }
    })

    const activeTestimonial = ref(1) // Start with the first testimonial

    const next = () => {
      activeTestimonial.value =
        activeTestimonial.value === testimonials.value.length ? 1 : activeTestimonial.value + 1
    }

    const prev = () => {
      activeTestimonial.value =
        activeTestimonial.value === 1 ? testimonials.value.length : activeTestimonial.value - 1
    }

    // Auto-play functionality
    onMounted(() => {
      setInterval(next, 5000) // Change testimonial every 5 seconds
    })

    return { testimonials, activeTestimonial, next, prev, isDarkMode }
  },
}
</script>

<template>
  <section class="testimonials">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="carousel" ref="carousel">
            <!-- Testimonial Items -->
            <div
              class="item"
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              :class="{ active: testimonial.id === activeTestimonial }"
            >
              <div class="shadow-effect">
                <img class="img-circle" :src="testimonial.image" :alt="testimonial.name" />
                <div class="testimonial-name">{{ testimonial.name }}</div>
                <p>{{ testimonial.text }}</p>
              </div>
            </div>
          </div>
          <div class="carousel-controls">
            <button @click="prev">Prev</button>
            <button @click="next">Next</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* General Styles */
body {
  transition:
    background-color 0.3s,
    color 0.3s;
}

body.dark-mode {
  background-color: #121212;
  color: #f1f1f1;
}

.testimonials {
  text-align: center;
  padding: 2rem;
}

body.dark-mode .testimonials {
  background-color: #1a1a1a;
}

.carousel {
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.item {
  flex: 0 0 100%;
  opacity: 0;
  transition: all 0.5s ease;
  transform: scale(0.8);
  display: none;
}

.item.active {
  opacity: 1;
  transform: scale(1);
  display: block;
}

.shadow-effect {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  border: 1px solid #ececec;
  box-shadow:
    0 19px 38px rgba(0, 0, 0, 0.1),
    0 15px 12px rgba(0, 0, 0, 0.02);
}

body.dark-mode .shadow-effect {
  background: #1e1e1e;
  color: #f1f1f1;
  border: 1px solid #444;
  box-shadow:
    0 19px 38px rgba(0, 0, 0, 0.5),
    0 15px 12px rgba(0, 0, 0, 0.2);
}

.shadow-effect img {
  max-width: 90px;
  margin: 0 auto 17px;
  border-radius: 50%;
}

.testimonial-name {
  margin-top: 10px;
  font-weight: bold;
  color: #bacbd8;
}

body.dark-mode .testimonial-name {
  color: #bacbd8;
}

.carousel-controls {
  margin-top: 20px;
}

.carousel-controls button {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  background-color: #6c7c92;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

body.dark-mode .carousel-controls button {
  background-color: #6c7c92;
}

.carousel-controls button:hover {
  background-color: #b5b2a9;
}

body.dark-mode .carousel-controls button:hover {
  background-color: #b5b2a9;
}
</style>
