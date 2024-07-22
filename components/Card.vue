<template>
  <div class="rounded shadow-sm flex flex-col gap-2 md:flex-row h-full" :class="bgCardColor">
    <div v-if="image" class="w-full md:w-1/2 lg:w-1/3">
      <NuxtPicture format="webp" :src="image" :img-attrs="{ class:'w-full rounded-t md:rounded-tr-none md:rounded-bl md:rounded-tl md:h-full' }"/>
    </div>
    <div class="p-4 flex flex-col gap-2 flex-1 justify-evenly">
      <p class="text-xl font-bold md:text-2xl">{{ title }}</p>
      <p class="text-gray-700 md:text-xl">{{ additionalInformation }}</p>
      <p v-if="subtitle" class="font-bold md:text-xl">{{ subtitle }}</p>
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
