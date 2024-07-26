<template>
    <header class="flex w-full z-60 h-16 justify-between items-center p-4" :class="headerClass">
      <p class="text-3xl font-bold text-text-light">{JS}</p>
      <div @click="toggleMenu" class="hamburger" :class="{ change: isActive }">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <nav :class="['fixed bg-white flex flex-col items-center justify-evenly top-16 right-0 w-full h-screen p-4 z-50 transition-transform duration-500 ease-in-out', { 'translate-x-0': isActive, 'translate-x-full': !isActive }]" aria-label="mobile menu">
        <!-- Mobile menu -->
        <div class="flex flex-col gap-8 items-center">
          <a v-for="nav in navigation" :href="nav.url" class="menu-item" @click="toggleMenu">{{nav.name}}</a>
        </div>
        <div class="flex gap-4">
          <a v-for="contact in contactInfo" :key="contact" :href="contact.url">
            <Icon :name="contact.icon" class="text-2xl"/>
          </a>
        </div>
      </nav>
      <!-- Desktop menu -->
      <nav class="hidden lg:flex justify-evenly w-full" aria-label="desktop menu">
        <a v-for="nav in navigation" :href="nav.url" class="menu-item">{{nav.name}}</a>
      </nav>
    </header>
    <main class="flex flex-col gap-4 items-center top-16">
      <slot />
    </main>
    <footer class="p-4 flex items-center justify-between bg-background">
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

const navigation = [
  { name: 'Hello', url: '#hello' },
  { name: 'Projects', url: '#projects' },
  // { name: 'Blog', url: '#' },
  { name: 'Get in touch', url: '#contact' },
];

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

<style scoped>
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

.no-scroll {
  overflow: hidden;
}

.menu-item {
  @apply text-text-light text-4xl lg:text-xl no-underline relative;
}

.menu-item::after {
  @apply absolute w-0 h-0.5 bottom-[-2px] left-[-5%] bg-current transition-all duration-300 ease-in-out;
  content: '';
}

.menu-item:hover::after {
  @apply w-[110%];
}
</style>
