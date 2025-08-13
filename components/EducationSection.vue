<template>
  <Section
    section-title="My academic journey"
    section-subtitle="Education"
    highlight-word="academic"
    anchor-ref="education"
    padding-t-b="py-16"
  >
    <div class="flex flex-col max-w-4xl gap-8 mx-auto">
      <div
        v-for="education in educationInfos"
        :key="education.program"
        class="flex flex-col gap-6"
      >
        <div
          class="overflow-hidden border border-gray-200 bg-gray-50 rounded-xl"
        >
          <div class="flex flex-col gap-4 p-6">
            <div class="flex flex-col gap-2">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <h3 class="text-xl font-semibold text-gray-900">
                  {{ education.program }}
                </h3>
                <span
                  class="px-3 py-1 text-sm font-medium text-gray-800 rounded-full bg-accent/40"
                >
                  {{ education.period }}
                </span>
              </div>
              <p class="text-lg text-gray-600">
                {{ education.institution }}
              </p>
            </div>

            <div v-if="education.grade" class="flex items-center gap-2">
              <div class="flex-shrink-0 w-2 h-2 rounded-full bg-primary"></div>
              <span class="text-sm font-medium text-gray-900">
                {{ education.grade }}
              </span>
            </div>

            <div
              v-if="education.details && education.details.length > 0"
              class="flex flex-col gap-3"
            >
              <ul class="flex flex-col gap-2">
                <li
                  v-for="detail in education.details"
                  :key="detail"
                  class="flex items-start gap-3"
                >
                  <div
                    class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"
                  ></div>
                  <span class="leading-relaxed text-gray-600">{{
                    detail
                  }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/Section.vue";
import aboutJson from "~/helper/about.json";

const educationInfos = aboutJson.education;
</script>
