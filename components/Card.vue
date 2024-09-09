<template>
  <div class="rounded shadow-sm flex flex-col gap-2 md:flex-row" :class="bgCardColor">
    <div v-if="image || icon" class="w-full md:w-1/3 flex justify-center items-center">
      <NuxtPicture v-if="image" format="webp" :src="image" :img-attrs="{ class:'w-full rounded-t md:rounded-tr-none md:rounded-bl md:rounded-tl md:h-full' }"/>
      <Icon v-if="icon" :name="icon" class="w-1/2 h-1/2 md:w-2/3 md:h-2/3 lg:w-full lg:h-full" />
      <div v-if="closeIcon" class="lg:hidden">
        <Icon name="eva:close-fill" @click.stop="closeIcon" class="absolute top-2 right-2 hover:text-primary rounded-full w-8 h-8"/>
      </div>
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
  icon?: string;
  closeIcon?: () => void;
}>()
</script>
