<template>
  <div class="px-4 py-12 flex flex-col gap-4 w-full lg:max-w-screen-xl" :class="bgColorSection">
    <SectionHeader :title="sectionTitle" :bgColor="bgColor" :text-size="textSize" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
defineProps<{
  bgColorSection: string;
  bgColor: string;
  sectionTitle: string;
  textSize: string;
}>()
</script>
