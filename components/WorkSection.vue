<template>
  <Section
    text-size="text-lg md:text-2xl"
    bg-color="bg-accent"
    section-title="Work"
    bg-color-section="bg-background"
  >
    <ul v-for="work in workInfos" :key="work.company">
      <Card
        :title="work.company"
        :additional-information="work.period"
        :subtitle="work.position"
        bg-card-color="bg-white"
      >
        <ul
          class="text-gray-700 list-disc list-inside"
          v-for="detail in work.details"
        >
          <li>{{ detail }}</li>
        </ul>
      </Card>
    </ul>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/Section.vue";
import aboutJson from "~/helper/about.json";

const workInfos = aboutJson.work;
</script>