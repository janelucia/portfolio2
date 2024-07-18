<template>
  <div class="flex items-baseline gap-4">
    <h2 class="font-bold whitespace-nowrap" :class="textSize">{{ title }}</h2>
    <div class="w-full h-2 rounded" :class="bgColor"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  bgColor: string;
  textSize: string;
}>();
</script>
