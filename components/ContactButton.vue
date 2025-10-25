<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="flex items-center justify-center gap-3 p-6 transition-all duration-300 border border-gray-200 bg-gray-50 rounded-xl hover:shadow-lg hover:border-blue-200 hover:bg-blue-50 group"
  >
    <Icon
      :name="icon"
      class="w-8 h-8 transition-transform group-hover:scale-110"
      :class="iconClass"
    />
    <span
      class="text-base font-semibold text-gray-900 md:text-lg group-hover:text-blue-700"
      >{{ contactName }}</span
    >
  </a>
</template>

<script setup lang="ts">
defineProps<{
  url: string;
  icon: string;
  iconClass?: string;
  contactName?: string;
}>();
</script>
