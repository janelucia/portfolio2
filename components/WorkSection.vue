<template>
  <Section
    :section-title="$t('work.title')"
    :section-subtitle="$t('work.subtitle')"
    :highlight-word="$t('work.highlight')"
    anchor-ref="work"
    padding-t-b="py-16"
  >
    <div class="flex flex-col max-w-4xl gap-8 mx-auto w-full">
      <ExperienceCard
        v-for="work in $tm('work.data')"
        :key="work"
        :title="$rt(work.position)"
        :subtitle="$rt(work.company)"
        :period="$rt(work.period)"
        :details="work.details ? work.details.map((detail: any) => $rt(detail)) : undefined"
      />
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/Section.vue";
</script>
