<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Testimonials',
  setup() {
    const testimonials = ref([
      {
        id: 1,
        name: 'EMILIANO AQUILANI',
        image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
        text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
      },
      {
        id: 2,
        name: 'ANNA ITURBE',
        image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
        text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
      },
      {
        id: 3,
        name: 'LARA ATKINSON',
        image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
        text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
      },
    ])

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

    return { testimonials, activeTestimonial, next, prev }
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
                <p>{{ testimonial.text }}</p>
              </div>
              <div class="testimonial-name">{{ testimonial.name }}</div>
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
.testimonials {
  text-align: center;
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

.shadow-effect img {
  max-width: 90px;
  margin: 0 auto 17px;
  border-radius: 50%;
}

.testimonial-name {
  margin-top: 10px;
  font-weight: bold;
  color: #3190e7;
}

.carousel-controls {
  margin-top: 20px;
}

.carousel-controls button {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  background-color: #3190e7;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.carousel-controls button:hover {
  background-color: #217ac0;
}
</style>
