<template>
  <li class="flex items-start gap-3">
    <div
      class="flex-shrink-0 w-2 h-2 mt-2 rounded-full"
      :class="diskColor ? diskColor : 'bg-gray-400'"></div>
    <span class="text-gray-800">{{ text }}</span>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  diskColor?: string;
}>();
</script>
