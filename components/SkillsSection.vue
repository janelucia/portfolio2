<template>
  <Section
    text-size="text-lg md:text-2xl"
    bg-color="bg-accent"
    section-title="Skills"
    bg-color-section="bg-background">
    <div
      class="relative flex flex-wrap justify-center gap-4 md:justify-between">
      <a
        v-for="skill in skillInfos"
        :key="skill.name"
        class="flex flex-col items-center w-1/3 gap-2 cursor-pointer md:w-1/5">
        <div
          class="flex flex-col items-center p-4 rounded hover:bg-accent"
          @click.stop="setActiveSkill(skill.name)"
          @mouseenter="setActiveSkill(skill.name)"
          @mouseleave="clearActiveSkill">
          <Icon
            v-if="skill.icon"
            :name="skill.icon"
            alt="Logo"
            class="w-16 h-16"
          />
          {{ skill.name }}
          <Card
            v-if="activeSkill === skill.name"
            :title="skill.name"
            :icon="skill.icon"
            :close-icon="clearActiveSkill"
            bg-card-color="bg-secondary text-text-light rounded shadow-lg z-10 w-full lg:w-1/2 p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {{ skill.description }}
          </Card>
        </div>
      </a>
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