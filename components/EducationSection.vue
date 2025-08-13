<template>
  <Section
    text-size="text-lg md:text-2xl"
    bg-color="bg-accent"
    section-title="Education"
    bg-color-section="bg-white"
  >
    <div class="flex flex-col justify-between gap-4 lg:flex-row">
      <div class="flex flex-col w-full gap-4">
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
      <div class="lg:w-1/2">
        <LiteYouTubeEmbed
          id="sR6hhkqADF0"
          title="Mein Studium an der FH Kiel: Informatik"
          muted
        ></LiteYouTubeEmbed>
        <div class="relative flex justify-end w-full">
          <Icon
            name="material-symbols:info-outline"
            class="text-2xl cursor-pointer text-text-light"
            @click="toggleTooltip"
            @mouseover="showTooltip(true)"
            @mouseleave="showTooltip(false)"
          />
          <div
            v-if="isTooltipVisible"
            class="absolute p-2 mt-2 rounded shadow-lg top-full bg-secondary text-text-light"
          >
            <p class="text-lg">
              I had the pleasure to speak on behalf of my studies: computer
              science at the University of Applied Sciences.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/Section.vue";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";
import aboutJson from "~/helper/about.json";

const educationInfos = aboutJson.education;

const isTooltipVisible = ref(false);

function toggleTooltip() {
  isTooltipVisible.value = !isTooltipVisible.value;
}

function showTooltip(show: boolean) {
  isTooltipVisible.value = show;
}
</script>