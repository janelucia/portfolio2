<template>
  <div class="p-4 flex flex-col gap-2 bg-white rounded shadow-md">
    <div v-if="image" class="w-full">
      <NuxtImg :src="image"/>
    </div>
    <p class="text-xl font-bold">{{ title }}</p>
    <p class="text-gray-700">{{ additionalInformation }}</p>
    <p v-if="subtitle" class="font-bold">{{ subtitle }}</p>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
  additionalInformation?: string;
  image?: string;
}>()
</script>
