<template>
  <Section
    text-size="text-2xl md:text-4xl"
    bg-color="bg-primary"
    section-title="Projects"
    bg-color-section="bg-white"
    anchor-ref="projects"
  >
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="project in filteredProjects"
        :key="project.name"
        :title="project.name"
        :additional-information="project.currentState"
        :image="project.image"
        bg-card-color="bg-background"
      >
        <p class="mb-4">{{ project.description }}</p>
        <div class="flex items-center justify-end gap-4">
          <a
            :href="project.githubUrl"
            class="text-2xl transition-colors hover:text-primary"
          >
            <Icon :name="contactInfos.github.icon" />
          </a>
          <a
            v-if="project.liveUrl"
            class="px-4 py-2 text-lg transition-colors rounded shadow-sm bg-primary hover:bg-accent"
            :href="project.liveUrl"
            target="_blank"
          >
            Try it out
          </a>
        </div>
      </Card>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from "~/components/Section.vue";
import aboutJson from "~/helper/about.json";
import projectJson from "~/helper/projects.json";

const contactInfos = aboutJson.contact;
const projectInfos = projectJson;

const filteredProjects = computed(() => {
  return projectInfos.filter((project) => project.githubUrl);
});
</script>