<template>
  <div class="flex flex-col h-full rounded shadow-sm" :class="bgCardColor">
    <div v-if="image || icon" class="w-full">
      <NuxtPicture
        v-if="image"
        format="webp"
        :src="image"
        :img-attrs="{
          class: 'w-full h-48 object-cover rounded-t',
        }"
      />
      <div v-if="icon" class="flex items-center justify-center h-48">
        <Icon :name="icon" class="w-16 h-16" />
      </div>
      <div v-if="closeIcon" class="lg:hidden">
        <Icon
          name="eva:close-fill"
          @click.stop="closeIcon"
          class="absolute w-8 h-8 rounded-full top-2 right-2 hover:text-primary"
        />
      </div>
    </div>
    <div class="flex flex-col justify-between flex-1 gap-2 p-4">
      <div class="flex flex-col gap-2">
        <p class="text-xl font-bold md:text-2xl">{{ title }}</p>
        <p class="text-gray-700 md:text-xl">{{ additionalInformation }}</p>
        <p v-if="subtitle" class="font-bold md:text-xl">{{ subtitle }}</p>
      </div>
      <div class="flex flex-col gap-2 mt-auto">
        <slot />
      </div>
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
}>();
</script>
