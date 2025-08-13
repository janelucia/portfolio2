<template>
  <div v-if="title" class="flex flex-col items-center gap-2 text-center">
    <p
      class="text-sm font-semibold tracking-widest text-gray-500 uppercase"
      aria-hidden="true">
      {{ subtitle || "Section" }}
    </p>
    <h2 class="text-2xl md:text-3xl font-bold text-gray-900" v-html="highlightedTitle"></h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  bgColor?: string;
  textSize?: string;
  subtitle?: string;
  highlightWord?: string;
}>();

const highlightedTitle = computed(() => {
  if (!props.highlightWord) return props.title;

  const regex = new RegExp(`(${props.highlightWord})`, "gi");
  return props.title?.replace(regex, '<span class="text-primary">$1</span>');
});
</script>
