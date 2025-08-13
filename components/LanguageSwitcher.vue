<template>
  <div class="relative" ref="dropdownRef">
    <button
      @click="toggleDropdown"
      class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      :aria-label="`Current language: ${currentLanguage.name}. Click to change language`"
      :aria-expanded="isOpen">
      <span>{{ currentLanguage.code.toUpperCase() }}</span>
      <Icon 
        name="heroicons:chevron-down" 
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="scale-95 translate-y-1 opacity-0"
      enter-to-class="scale-100 translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="scale-100 translate-y-0 opacity-100"
      leave-to-class="scale-95 translate-y-1 opacity-0">
      <div
        v-if="isOpen"
        class="absolute right-0 z-50 w-40 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg backdrop-blur-sm"
        role="listbox">
        <div class="py-1">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="switchToLanguage(lang.code)"
            class="flex items-center w-full gap-3 px-4 py-3 text-sm transition-colors hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
            :class="{ 
              'bg-primary/5 text-primary': lang.code === locale,
              'text-gray-700': lang.code !== locale
            }"
            role="option"
            :aria-selected="lang.code === locale">
            <span class="flex-1 text-left">{{ lang.name }}</span>
            <Icon 
              v-if="lang.code === locale"
              name="heroicons:check"
              class="w-4 h-4 text-primary"
            />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

const isOpen = ref(false)

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' }
]

const currentLanguage = computed(() => {
  return languages.find(lang => lang.code === locale.value) || languages[0]
})

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function switchToLanguage(langCode: string) {
  setLocale(langCode)
  isOpen.value = false
}

// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const dropdownRef = ref<HTMLElement>()

function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}
</script>