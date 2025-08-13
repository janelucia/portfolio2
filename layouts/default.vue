<template>
  <header
    class="flex items-center justify-between w-full h-16 px-6 z-60"
    :class="headerClass"
  >
    <h1 class="text-2xl font-bold text-gray-900">{JS}</h1>

    <nav
      :class="[
        'fixed bg-white/95 backdrop-blur-md border-l border-gray-200 flex flex-col items-center justify-center top-0 right-0 w-80 h-screen p-8 z-50 transition-transform duration-500 ease-in-out shadow-2xl',
        { 'translate-x-0': isActive, 'translate-x-full': !isActive },
      ]"
      aria-label="mobile menu"
    >
      <div class="flex flex-col items-center gap-12">
        <a
          v-for="nav in navigation"
          :href="nav.url"
          class="text-2xl font-semibold text-gray-900 transition-colors mobile-menu-item hover:text-primary"
          :class="{ 'text-primary': activeSection === nav.id }"
          @click="toggleMenu"
          >{{ $t(`nav.${nav.id}`) }}</a
        >
      </div>
      <div class="flex flex-col items-center gap-6 mt-12">
        <LanguageSwitcher />

        <div class="flex gap-6">
          <a
            v-for="contact in contactInfo"
            :key="contact.url"
            :href="contact.url"
            class="p-3 transition-all duration-300 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-lg hover:scale-110"
          >
            <Icon :name="contact.icon" class="w-6 h-6 text-gray-700" />
          </a>
        </div>
      </div>
    </nav>

    <nav class="items-center hidden gap-8 lg:flex" aria-label="desktop menu">
      <a
        v-for="nav in navigation"
        :href="nav.url"
        class="relative px-4 py-2 font-medium text-gray-700 transition-colors desktop-menu-item hover:text-primary"
        :class="{ 'text-primary': activeSection === nav.id }"
        >{{ $t(`nav.${nav.id}`) }}</a
      >
    </nav>

    <div class="flex items-center gap-3">
      <div class="hidden lg:block">
        <LanguageSwitcher />
      </div>

      <div @click="toggleMenu" class="hamburger" :class="{ change: isActive }">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
  </header>
  <main class="flex flex-col items-center gap-4 top-16">
    <slot />
  </main>
  <footer class="py-8 bg-white border-t border-gray-200">
    <div class="max-w-6xl px-6 mx-auto">
      <div class="flex flex-col items-center gap-2">
        <p class="text-sm text-gray-500">{{ $t("footer.builtWith") }}</p>
        <p class="text-xs text-gray-400">
          © {{ new Date().getFullYear() }} {{ $t("footer.copyright") }}
        </p>
      </div>
    </div>
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
  { name: "Education", url: "#education", id: "education" },
  { name: "Work", url: "#work", id: "work" },
  { name: "Projects", url: "#projects", id: "projects" },
  { name: "Contact", url: "#contact", id: "contact" },
];

function checkScroll() {
  isScrolled.value = window.scrollY > 0;
}

const visibleAnchors = ref(new Set<string>());
const lastSeenAnchor = ref("hello");
const lastScrollY = ref(0);
const scrollDirection = ref<"up" | "down">("down");

function setupAnchorObserver() {
  const observerConfig = {
    rootMargin: "-64px 0px 0px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.value) {
      scrollDirection.value = "down";
    } else if (currentScrollY < lastScrollY.value) {
      scrollDirection.value = "up";
    }
    lastScrollY.value = currentScrollY;

    entries.forEach((entry) => {
      const anchorId = entry.target.id;
      if (entry.isIntersecting) {
        visibleAnchors.value.add(anchorId);
      } else {
        visibleAnchors.value.delete(anchorId);
      }
    });

    const sectionOrder = ["hello", "education", "work", "projects", "contact"];
    let newActiveSection = activeSection.value;

    if (visibleAnchors.value.size > 0) {
      for (const sectionId of sectionOrder) {
        if (visibleAnchors.value.has(sectionId)) {
          newActiveSection = sectionId;
          lastSeenAnchor.value = sectionId;
        }
      }
    } else if (scrollDirection.value === "up") {
      const lastIndex = sectionOrder.indexOf(lastSeenAnchor.value);
      if (lastIndex > 0) {
        newActiveSection = sectionOrder[lastIndex - 1];
      } else {
        newActiveSection = "hello";
      }
    }

    activeSection.value = newActiveSection;
  }, observerConfig);

  const anchors = ["hello", "education", "work", "projects", "contact"];
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
    "fixed top-0 z-50 w-full transition-all duration-300 border-b " +
    (isScrolled.value
      ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200"
      : "bg-white/90 backdrop-blur-sm border-transparent")
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
  @apply w-9 h-1 bg-gray-900 rounded-full;
  transition: 0.4s;
}

.bar2 {
  @apply w-6 h-1 bg-gray-900 rounded-full;
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

.desktop-menu-item::after {
  @apply absolute w-0 h-0.5 bottom-[-2px] left-0 bg-primary transition-all duration-300 ease-in-out;
  content: "";
}

.desktop-menu-item:hover::after,
.desktop-menu-item.text-primary::after {
  @apply w-full;
}

.mobile-menu-item {
  position: relative;
}

.mobile-menu-item::after {
  @apply absolute w-0 h-0.5 bottom-[-4px] left-1/2 transform -translate-x-1/2 bg-primary transition-all duration-300 ease-in-out;
  content: "";
}

.mobile-menu-item:hover::after,
.mobile-menu-item.text-primary::after {
  @apply w-full;
}
</style>
