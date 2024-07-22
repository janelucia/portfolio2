<template>
    <header class="flex w-full z-60 h-16 justify-between items-center p-4" :class="headerClass">
      <p class="text-3xl font-bold text-text-light">{JS}</p>
      <div @click="toggleMenu" class="hamburger" :class="{ change: isActive }">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <nav v-if="isActive" class="fixed bg-white flex flex-col items-center justify-evenly top-16 left-0 w-full h-screen p-4 z-50" aria-label="mobile menu"
      >
        <div class="flex flex-col gap-8 items-center">
          <!-- Mobile menu items -->
          <a href="#" class="menu-item">Home</a>
          <a href="#" class="menu-item">About Me</a>
          <a href="#" class="menu-item">Projects</a>
          <a href="#" class="menu-item">Blog</a>
          <a href="#" class="menu-item">Get in touch</a>
        </div>
        <div class="flex gap-4">
          <a v-for="contact in contactInfo" :key="contact" :href="contact.url">
            <Icon :name="contact.icon" class="text-2xl"/>
          </a>
        </div>
      </nav>
      <nav class="hidden lg:flex justify-evenly w-full" aria-label="desktop menu">
        <!-- Desktop menu items -->
        <a href="#" class="menu-item">Home</a>
        <a href="#" class="menu-item">About Me</a>
        <a href="#" class="menu-item">Projects</a>
        <a href="#" class="menu-item">Blog</a>
        <a href="#" class="menu-item">Get in touch</a>
      </nav>
    </header>
    <main class="flex flex-col gap-4 items-center top-16">
      <slot />
    </main>
    <footer class="p-4 flex items-center justify-between">
      <p class="text-3xl font-bold text-text-light">{JS}</p>
      <ul class="flex gap-4">
        <li v-for="contact in contactInfo" :key="contact.icon">
          <a :href="contact.url">
            <Icon :name="contact.icon" class="text-2xl"/>
          </a>
        </li>
      </ul>
    </footer>
</template>
<script setup lang="ts">


import { ref } from 'vue';
import aboutJson from '~/helper/about.json';

const contactInfo = aboutJson.contact;

const isActive = ref(false);
const isScrolled = ref(false);

function checkScroll() {
  isScrolled.value = window.scrollY > 0;
}

const headerClass = computed(() => {
  return isScrolled.value ? 'fixed top-0 z-50 w-full bg-white shadow' : 'relative bg-transparent';
});

function toggleMenu() {
  isActive.value = !isActive.value;
}

watch(isActive, (value) => {
  if (value) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
  document.body.classList.remove('no-scroll');
});
</script>

<style>
.hamburger {
  @apply cursor-pointer lg:hidden flex flex-col items-end gap-1 z-10;
}

.bar1, .bar3 {
  @apply w-9 h-1 bg-text-light rounded-full;
  transition: 0.4s;
}

.bar2 {
  @apply w-6 h-1 bg-text-light rounded-full;
  transition: 0.4s;
}

/* Rotate first bar */
.change .bar1 {
  transform: translate(0, 8px) rotate(-45deg);
}

/* Fade out the second bar */
.change .bar2 {
  @apply opacity-0;
}

/* Rotate third bar */
.change .bar3 {
  transform: translate(0, -8px) rotate(45deg);
}

.menu-item {
  @apply text-text-light text-4xl lg:text-xl no-underline;
}

.no-scroll {
  overflow: hidden;
}
</style>
