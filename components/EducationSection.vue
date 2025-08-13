<template>
  <Section
    :section-title="$t('education.title')"
    :section-subtitle="$t('education.subtitle')"
    :highlight-word="$t('education.highlight')"
    anchor-ref="education"
    padding-t-b="py-16">
    <div class="flex flex-col w-full max-w-4xl gap-8 mx-auto">
      <ExperienceCard
        v-for="education in $tm('education.data') as Education[]"
        :key="education.program"
        :title="$rt(education.program)"
        :subtitle="$rt(education.institution)"
        :period="$rt(education.period)"
        :badge="education.grade ? $rt(education.grade) : undefined"
        :details="education.details ? education.details.map((detail: any) => $rt(detail)) : undefined"
      />
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/Section.vue";
import type { Education } from "../helper/types"
</script>
