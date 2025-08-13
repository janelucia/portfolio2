<template>
  <div
    class="flex flex-col gap-6 p-6 transition-all duration-200 hover:shadow-lg group"
    :class="bgColor"
  >
    <!-- Header Section -->
    <div class="flex items-start justify-between">
      <div class="flex items-center gap-4">
        <div class="relative">
          <a
            :href="committerUrl"
            class="block transition-transform hover:scale-105"
          >
            <NuxtPicture
              format="webp"
              :src="avatarUrl"
              :img-attrs="{
                class:
                  'w-12 h-12 rounded-full ring-2 ring-gray-200 group-hover:ring-primary/50 transition-all',
              }"
            />
          </a>
        </div>

        <div class="flex flex-col gap-1">
          <a
            :href="repositoryUrl"
            target="_blank"
            class="text-lg font-semibold text-gray-900 transition-colors hover:text-primary"
          >
            {{ repositoryName }}
          </a>
          <a
            :href="ownerUrl"
            target="_blank"
            class="text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            {{ ownerName }}
          </a>
        </div>
      </div>

      <Icon name="teenyicons:git-outline" class="w-8 h-8 text-gray-600" />
    </div>

    <div class="flex flex-col gap-3">
      <a
        v-if="commitMessage"
        :href="commitUrl"
        target="_blank"
        class="text-base font-medium leading-relaxed text-gray-900 transition-colors hover:text-primary"
      >
        {{ commitMessage }}
      </a>

      <div class="flex items-center justify-between text-sm text-gray-500">
        <div class="flex items-center gap-2">
          <span>by</span>
          <a
            v-if="committerUrl"
            :href="committerUrl"
            target="_blank"
            class="font-medium transition-colors hover:text-primary"
          >
            {{ committerName }}
          </a>
        </div>

        <time v-if="commitDate" class="font-mono text-xs">
          {{ formatDate(commitDate) }}
        </time>
      </div>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  avatarUrl: string | undefined;
  repositoryName: string | undefined;
  ownerName: string | undefined;
  repositoryUrl: string | undefined;
  ownerUrl: string | undefined;
  latestUpdate?: string | undefined;
  commitMessage?: string | undefined;
  committerName?: string | undefined;
  commitDate?: string | undefined;
  commitUrl?: string | undefined;
  committerUrl?: string | undefined;
  bgColor?: string;
}>();

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 1) return "today";
  if (diffDays <= 7) return `${diffDays}d ago`;
  if (diffDays <= 30) return `${Math.ceil(diffDays / 7)}w ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
</script>
