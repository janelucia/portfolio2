<template>
  <div v-if="anchorRef" :id="anchorRef" class="h-0 w-full pb-4">
  </div>
  <div class="w-full flex flex-col items-center" :class="bgColorSection">
    <div class="px-4 py-12 flex flex-col gap-4 w-full lg:max-w-screen-xl">
      <SectionHeader :title="sectionTitle" :bgColor="bgColor" :text-size="textSize" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
defineProps<{
  bgColorSection: string;
  bgColor?: string;
  sectionTitle?: string;
  textSize?: string;
  sectionId?: string;
  anchorRef?: string;
}>()
</script>
