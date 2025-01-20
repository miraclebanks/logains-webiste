<script>
import { ref } from 'vue'

export default {
  name: 'About',
  setup() {
    // Reactive state for the currently active section
    const activeSection = ref('#about') // Default active section is "#about"

    // Handles button clicks to update the active section
    const handleButtonClick = (targetSection) => {
      activeSection.value = targetSection // Update the active section
    }

    // Return reactive state and methods for template use
    return {
      activeSection,
      handleButtonClick,
    }
  },
}
</script>

<template>
  <div class="card" :data-state="activeSection">
    <div class="card-header">
      <img
        class="card-avatar"
        src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        alt="avatar"
      />
      <h1 class="card-fullname">Logan Eaton</h1>
      <h2 class="card-jobtitle">Mental Health Professional</h2>
    </div>
    <div class="card-main">
      <div
        v-for="section in ['#about', '#experience', '#contact']"
        :key="section"
        class="card-section"
        :id="section.slice(1)"
        :class="{ 'is-active': activeSection === section }"
      >
        <template v-if="section === '#about'">
          <div class="card-content">
            <div class="card-subtitle">ABOUT</div>
            <p class="card-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quod sed, culpa
              nemo ullam dolores porro facilis animi voluptates natus dolor neque unde minima non
              accusantium similique quasi officiis eaque.
            </p>
          </div>
          <div class="card-social">
            <a href="#">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"
                />
              </svg>
            </a>
            <!-- Other social icons omitted for brevity -->
          </div>
        </template>
        <template v-if="section === '#experience'">
          <div class="card-content">
            <div class="card-subtitle">WORK EXPERIENCE</div>
            <div class="card-timeline">
              <div class="card-item" data-year="2014">
                <div class="card-item-title">Brain Doctor at <span>LoganCo</span></div>
                <div class="card-item-desc">Responsible for some sort of mental experience.</div>
              </div>
              <!-- Other timeline items omitted for brevity -->
            </div>
          </div>
        </template>
        <template v-if="section === '#contact'">
          <div class="card-content">
            <div class="card-subtitle">CONTACT</div>
            <div class="card-contact-wrapper">
              <div class="card-contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Logan's PO BOX
              </div>
              <button class="contact-me">WORK TOGETHER</button>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="card-buttons">
      <button
        v-for="section in ['#about', '#experience', '#contact']"
        :key="section"
        :class="{ 'is-active': activeSection === section }"
        @click="handleButtonClick(section)"
      >
        {{ section.slice(1).toUpperCase() }}
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$font-primary: 'Jost', sans-serif;
$font-secondary: 'DM Sans', sans-serif;
$color-primary: #2b2c48;
$color-secondary: #636b6f;
$color-light: #ffffff;
$color-accent: #3190e7;
$background-image: url('https://images.unsplash.com/photo-1566738780863-f9608f88f3a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80');

body {
  color: $color-primary;
  font-family: $font-primary;
  background: $background-image no-repeat center / cover fixed;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

  * {
    box-sizing: border-box;
  }
}

// Card Component
.card {
  max-width: 340px;
  margin: auto;
  position: relative;
  margin-top: 96px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba($color-light, 0.2);
  background-color: rgba($color-light, 1);
  transition: 0.3s;
  @media screen and (max-width: 768px) {
    margin-top: 48px;
  }

  &.is-active {
    .card-header {
      height: 80px;

      .card-cover {
        height: 100px;
        top: -50px;
      }

      .card-avatar {
        width: 50px;
        height: 50px;
        left: 20px;
        bottom: 10px;
        transform: none;
      }

      .card-fullname {
        left: 86px;
        bottom: 18px;
        font-size: 19px;
        transform: none;
      }

      .card-jobtitle {
        left: 86px;
        bottom: 16px;
        font-size: 10px;
        letter-spacing: 1px;
        transform: none;
      }
    }
  }

  &[data-state='#about'] {
    height: 450px;

    .card-main {
      padding-top: 0;
    }
  }

  &[data-state='#contact'] {
    height: 430px;
  }

  &[data-state='#experience'] {
    height: 550px;
  }

  .card-header {
    position: relative;
    display: flex;
    height: 200px;
    flex-shrink: 0;
    width: 100%;
    transition: 0.3s;

    .card-cover {
      position: absolute;
      top: -20%;
      left: 0;
      width: 100%;
      height: 160px;
      background-size: cover;
      background-position: center;
      filter: blur(30px);
      transform: scale(1.2);
      transition: 0.5s;
    }

    .card-avatar {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100px;
      height: 100px;
      transform: translate(-50%, -64px);
      border-radius: 50%;
      box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
      object-fit: cover;
    }

    .card-fullname,
    .card-jobtitle {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }

    .card-fullname {
      bottom: 0;
      font-size: 22px;
      font-weight: 700;
    }

    .card-jobtitle {
      bottom: -20px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      opacity: 0.7;
    }
  }

  .card-main {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;

    .card-section {
      display: none;

      &.is-active {
        display: block;
        animation: fadeIn 0.6s both;
      }
    }

    .card-content {
      padding: 20px;

      .card-subtitle {
        font-weight: 700;
        font-size: 13px;
        margin-bottom: 8px;
      }

      .card-desc {
        line-height: 1.6;
        font-size: 14px;
        color: $color-secondary;
        font-family: $font-secondary;
        font-weight: 400;
      }
    }

    .card-social {
      display: flex;
      align-items: center;
      padding: 0 20px;
      margin-bottom: 30px;

      a {
        width: 32px;
        height: 32px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-right: 10px;
        background: rgba(93, 133, 193, 0.05);
        color: lighten($color-primary, 20%);
        transition: 0.3s;

        svg {
          width: 16px;
          fill: lighten($color-primary, 20%);
          transition: 0.3s;
        }

        &:hover {
          background: $color-accent;

          svg {
            fill: $color-light;
          }
        }
      }
    }
  }

  .card-buttons {
    display: flex;
    background: $color-light;
    margin-top: auto;
    position: sticky;
    bottom: 0;
    left: 0;

    button {
      flex: 1;
      font-size: 13px;
      padding: 15px 5px;
      color: darken($color-primary, 20%);
      border: 0;
      background: 0;
      border-bottom: 3px solid transparent;
      font-family: $font-primary;
      font-weight: 500;
      cursor: pointer;
      transition: 0.3s;

      &:hover,
      &.is-active {
        color: $color-primary;
        border-bottom: 3px solid $color-accent;
        background: linear-gradient(
          to bottom,
          rgba(127, 199, 231, 0) 0%,
          rgba(207, 204, 255, 0.2) 44%,
          rgba(211, 226, 255, 0.4) 100%
        );
      }
    }
  }
}

// Animations
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
