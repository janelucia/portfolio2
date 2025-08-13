<template>
  <Section
    text-size="text-lg md:text-2xl"
    bg-color="bg-accent"
    section-title="Education"
    bg-color-section="bg-white"
  >
    <div class="flex flex-col gap-4">
        <ul v-for="education in educationInfos" :key="education.program">
          <Card
            :title="education.institution"
            :additional-information="education.period"
            :subtitle="education.program"
            bg-card-color="bg-background"
          >
            <p v-if="education.grade" class="text-gray-700">
              {{ education.grade }}
            </p>
            <ul
              class="text-gray-700 list-disc list-inside"
              v-for="detail in education.details"
            >
              <li>{{ detail }}</li>
            </ul>
          </Card>
        </ul>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/Section.vue";
import aboutJson from "~/helper/about.json";

const educationInfos = aboutJson.education;
</script>