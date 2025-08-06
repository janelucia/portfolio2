<template>
  <header
    class="flex items-center justify-between w-full h-16 p-4 z-60"
    :class="headerClass"
  >
    <p class="text-3xl font-bold text-text-light">{JS}</p>
    <div @click="toggleMenu" class="hamburger" :class="{ change: isActive }">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <nav
      :class="[
        'fixed bg-white flex flex-col items-center justify-evenly top-16 right-0 w-full h-screen p-4 z-50 transition-transform duration-500 ease-in-out',
        { 'translate-x-0': isActive, 'translate-x-full': !isActive },
      ]"
      aria-label="mobile menu"
    >
      <!-- Mobile menu -->
      <div class="flex flex-col items-center gap-8">
        <a
          v-for="nav in navigation"
          :href="nav.url"
          class="menu-item"
          :class="{ active: activeSection === nav.id }"
          @click="toggleMenu"
          >{{ nav.name }}</a
        >
      </div>
      <div class="flex gap-4">
        <a v-for="contact in contactInfo" :key="contact" :href="contact.url">
          <Icon :name="contact.icon" class="text-2xl" />
        </a>
      </div>
    </nav>
    <!-- Desktop menu -->
    <nav class="hidden w-full lg:flex justify-evenly" aria-label="desktop menu">
      <a
        v-for="nav in navigation"
        :href="nav.url"
        class="menu-item"
        :class="{ active: activeSection === nav.id }"
        >{{ nav.name }}</a
      >
    </nav>
  </header>
  <main class="flex flex-col items-center gap-4 top-16">
    <slot />
  </main>
  <footer class="flex items-center justify-between p-4 bg-background">
    <p class="text-3xl font-bold text-text-light">{JS}</p>
    <ul class="flex gap-4">
      <li v-for="contact in contactInfo" :key="contact.icon">
        <a :href="contact.url" target="_blank">
          <Icon :name="contact.icon" class="text-2xl" />
        </a>
      </li>
    </ul>
  </footer>
</template>
<script setup lang="ts">
import { ref } from "vue";
import aboutJson from "~/helper/about.json";

const contactInfo = aboutJson.contact;

const isActive = ref(false);
const isScrolled = ref(false);
const activeSection = ref("hello");

const navigation = [
  { name: "Hello", url: "#hello", id: "hello" },
  { name: "Projects", url: "#projects", id: "projects" },
  // { name: 'Blog', url: '#' },
  { name: "Get in touch", url: "#contact", id: "contact" },
];

function checkScroll() {
  isScrolled.value = window.scrollY > 0;
}

// Navigation state tracking
const visibleAnchors = ref(new Set<string>());
const lastSeenAnchor = ref("hello");
const lastScrollY = ref(0);
const scrollDirection = ref<'up' | 'down'>('down');

function setupAnchorObserver() {
  // Observer configuration - account for fixed header height
  const observerConfig = {
    rootMargin: "-64px 0px 0px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    // Track scroll direction by comparing current position with last position
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.value) {
      scrollDirection.value = 'down';
    } else if (currentScrollY < lastScrollY.value) {
      scrollDirection.value = 'up';
    }
    lastScrollY.value = currentScrollY;

    // Update set of currently visible anchors
    entries.forEach((entry) => {
      const anchorId = entry.target.id;
      if (entry.isIntersecting) {
        visibleAnchors.value.add(anchorId);
      } else {
        visibleAnchors.value.delete(anchorId);
      }
    });

    // Determine active navigation section
    const sectionOrder = ["hello", "projects", "contact"];
    let newActiveSection = activeSection.value; // Keep current by default

    if (visibleAnchors.value.size > 0) {
      // When anchors are visible, use the lowest (last in order) one
      for (const sectionId of sectionOrder) {
        if (visibleAnchors.value.has(sectionId)) {
          newActiveSection = sectionId;
          lastSeenAnchor.value = sectionId;
        }
      }
    } else if (scrollDirection.value === 'up') {
      // When scrolling up and no anchors visible, go to previous section
      const lastIndex = sectionOrder.indexOf(lastSeenAnchor.value);
      if (lastIndex > 0) {
        newActiveSection = sectionOrder[lastIndex - 1];
      } else {
        newActiveSection = "hello";
      }
    }
    // When scrolling down and no anchors visible, keep current section

    activeSection.value = newActiveSection;
  }, observerConfig);

  // Observe all section anchor elements
  const anchors = ["hello", "projects", "contact"];
  anchors.forEach((anchorId) => {
    const element = document.getElementById(anchorId);
    if (element) {
      observer.observe(element);
    }
  });

  return observer;
}

const headerClass = computed(() => {
  return (
    "fixed top-0 z-50 w-full transition-all duration-300 " +
    (isScrolled.value
      ? "bg-white shadow-lg backdrop-blur-sm"
      : "bg-white/90 backdrop-blur-sm")
  );
});

function toggleMenu() {
  isActive.value = !isActive.value;
}

watch(isActive, (value) => {
  if (value) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});

let anchorObserver: IntersectionObserver | null = null;

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  anchorObserver = setupAnchorObserver();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
  document.body.classList.remove("no-scroll");
  if (anchorObserver) {
    anchorObserver.disconnect();
  }
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

.hamburger {
  @apply cursor-pointer lg:hidden flex flex-col items-end gap-1 z-10;
}

.bar1,
.bar3 {
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
  content: "";
}

.menu-item:hover::after,
.menu-item.active::after {
  @apply w-[110%];
}

.menu-item.active {
  @apply text-primary font-medium;
}

.menu-item.visited {
  @apply text-primary;
}

.menu-item.visited::after {
  @apply bg-primary;
}
</style>
