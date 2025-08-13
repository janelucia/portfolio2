<template>
  <div class="w-full overflow-hidden border border-gray-200 bg-gray-50 rounded-xl">
    <div class="flex flex-col gap-4 p-6">
      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <h3 class="text-xl font-semibold text-gray-900">
            {{ title }}
          </h3>
          <span
            class="px-3 py-1 text-sm font-medium text-gray-800 rounded-full bg-accent/40"
          >
            {{ period }}
          </span>
        </div>
        <p class="text-base md:text-lg text-gray-600">
          {{ subtitle }}
        </p>
      </div>

      <ListItem v-if="badge" :text="badge" disk-color="bg-primary" />

      <div v-if="details && details.length > 0" class="flex flex-col gap-3">
        <ul class="flex flex-col gap-2">
          <ListItem
            v-for="detail in details"
            :text="detail"
            :key="detail"
            class="flex items-start gap-3"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  period: string;
  badge?: string;
  details?: string[];
}

defineProps<Props>();
</script>
