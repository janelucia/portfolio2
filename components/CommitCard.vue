<template>
  <div class="flex flex-col gap-8 p-4 rounded-md shadow-md" :class="bgColor">
    <div class="flex justify-between gap-4">
      <div class="flex gap-4">
        <div class="avatar w-12">
            <a :href="committerUrl">
              <NuxtPicture format="webp" :src="avatarUrl" :img-attrs="{ class: 'rounded-full' }" />
            </a>
        </div>
        <div>
          <a
              :href="repositoryUrl"
              target="_blank"
              class="cursor-pointer hover:text-text-dark"
          >
            <p class="font-bold">{{ repositoryName }}</p>
          </a>
          <a
              :href="ownerUrl"
              target="_blank"
              class="cursor-pointer hover:text-text-dark"
          >
            <p>{{ ownerName }}</p>
          </a>
        </div>
      </div>
      <div class="w-8">
        <Icon name="teenyicons:git-outline" class="w-full h-full" />
      </div>
    </div>
    <div>
      <a v-if="commitMessage" :href="commitUrl" target="_blank" class="font-bold hover:text-text-dark cursor-pointer">
        {{ commitMessage }}
      </a>
      <a
          v-if="committerUrl"
          :href="committerUrl"
          target="_blank"
          class="cursor-pointer hover:text-text-dark"
      >
        <p>{{ committerName }}</p>
      </a>
      <p v-if="commitDate">{{ new Date(commitDate).toLocaleString() }}</p>
      <p v-if="latestUpdate">
        Updated: {{ new Date(latestUpdate).toLocaleString() }}
      </p>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  avatarUrl: string;
  repositoryName: string;
  ownerName: string;
  repositoryUrl: string;
  ownerUrl: string;
  latestUpdate?: string;
  commitMessage?: string;
  committerName?: string;
  commitDate?: string;
  commitUrl?: string;
  committerUrl?: string;
  bgColor: string
}>();
</script>
