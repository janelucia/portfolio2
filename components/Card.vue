<template>
  <div class="rounded shadow-sm" :class="bgCardColor">
    <div v-if="image" class="w-full">
      <NuxtImg :src="image" class="rounded-t"/>
    </div>
    <div class="p-4 flex flex-col gap-2">
      <p class="text-xl font-bold">{{ title }}</p>
      <p class="text-gray-700">{{ additionalInformation }}</p>
      <p v-if="subtitle" class="font-bold">{{ subtitle }}</p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  additionalInformation?: string;
  bgCardColor: string;
  subtitle?: string;
  image?: string;
}>()
</script>
