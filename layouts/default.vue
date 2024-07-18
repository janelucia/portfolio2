<template>
  <div>
    <header class="flex relative z-60 h-16 justify-between items-center p-4">
      <p class="text-3xl font-bold text-text-light">{JS}</p>
      <div @click="toggleMenu" class="hamburger" :class="{ change: isActive }">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <nav v-if="isActive" class="fixed bg-white flex flex-col items-center justify-evenly top-16 left-0 w-full h-full p-4">
        <div class="flex flex-col gap-8 items-center">
          <a href="#" class="menu-item">Home</a>
          <a href="#" class="menu-item">About Me</a>
          <a href="#" class="menu-item">Projects</a>
          <a href="#" class="menu-item">Blog</a>
          <a href="#" class="menu-item">Get in touch</a>
        </div>
        <div class="flex gap-4">
          <a v-for="contact in contactInfo" :key="contact.platform" :href="contact.url">
            <Icon :name="contact.icon" class="text-2xl"/>
          </a>
        </div>
      </nav>
    </header>
    <main class="flex flex-col gap-4">
      <slot />
    </main>
    <footer class="p-4">
      <p class="text-3xl font-bold text-text-light">{JS}</p>
    </footer>
  </div>
</template>
<script setup lang="ts">

interface ContactInfo { platform: string; icon: string; url: string }


import { ref } from 'vue';
import infoJson from '~/helper/about.json';

const contactInfo : ContactInfo[] = infoJson.contact;

const isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}
</script>

<style scoped>
.hamburger {
  cursor: pointer;
  display: inline-block;
  z-index: 10;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

/* Rotate first bar */
.change .bar1 {
  transform: translate(0, 11px) rotate(-45deg);
}

/* Fade out the second bar */
.change .bar2 {
  opacity: 0;
}

/* Rotate third bar */
.change .bar3 {
  transform: translate(0, -11px) rotate(45deg);
}

.menu-item {
  @apply text-text-light text-4xl no-underline;
}
</style>
