<template>
  <Section
    :section-title="$t('education.title')"
    :section-subtitle="$t('education.subtitle')"
    :highlight-word="$t('education.highlight')"
    anchor-ref="education"
    padding-t-b="py-16"
  >
    <div class="flex flex-col max-w-4xl gap-8 mx-auto">
      <div
        v-for="education in $tm('education.data')"
        :key="education"
        class="flex flex-col gap-6"
      >
        <div
          class="overflow-hidden border border-gray-200 bg-gray-50 rounded-xl"
        >
          <div class="flex flex-col gap-4 p-6">
            <div class="flex flex-col gap-2">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <h3 class="text-xl font-semibold text-gray-900">
                  {{ $rt(education.program) }}
                </h3>
                <span
                  class="px-3 py-1 text-sm font-medium text-gray-800 rounded-full bg-accent/40"
                >
                  {{ $rt(education.period) }}
                </span>
              </div>
              <p class="text-lg text-gray-600">
                {{ $rt(education.institution) }}
              </p>
            </div>

            <ListItem
              v-if="education.grade && $rt(education.grade)"
              :text="$rt(education.grade)"
              disk-color="bg-primary"
            />

            <div
              v-if="education.details && education.details.length > 0"
              class="flex flex-col gap-3"
            >
              <ul class="flex flex-col gap-2">
                <ListItem
                  v-for="detail in education.details"
                  :text="$rt(detail)"
                  :key="detail"
                  class="flex items-start gap-3"
                />
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
</script>
