<template>
  <button
    @click="switchLanguage"
    class="flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-700 transition-all duration-200 border border-gray-200 rounded-lg hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    :aria-label="`Switch to ${otherLanguage.name}`"
  >
    <span class="text-lg">{{ otherLanguage.flag }}</span>
  </button>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  de: { name: 'Deutsch', flag: '🇩🇪' }
}

const otherLanguage = computed(() => {
  return locale.value === 'en' ? languages.de : languages.en
})

function switchLanguage() {
  const newLocale = locale.value === 'en' ? 'de' : 'en'
  setLocale(newLocale)
}
</script>