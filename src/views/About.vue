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
      <img class="card-avatar" src="/public/images/logan-profile.jpeg" alt="avatar" />
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
            <a href="#"
              ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"
                /></svg
            ></a>
            <a href="#"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                /></svg
            ></a>
            <a href="#"
              ><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0"
                />
                <path
                  d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0"
                />
                <path
                  d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0"
                /></svg
            ></a>
            <a href="#"
              ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z"
                /></svg
            ></a>
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
              <div class="card-item" data-year="2022">
                <div class="card-item-title">Brain Doctor at <span>LoganCo</span></div>
                <div class="card-item-desc">Responsible for some sort of mental expreience.</div>
              </div>
            </div>
            <div class="card-item" data-year="2025">
              <div class="card-item-title">Brain Doctor at <span>LoganCo</span></div>
              <div class="card-item-desc">Responsible for some sort of mental expreience.</div>
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
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                logans.email@email.com
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
.card-timeline {
  margin-top: 30px;
  position: relative;
  &:after {
    background: linear-gradient(to top, rgba(134, 214, 243, 0) 0%, rgba(81, 106, 204, 1) 100%);
    content: '';
    left: 42px;
    width: 2px;
    top: 0;
    height: 100%;
    position: absolute;
    content: '';
  }
}

.card-item {
  position: relative;
  padding-left: 60px;
  padding-right: 20px;
  padding-bottom: 30px;
  z-index: 1;
  &:last-child {
    padding-bottom: 5px;
  }

  &:after {
    content: attr(data-year);
    width: 10px;
    position: absolute;
    top: 0;
    left: 37px;
    width: 8px;
    height: 8px;
    line-height: 0.6;
    border: 2px solid #fff;
    font-size: 11px;
    text-indent: -35px;
    border-radius: 50%;
    color: rgba(#868686, 0.7);
    background: linear-gradient(to bottom, lighten(#516acc, 20%) 0%, #516acc 100%);
  }
}

.card-item-title {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
}

.card-item-desc {
  font-size: 13px;
  color: #6f6f7b;
  line-height: 1.5;
  font-family: 'DM Sans', sans-serif;
}

.card-contact-wrapper {
  margin-top: 20px;
}

.card-contact {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #6f6f7b;
  font-family: 'DM Sans', sans-serif;
  line-height: 1.6;
  cursor: pointer;

  & + & {
    margin-top: 16px;
  }

  svg {
    flex-shrink: 0;
    width: 30px;
    min-height: 34px;
    margin-right: 12px;
    transition: 0.3s;
    padding-right: 12px;
    border-right: 1px solid #dfe2ec;
  }
}

.contact-me {
  border: 0;
  outline: none;
  background: linear-gradient(to right, rgba(83, 200, 239, 0.8) 0%, rgba(81, 106, 204, 0.8) 96%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  color: #fff;
  padding: 12px 16px;
  width: 100%;
  border-radius: 5px;
  margin-top: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Jost', sans-serif;
  transition: 0.3s;
}
</style>
