<template>
  <Section
    :section-title="$t('technologies.title')"
    :section-subtitle="$t('technologies.subtitle')"
    :highlight-word="$t('technologies.highlight')"
    anchor-ref="technologies"
    padding-t-b="py-16">
    <div class="flex flex-col max-w-6xl gap-12 mx-auto">
      <div
        class="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        role="list"
        aria-label="Technology skills">
        <button
          v-for="skill in skillInfos"
          :key="skill.name"
          type="button"
          class="flex items-center justify-center p-4 transition-all duration-300 rounded-lg cursor-pointer min-w-20 min-h-20 group hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          @click="setActiveSkill(skill.name)"
          :aria-label="`Learn more about ${skill.name}`"
          role="listitem">
          <Icon
            v-if="skill.icon"
            :name="skill.icon"
            class="w-12 h-12 transition-colors md:w-16 md:h-16 text-primary group-hover:text-accent"
            :aria-hidden="true"
          />
          <span class="sr-only">{{ skill.name }}</span>
        </button>
      </div>

      <div class="flex justify-center text-center">
        <p class="max-w-2xl text-base text-gray-600">
          {{ $t("technologies.description") }}
        </p>
      </div>
    </div>

    <div
      v-if="activeSkill"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      @click="clearActiveSkill"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`skill-modal-title-${activeSkill}`"
      aria-describedby="skill-modal-description">
      <div
        class="relative w-full max-w-sm p-6 bg-white rounded-lg shadow-xl"
        @click.stop>
        <button
          @click="clearActiveSkill"
          class="absolute text-gray-400 transition-colors rounded top-4 right-4 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Close skill details"
          type="button">
          <Icon name="mdi:close" class="w-5 h-5" aria-hidden="true" />
        </button>

        <div class="pr-8">
          <div class="flex items-center gap-3 mb-3">
            <Icon
              v-if="skillInfos.find((s) => s.name === activeSkill)?.icon"
              :name="skillInfos.find((s) => s.name === activeSkill)?.icon"
              class="w-6 h-6 text-primary"
              aria-hidden="true"
            />
            <h3
              :id="`skill-modal-title-${activeSkill}`"
              class="text-lg md:text-xl font-semibold text-gray-900">
              {{ skillInfos.find((s) => s.name === activeSkill)?.name || "" }}
            </h3>
          </div>
          <p
            id="skill-modal-description"
            class="text-base leading-relaxed text-gray-600">
            {{ skillInfos.find((s) => s.name === activeSkill)?.description }}
          </p>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/Section.vue";
import aboutJson from "~/helper/about.json";

const skillInfos = aboutJson.skills;
const activeSkill = ref("");

function setActiveSkill(skillName: string) {
  activeSkill.value = skillName;
}

function clearActiveSkill() {
  activeSkill.value = "";
}
</script>
