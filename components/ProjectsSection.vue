<template>
  <Section
    section-title="My creative portfolio"
    section-subtitle="Projects"
    highlight-word="creative"
    anchor-ref="projects"
    padding-t-b="py-16"
  >
    <div
      class="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
    >
      <div
        v-for="project in filteredProjects"
        :key="project.name"
        class="flex flex-col h-full overflow-hidden transition-shadow duration-300 border border-gray-200 bg-gray-50 rounded-xl hover:shadow-lg"
      >
        <div class="flex-shrink-0 h-48 bg-gray-100">
          <img
            v-if="project.image"
            :src="project.image"
            :alt="`Screenshot of ${project.name} project`"
            class="object-cover w-full h-full"
          />
          <div
            v-else
            class="flex items-center justify-center h-full text-gray-400"
          >
            <Icon name="heroicons:photo" class="w-12 h-12" />
          </div>
        </div>

        <div class="flex flex-col justify-between flex-grow gap-4 p-6">
          <div class="flex flex-col gap-2">
            <div class="flex flex-wrap items-start justify-between gap-4">
              <h3 class="text-xl font-semibold text-gray-900">
                {{ project.name }}
              </h3>
              <span
                v-if="project.currentState"
                class="px-3 py-1 text-sm font-medium text-gray-800 rounded-full bg-accent/40"
              >
                {{ project.currentState }}
              </span>
            </div>
          </div>

          <p class="flex-grow leading-relaxed text-gray-600">
            {{ project.description }}
          </p>

          <div class="flex items-center justify-between w-full gap-4">
            <a
              :href="project.githubUrl"
              class="flex items-center gap-2 text-gray-600 transition-colors hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
            >
              <Icon :name="contactInfos.github.icon" class="w-5 h-5" />
              <span class="text-sm font-medium">Code</span>
            </a>

            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-primary hover:bg-accent"
            >
              <span>Try it out</span>
              <Icon
                name="heroicons:arrow-top-right-on-square"
                class="w-4 h-4"
              />
            </a>
          </div>
        </div>
      </div>
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
